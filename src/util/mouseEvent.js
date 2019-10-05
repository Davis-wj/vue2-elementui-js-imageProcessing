export function MouseEvent(that) {
  that.mouseEvent = document.getElementById("myCanvas")
  that.context = that.mouseEvent.getContext('2d')
  that.mouseEvent.onmousedown = that.clickPoint;
}