// One bundle for the page: the kitchen stage starts at once (it is the first thing a visitor sees); the teardown lab, which is
// further down the page, is only built when the visitor scrolls close to it, so the kitchen gets the whole GPU until then.
import './kitchen.js';
import {start} from './main.js';

const lab = document.getElementById('stage');
if (lab && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); start(); } }, {rootMargin: '400px'});
  io.observe(lab);
} else start();
