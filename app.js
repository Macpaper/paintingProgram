import Game from "./game.js"

const canv = document.querySelector("canvas")
const ctx = canv.getContext("2d")

const colorPicker = document.getElementById("color-picker")
const sizeTextbox = document.getElementById("size-input")
const sizeUpArrow = document.getElementById("size-arrow-up")
const sizeDownArrow = document.getElementById("size-arrow-down")
const clearButton = document.getElementById("clear-input")

const controls = {
  colPicker: colorPicker,
  brushSize: sizeTextbox,
  brushIncrease: sizeUpArrow,
  brushDecrease: sizeDownArrow,
  clearScreen: clearButton,
}


canv.width = window.innerWidth
canv.height = window.innerHeight
let mouseDown = false;

let game1 = new Game(canv.width, canv.height, controls)

controls.colPicker.addEventListener("change", changedColorPicker, false);
controls.brushSize.addEventListener("change", changedSize, false);
controls.brushIncrease.addEventListener("click", addSize, false);
controls.brushDecrease.addEventListener("click", subSize, false);
controls.clearScreen.addEventListener("click", clearScreen, false);
canv.addEventListener("mousemove", drawScreen, false);
canv.addEventListener("mousedown", e => {  
  mouseDown = true;
  ctx.fillStyle = controls.colPicker.value
  ctx.fillRect(event.pageX, event.pageY, controls.brushSize.value, controls.brushSize.value)
})
canv.addEventListener("mouseup", e => {  mouseDown = false;})


function drawScreen(event) {
  if (mouseDown) {
    ctx.fillStyle = controls.colPicker.value
    ctx.fillRect(event.pageX, event.pageY, controls.brushSize.value, controls.brushSize.value)
  }
}

function addSize(event) {
  let nextNum = parseInt(controls.brushSize.value) + 1
  if (nextNum < 1000){ 
    controls.brushSize.value = nextNum
    game1.currentSize = parseInt(controls.brushSize.value)
  }
}

function clearScreen(event) {
  game1.clear(ctx)
}

function subSize(event) {
  let nextNum = parseInt(controls.brushSize.value) - 1
  if (nextNum > 0){ 
    controls.brushSize.value = nextNum
    game1.currentSize = parseInt(controls.brushSize.value)
  }
}

function changedColorPicker(event) {
  console.log("lol new? " + event.target.value)
}

function changedSize(event) {
  let lastValue = game1.currentSize
  let nextVal = event.target.value;
  if (isNumeric(nextVal) && parseInt(nextVal) > 0 && parseInt(nextVal) < 1000){
    game1.currentSize = parseInt(nextVal);
    event.target.value = parseInt(nextVal);
  } else {
    event.target.value = parseInt(lastValue);
  }
}

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}
function gameLoop() {
  canv.width = window.innerWidth * 4 / 5
  canv.height = window.innerHeight
  game1.update(canv.width, canv.height)
  game1.draw(ctx)
}

gameLoop()
// setInterval(gameLoop, 17)