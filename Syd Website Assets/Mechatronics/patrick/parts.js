// What each part is and does. Numbers that the model computes are computed here from the model, so a spec can never
// disagree with a chart. Catalogue values (TT motor, SG90, HC-SR04, L298N) are the standard datasheet figures.
import {armSolve, com, G, STOP_AT, MOTOR, motor, muPeak, powerCurve, R, SOUND, soundSpeed, supplyV, tractive, WALLS, maxRangeOf, PHI_LOW, PHI_STOW} from './model.js';

const D = 180 / Math.PI;
const f = (v, d = 2) => v.toFixed(d);

const stall = () => motor(supplyV(1), 0);
const pk = () => powerCurve(1).pts.reduce((a, b) => (b.Pm > a.Pm ? b : a));

export const TAGS = {
  structure: ['STRUCTURE', '#9aa0c3'],
  power: ['POWER', '#fbbf24'],
  motion: ['MOTION', '#60a5fa'],
  sense: ['SENSE', '#34d399'],
  control: ['CONTROL', '#a78bfa'],
  grip: ['MANIPULATION', '#e879f9'],
};

export const INFO = {
  base: {
    tag: 'structure',
    role: 'The black acrylic base every other part is bolted to.',
    desc: 'A 3 mm laser-cut plate. The two motors clamp to its sides, the caster and battery pack sit under the deck, and the HC-SR04 mounts on its front edge. It sets the wheelbase: the drive axle is 115 mm behind the caster, so the robot rolls on three points and cannot rock.',
    specs: () => [['Size', '200 x 116 x 3 mm'], ['Material', 'Black acrylic'], ['Drive axle to caster', `${f(R.casterX * 1000, 0)} mm`], ['Track (wheel to wheel)', `${f(R.track * 1000, 0)} mm`]],
  },
  deck: {
    tag: 'structure',
    role: 'A second plate on four standoffs that carries the electronics.',
    desc: 'Lifting the boards onto a deck keeps them clear of the battery and the lift servo underneath, and keeps wiring short. The slot down its middle is where the pushrod passes through when the arm is lowered. Two tall yellow brackets at the back hold the arm\'s pivot pins.',
    specs: () => [['Standoffs', '4 x 30 mm hex'], ['Slot', 'for the pushrod'], ['Carries', 'microcontroller, motor driver, ballast']],
  },
  caster: {
    tag: 'motion',
    role: 'A steel ball that holds the nose up and lets the robot pivot freely.',
    desc: 'With only two driven wheels the robot needs a third point of support. A free-rolling ball adds almost no friction and does not care which way the robot turns. Where it sits decides how much of the weight rides on the drive wheels, and that is the grip the rubber bands have to work with.',
    specs: () => [['Position', `${f(R.casterX * 1000, 0)} mm ahead of the axle`], ['Weight on drive wheels (arm stowed)', `${f(com(armSolve(PHI_STOW).theta, false).drive * 100, 0)} %`], ['Weight on drive wheels (reaching, egg held)', `${f(com(armSolve(PHI_LOW).theta, true).drive * 100, 0)} %`]],
  },
  battery: {
    tag: 'power',
    role: 'Four AA cells in series: the whole robot runs from this.',
    desc: 'It is the heaviest single part, so its position matters as much as its capacity. It sits low and just behind the axle, which keeps the centre of mass low and puts weight over the drive wheels. It feeds the motor driver directly; the microcontroller board takes its 5 V from the driver\'s regulator.',
    specs: () => [['Cells', '4 x AA, in series'], ['Nominal voltage', `${f(MOTOR.Vbat, 1)} V`], ['Reaching the motors', `${f(MOTOR.Vbat - MOTOR.Vdrop, 1)} V after the driver's drop`]],
  },
  motorL: null, motorR: null,
  wheelL: null, wheelR: null, bandL: null, bandR: null,
  l298n: {
    tag: 'power',
    role: 'Turns the microcontroller\'s weak signals into motor current, in both directions.',
    desc: 'Two H-bridges. A PWM signal switches the battery on and off thousands of times a second; the duty cycle sets the average voltage and so the speed. Reversing the polarity reverses the wheel. Shorting the motor terminals through the bridge makes the motor a generator into a short circuit, which is the electrical brake Patrick uses to stop at the ingredient.',
    specs: () => [['Channels', '2 (one per wheel)'], ['Current', '2 A per channel'], ['Voltage drop', `about ${f(MOTOR.Vdrop, 1)} V (bipolar bridge)`], ['Motor voltage at full duty', `${f(supplyV(1), 1)} V`]],
  },
  arduino: {
    tag: 'control',
    role: 'Runs the breakfast routine: read the sensor, decide, drive.',
    desc: 'An Arduino-class board. It fires the ultrasonic pulse, times the echo, turns that into a distance, and runs a small state machine: approach, brake, reach, grip, lift, turn, carry, place, retreat. Each state sets the motor PWM and the two servo angles, and the transitions are driven by what the sensor reads.',
    specs: () => [['Controller', 'ATmega328P, 16 MHz, 5 V logic'], ['Reads', 'HC-SR04 echo time'], ['Drives', '2 PWM motor channels, 2 servos'], ['Brakes when', `sensor reads ${f(STOP_AT * 100, 0)} cm, then coasts to about 8 cm`]],
  },
  ballast: {
    tag: 'structure',
    role: 'A brass weight that pulls the centre of mass back over the wheels.',
    desc: 'An arm that reaches out in front of a robot moves its centre of mass forward and unloads the drive wheels, which is exactly when they need grip. A dense lump of brass at the back moves it the other way. The share of weight on the drive wheels in the table below is what the traction model uses.',
    specs: () => [['Material', 'Brass'], ['Weight on drive wheels, stowed', `${f(com(armSolve(PHI_STOW).theta, false).drive * 100, 0)} %`], ['Weight on drive wheels, reaching', `${f(com(armSolve(PHI_LOW).theta, true).drive * 100, 0)} %`]],
  },
  sonar: {
    tag: 'sense',
    role: 'The robot\'s only eyes: it measures distance by timing an echo.',
    desc: 'The left can sends a burst of eight 40 kHz pulses, the right can listens. The distance is half the round-trip time multiplied by the speed of sound. The beam is about 15 degrees wide, so a wall that is tilted more than that sends the echo away from the receiver, and soft surfaces absorb it. The panels on the right show the echo and where its energy goes.',
    specs: () => [['Frequency', `${SOUND.f / 1000} kHz, ${SOUND.cycles}-cycle burst`], ['Beam', `${f(SOUND.beam * D, 0)}° (-6 dB)`], ['Range', `${SOUND.minRange * 100}-${SOUND.maxRange * 100} cm`], ['Speed of sound at 22 °C', `${f(soundSpeed(22), 1)} m/s`], ['Echo time at 10 cm', `${f(2 * 0.1 / soundSpeed(22) * 1e6, 0)} µs`]],
  },
  liftServo: {
    tag: 'motion',
    role: 'Raises and lowers the arm through a pushrod.',
    desc: 'A micro servo turns a long horn; the pushrod joins the horn to the arm. Because the horn is 50 mm and the attachment point on the arm only 50 mm from the pivot, a modest 56 degrees of servo travel swings the arm through more than 70 degrees. The relation between the two angles is a circle-intersection, solved live in the model.',
    specs: () => [['Type', 'SG90 micro servo'], ['Torque', '1.8 kg·cm at 4.8 V'], ['Horn radius', `${f(R.horn * 1000, 0)} mm`], ['Servo travel used', `${f(PHI_LOW * D, 0)}° to ${f(PHI_STOW * D, 0)}°`], ['Arm travel', `${f(armSolve(PHI_LOW).theta * D, 0)}° to ${f(armSolve(PHI_STOW).theta * D, 0)}°`]],
  },
  pushrod: {
    tag: 'motion',
    role: 'The link that turns a small servo rotation into a large arm swing.',
    desc: 'A fixed-length yellow link. One end rides the servo horn on a circle, the other is pinned to the arm, which itself swings about the pivot. Both ends move on circles, so the arm angle for a given servo angle is where those two circles meet, and a fixed length makes it a precise, repeatable mapping.',
    specs: () => [['Length', `${f(R.rod * 1000, 0)} mm, pin to pin`], ['Pinned to the arm at', `${f(R.armAttach * 1000, 0)} mm from the pivot`]],
  },
  arm: {
    tag: 'grip',
    role: 'Two parallel yellow bars that carry the claw out to the food.',
    desc: 'Two equal bars, one above the other, with the claw bracket hanging between their tips make a parallelogram. As the arm swings, the bracket translates without turning, so the claw stays level whatever the lift angle. That is why an egg can be raised straight up from its crate and carried without tipping.',
    specs: () => [['Bar length', `${f(R.armLen * 1000, 0)} mm`], ['Bar spacing', '35 mm'], ['Claw stays', 'level at every angle'], ['Reach (lowered)', `${f((R.pivot[0] + R.armLen * Math.cos(armSolve(PHI_LOW).theta)) * 1000 + 40, 0)} mm ahead of the axle`]],
  },
  gripper: {
    tag: 'grip',
    role: 'A 3D-printed teal claw: two hinged fingers that close on the ingredient.',
    desc: 'Two fingers swing about hinges on a printed body. They open wide enough to straddle the ingredient while the robot is still braking, then close until they feel its width. Rounded pads at the tips spread the grip so a soft food item is held, not crushed.',
    specs: () => [['Material', '3D-printed, teal'], ['Fingers', '2, each 66 mm long'], ['Opening', '28° each side'], ['Holds', 'up to about 40 mm across']],
  },
  jawServo: {
    tag: 'grip',
    role: 'Opens and closes the claw.',
    desc: 'The second micro servo sits on top of the claw body and drives both fingers. It is the last thing in the chain: the controller commands "open", waits for the arm to arrive, then commands "close". Mounting it on the claw, rather than the base, keeps the wiring short and the arm light.',
    specs: () => [['Type', 'SG90 micro servo'], ['Mass', '9 g'], ['Speed', '0.1 s per 60°']],
  },
  nameplate: {
    tag: 'structure',
    role: 'A hand-lettered MDF name tag: "Patrick".',
    desc: 'Reference 1 in the build log. Patrick is the first of the robots on this page, and the tag is the only part that does nothing but identify it, which on a table full of identical-looking chassis is worth a few grams.',
    specs: () => [['Material', 'MDF, hand-lettered'], ['Size', '88 x 44 mm']],
  },
  wiring: {
    tag: 'control',
    role: 'Jumper wires connecting the boards, motors, servos and sensor.',
    desc: 'Red and black carry battery power, the coloured pairs carry the PWM and direction signals to the driver, and the single wires bring each servo its command and the sensor its trigger and echo. A tidy loom matters in a robot that moves: a loose jumper is the most common way a build fails.',
    specs: () => [['Wires', '8 runs shown'], ['Signal levels', '5 V logic']],
  },
};

