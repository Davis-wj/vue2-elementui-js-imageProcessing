export default {
  leftShow(state) {
    state.leftShow = !state.leftShow;
  },
  setImageData(state, data) {
    state.fileName = data.fileName;
    state.imgData = data.imgData;
    state.dataUrl = data.dataUrl;
  },
  /**
   * 保存图片像素信息
   * @param {*} state
   * @param {*} data 保存有图片的RGB像素信息
   */
  setInitData(state, data) {
    // Save img r g b z vlaue
    state.data = data;
  }
}