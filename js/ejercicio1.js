"use strict";
var cont = 1;
var chronometer;

function init() {
  var buttons = document.getElementsByTagName("button");

  buttons[0].onclick = startChrono;
  buttons[1].onclick = stopChrono;
  buttons[2].onclick = restoreChrono;

  cont = localStorage.getItem("chrono");
  startChrono();
}

function chrono() {
  localStorage.setItem("chrono", cont);
  document.getElementById("crono").innerHTML = cont++;
}

function startChrono() {
  var buttons = document.getElementsByTagName("button");

  chronometer = setInterval(chrono, 1000);

  buttons[0].disabled = true;
  buttons[1].disabled = false;
}

function stopChrono() {
  var buttons = document.getElementsByTagName("button");

  clearInterval(chronometer);

  buttons[0].disabled = false;
  buttons[1].disabled = true;
}

function restoreChrono() {
  cont = 0;
  document.getElementById("crono").innerHTML = cont;
  localStorage.setItem("chrono", cont);
}

window.onload = init;
