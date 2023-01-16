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


// const item = document.getElementById(`item`);
// let isDown = false;

// item.addEventListener(`mousedown`, function () {
//   isDown = true;
//   console.log(isDown);
// }, true);

// document.addEventListener(`mouseup`, function () {
//   isDown = false;
//   console.log(isDown);
// }, true);

// document.addEventListener(`mousemove`, function (event) {
//   event.preventDefault();
//   if (isDown) {
//     const deltaX = event.movementX;
//     const deltaY = event.movementY;

//     console.log(deltaX);
//     console.log(deltaY);


//     const rect = item.getBoundingClientRect();
//     item.style.left = rect.x + deltaX + "px";
//     item.style.top = rect.y + deltaY + "px";
//   }
// }, true);



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