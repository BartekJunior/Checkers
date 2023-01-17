"use strict";

const firstList = document.querySelectorAll(`.box`);
const array0 = Array.from(firstList);
const arrayBox = [];

for (let i = 0; i < 64; i++) {
  arrayBox[i + 1] = array0[i];
}

// This for loop gives black and white color to all squares
for (let x = 1; x < arrayBox.length; x++) {
  if (
    x <= 8 ||
    (x > 16 && x < 25) ||
    (x > 32 && x < 41) ||
    (x > 48 && x < 57)
  ) {
    x % 2 === 0
      ? (arrayBox[x].style.backgroundColor = `black`)
      : (arrayBox[x].style.backgroundColor = `white`);
  } else {
    x % 2 === 0
      ? (arrayBox[x].style.backgroundColor = `white`)
      : (arrayBox[x].style.backgroundColor = `black`);
  }
}



// This code moves Circle to anywhere
let offset = [0,0];
const item = document.getElementById ("item");
let isDown = false;

item.addEventListener('mousedown', function(e) {
isDown = true;
offset = [
    item.offsetLeft - e.clientX,
    item.offsetTop - e.clientY
 ];
}, true);

document.addEventListener('mouseup', function() {
   isDown = false;
}, true);

document.addEventListener('mousemove', function(e) {
    e.preventDefault();
    if (isDown) {
        item.style.left = (e.clientX + offset[0]) + 'px';
        item.style.top  = (e.clientY + offset[1]) + 'px';
   }
}, true);


// TESTMOVE TESTMOVE TESTMOVE TESTMOVE TESTMOVE
let offsetTestMove = [0,0];
const testMove = document.getElementById ("testMove");
let isDownTest = false;

testMove.addEventListener('mousedown', function(e) {
isDownTest = true;
offsetTestMove = [
    testMove.offsetLeft - e.clientX,
    testMove.offsetTop - e.clientY
 ];
}, true);

document.addEventListener('mouseup', function() {
   isDownTest = false;
}, true);

document.addEventListener('mousemove', function(e) {
    e.preventDefault();
    if (isDownTest) {
        testMove.style.left = (e.clientX + offset[0]) + 'px';
        testMove.style.top  = (e.clientY + offset[1]) + 'px';
   }
}, true);







arrayBox.forEach((el, index) => {
  el.addEventListener(`mouseup`, function() {
    console.log(`mouseup on square ` + index);
  });
});










// ------------------- THIS IS FOR ITEMX -------------------

// const offsetX = [0,0];
// const itemX = document.getElementById ("itemX");
// let isDownX = false;

// itemX.addEventListener('mousedown', function(e) {
// isDownX = true;
// offsetX = [
//     itemX.offsetLeft - e.clientX,
//     itemX.offsetTop - e.clientY
//  ];
// }, true);

// document.addEventListener('mouseup', function() {
//    isDownX = false;
// }, true);

// document.addEventListener('mousemove', function(e) {
//     e.preventDefault();
//     if (isDown) {
//         itemX.style.left = (e.clientX + offsetX[0]) + 'px';
//         itemX.style.top  = (e.clientY + offsetX[1]) + 'px';
//    }
// }, true);