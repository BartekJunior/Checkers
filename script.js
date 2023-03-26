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



// const biNode = document.querySelectorAll(`.bi`);
// const biArray = Array.from(biNode);


// for (let i = 0; i < biArray.length; i++) {
//   biArray[i].addEventListener(`mousedown`, function () {
//     isDown = true;
//     console.log(i);

//     arrayBox.forEach((el, index) => {
//       el.addEventListener(`mouseup`, function () {
//         isDown === true ? el.appendChild(biArray[i]) : null;
//         isDown = false;
//       });
//     });
//   })
// }



// -----------PLACE ALL CIRCLES ON BOARD
const circleGreen = document.getElementById(`circleGreen`);
const circleRed = document.getElementById(`circleRed`);

for (let i = 1; i < arrayBox.length; i++) {
  if (arrayBox[i].style.backgroundColor === `white` && i < 25) {
    const clone = circleRed.cloneNode(true);
    arrayBox[i].appendChild(clone);
  }
}

for (let i = 1; i < arrayBox.length; i++) {
  if (arrayBox[i].style.backgroundColor === `white` && i > 40) {
    const clone = circleGreen.cloneNode(true);
    arrayBox[i].appendChild(clone);
  }
}




// -----------PLACE CIRCLES IN VARIABLES, MAKE COLLECTIONS
const greenColletion = [];
let greenColletion0 = document.querySelectorAll(`#circleGreen`);
greenColletion0 = Array.from(greenColletion0);

for (let i = 0; i < greenColletion0.length; i++) {
  greenColletion[i] = greenColletion0[i];
}
for (let i = 0; i < greenColletion0.length; i++) {
  greenColletion[i].value = greenColletion[i].parentNode.value;
}



const redColletion = [];
let redColletion0 = document.querySelectorAll(`#circleRed`);
redColletion0 = Array.from(redColletion0);

for (let i = 0; i < redColletion0.length; i++) {
  redColletion[i + 1] = redColletion0[i];
}





// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// -----------MOVE CIRCLE TO ANOTHER SPOT
const gameArea = document.getElementById(`gameArea`);
let circleGreenPicked;
let circleRedPicked;
let checkMoveGreen;
let checkMoveRed;
let isDown = false;

for (let i = 1; i < arrayBox.length; i++) {
  arrayBox[i].value = i;
}



gameArea.addEventListener(`click`, function (event) {
  console.log(event.target);
  console.log(event.target.value);
})





// Move green circles
gameArea.addEventListener(`mousedown`, function (event) {
  if (event.target.id === `circleGreen`) {
    circleGreenPicked = event.target;
    checkMoveGreen = event.target.parentNode.value;
    isDown = true;
  }
})

gameArea.addEventListener(`mouseup`, function (event) {
  if ((event.target.value === checkMoveGreen - 7) || (event.target.value === checkMoveGreen - 9)) {

    if (isDown === true && event.target.tagName === `DIV`) {
      event.target.appendChild(circleGreenPicked);
      isDown = false;
    }
  }

  for (let i = 1; i < greenColletion.length; i++) {
    greenColletion[i].value = greenColletion[i].parentNode.value;
  }
})


// Move red circles
gameArea.addEventListener(`mousedown`, function (event) {
  if (event.target.id === `circleRed`) {
    circleRedPicked = event.target;
    checkMoveRed = event.target.parentNode.value;
    isDown = true;
  }
})

gameArea.addEventListener(`mouseup`, function (event) {
  if ((event.target.value === checkMoveRed + 7) || (event.target.value === checkMoveRed + 9)) {

    if (isDown === true && event.target.tagName === `DIV`) {
      event.target.appendChild(circleRedPicked);
      isDown = false;
    }
  }

  for (let i = 1; i < redColletion.length; i++) {
    redColletion[i].value = redColletion[i].parentNode.value;
  }
})





