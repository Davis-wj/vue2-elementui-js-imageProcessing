export function imageShowDom(that) {
  that.myCanvas = document.getElementById('myCanvas');
  const img = new Image();
  img.src = that.$store.getters.imageObj.dataUrl;
  img.onload = () => {
    that.width = that.myCanvas.width = img.width;
    that.height = that.myCanvas.height = img.height;
    that.context = that.myCanvas.getContext('2d');
    that.context.drawImage(img, 0, 0);
    that.imgData = that.context.getImageData(0, 0, img.width, img.height);
  }
}