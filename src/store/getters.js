export default {
  initData(state) {
    return state.data;
  },
  imgData(state) {
    return state.imgData;
  },
  imageObj(state) {
    return {
      fileName: state.fileName,
      dataUrl: state.dataUrl
    };
  }
}