// GREEN KILLS RED
gameArea.addEventListener(`mouseup`, function (event) {
  if (event.target.value === (checkMoveGreen - 9)) {

    if (event.target.id === `circleRed` && arrayBox[event.target.value - 9].childElementCount === 0) {
      arrayBox[event.target.value - 9].appendChild(circleGreenPicked);
      event.target.style.display = `none`;
      isDown = false;
    }
  }
})


// gameArea.addEventListener(`mouseup`, function (event) {
//   if (event.target.value === (checkMoveGreen - 7)) {

//     if (event.target.id === `circleRed` && arrayBox[event.target.value - 7].childElementCount === 0) {
//       arrayBox[event.target.value - 7].appendChild(circleGreenPicked);
//       event.target.style.display = `none`;
//       isDown = false;
//     }
//   }
// })







// gameArea.addEventListener(`mouseup`, function (event) {
//   if ((event.target.value === checkMoveGreen - 7) || (event.target.value === checkMoveGreen - 9)) {

//     if (event.target.id === `circleRed` && arrayBox[event.target.value - 9].childElementCount === 0) {
//       arrayBox[event.target.value - 9].appendChild(circleGreenPicked);

//     } else if
//       (event.target.id === `circleRed` && arrayBox[event.target.value - 7].childElementCount === 0) {
//       arrayBox[event.target.value - 7].appendChild(circleGreenPicked);
//     }


//   }
// })









// if ((event.target.parentNode.value === checkMove + 7) ||
// (event.target.parentNode.value === checkMove - 7) ||
// (event.target.parentNode.value === checkMove + 9) ||
// (event.target.parentNode.value === checkMove - 9)) {

// if (arrayBox[checkMove + 18].childElementCount === 0) {
//   arrayBox[checkMove + 18].appendChild(moveCircle);
// }



// for (let i = 1; i < arrayBox.length; i++) {
//   arrayBox[i].addEventListener(`click`, function() {
//     console.log(arrayBox[i]);
//   })
// }





// arrayBox.forEach(el => {
//   console.log(el.value);
// })



// arrayBox.forEach((el, index) => {
//   el.value = 77;
// })
// console.log(arrayBox[9].value);
// console.log(arrayBox[11].value);





// let arrayNumber;

// arrayBox.forEach((el, index) => {
//   el.addEventListener(`click`, function() {
//     arrayNumber = `arrayBox` + `[` + index + `]`;
//     console.log(arrayNumber);
//   })
// })
















// This code moves Circle to anywhere

// let offset = [0,0];
// const item = document.getElementById ("item");
// let isDown = false;

// item.addEventListener('mousedown', function(e) {
// isDown = true;
// offset = [
//     item.offsetLeft - e.clientX,
//     item.offsetTop - e.clientY
//  ];
// }, true);

// document.addEventListener('mouseup', function() {
//    isDown = false;
// }, true);

// document.addEventListener('mousemove', function(e) {
//     e.preventDefault();
//     if (isDown) {
//         item.style.left = (e.clientX + offset[0]) + 'px';
//         item.style.top  = (e.clientY + offset[1]) + 'px';
//    }
// }, true);


// TESTMOVE TESTMOVE TESTMOVE TESTMOVE TESTMOVE

// let offsetTestMove = [0,0];
// const testMove = document.getElementById ("testMove");
// let isDownTest = false;

// testMove.addEventListener('mousedown', function(e) {
// isDownTest = true;
// offsetTestMove = [
//     testMove.offsetLeft - e.clientX,
//     testMove.offsetTop - e.clientY
//  ];
// }, true);

// document.addEventListener('mouseup', function() {
//    isDownTest = false;
// }, true);

// document.addEventListener('mousemove', function(e) {
//     e.preventDefault();
//     if (isDownTest) {
//         testMove.style.left = (e.clientX + offset[0]) + 'px';
//         testMove.style.top  = (e.clientY + offset[1]) + 'px';
//    }
// }, true);

