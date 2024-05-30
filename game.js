export default class Game {
  constructor(w, h, controls) {
    this.controls = controls
    this.G_WIDTH = w
    this.G_HEIGHT = h
    this.BG_COLOR = "rgb(50, 50, 50)"
    this.canvasWidth = 800
    this.canvasHeight = 600

    this.currentColor = this.controls.colPicker.value
    this.currentSize = parseInt(this.controls.brushSize.value);
  }
  update(w, h) {
    this.G_WIDTH = w
    this.G_HEIGHT = h
    // console.log(this.currentSize * 2);
  }
  draw(ctx) {
    // ctx.fillStyle = this.BG_COLOR
    // ctx.fillRect(0, 0, this.G_WIDTH, this.G_HEIGHT)
    // ctx.fillStyle = "white"
    // ctx.fillRect(this.G_WIDTH / 2 - this.canvasWidth / 2, this.G_HEIGHT / 2 - this.canvasHeight / 2, this.canvasWidth, this.canvasHeight)
  }

clear(ctx) {
    console.log("cleared!")
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, this.G_WIDTH, this.G_HEIGHT)
  }

}