// the drive-train parts share one set of facts, computed from the model
const wheelSpecs = () => [['Diameter', '65 mm, yellow TT rim'], ['Rolling radius', `${f(R.wheelR * 1000, 1)} mm (${f((R.wheelR + R.bandT) * 1000, 1)} mm with bands)`], ['Peak grip, bare plastic', `μ ≈ ${f(muPeak(false, 'desk'), 2)}`], ['Peak grip, with bands', `μ ≈ ${f(muPeak(true, 'desk'), 2)}`]];
const motorSpecs = () => [['Type', 'TT gearmotor, 1:48'], ['No-load speed', `${f(MOTOR.w0 * 60 / (2 * Math.PI), 0)} rpm at 6 V, ${f(powerCurve(1).w0 * 60 / (2 * Math.PI), 0)} rpm at ${f(supplyV(1), 1)} V`], ['Stall torque', `${f(stall().tau, 3)} N·m at ${f(supplyV(1), 1)} V`], ['Stall current', `${f(stall().I, 2)} A`], ['Peak mechanical power', `${f(pk().Pm, 2)} W at ${f(pk().rpm, 0)} rpm`], ['Best efficiency', `${f(Math.max(...powerCurve(1).pts.map((p) => p.eff)) * 100, 0)} %`]];
INFO.motorL = INFO.motorR = {
  tag: 'motion',
  role: 'A yellow TT gearmotor: one per wheel, so the robot steers by differential speed.',
  desc: 'A small DC motor spinning fast, with a 48:1 plastic gearbox that trades speed for torque. Driving the two sides at different speeds turns the robot; driving them in opposite directions pivots it on the spot, which is how Patrick turns toward the breakfast tray. At full throttle the motor can ask for more force than a bare plastic wheel can pass to the desk.',
  specs: motorSpecs,
};
INFO.wheelL = INFO.wheelR = {
  tag: 'motion',
  role: 'A 65 mm wheel: the only place the robot touches the world.',
  desc: 'The motor\'s torque becomes a push on the desk here, and the desk can only push back as hard as friction allows. A bare plastic rim on a varnished desk grips weakly, which is why the wheels are wrapped in rubber bands. Spin the wheel faster than the robot is travelling and the slip ratio in the dynamics charts rises.',
  specs: wheelSpecs,
};
INFO.bandL = INFO.bandR = {
  tag: 'motion',
  role: 'Two rubber bands on each tyre: the cheap fix that stopped the wheels spinning.',
  desc: 'Without them the wheels slipped on the smooth desk, so the robot launched crookedly and stopped late. A rubber band raises the friction coefficient from about 0.2 to about 1, so the drive wheels can use the force the motors make. The dynamics panel compares the same start with and without them; the toggle takes them off the robot itself.',
  specs: () => [['Friction, bare plastic', `μ ≈ ${f(muPeak(false, 'desk'), 2)}`], ['Friction, with bands', `μ ≈ ${f(muPeak(true, 'desk'), 2)}`], ['Grip limit, bare', `${f(tractive({bands: false, surf: 'desk'}).limit, 2)} N`], ['Grip limit, with bands', `${f(tractive({bands: true, surf: 'desk'}).limit, 2)} N`], ['Motor force at stall', `${f(tractive({bands: true, surf: 'desk'}).pts[0][1], 2)} N`], ['Adds to radius', `${f(R.bandT * 1000, 1)} mm`]],
};
