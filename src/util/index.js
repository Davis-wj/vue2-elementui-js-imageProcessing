import {
  imageShowDom
} from '../util/imageShowDom'

const util = {
  /**
   * imagDataInitializetion函数用于初始化每个组件的图像数据
   * @param {*} that
   */
  imagDataInitializetion(that) {
    // console.log(that.fileName)
    const imageObj = that.$store.getters.imageObj; //此方法返回一个存储原始图像数据的对象。
    that.fileName = imageObj.fileName; // image name
    that.data = that.$store.getters.initData; // 返回原图的base64
    if (that.data && that.data.length) {
      imageShowDom(that)
    } else {
      // 如果没有数据 对页面进行跳转
      that.$router.replace('/step01/1');
    }
  },
  /**
   * 从原始图片数据获取数据
   * @param imgData
   * @param data
   * @returns {*}
   */
  copyData(imgData, data) {
    for (let i = 0, len = data.length; i < len; i += 4) {
      imgData.data[i] = data[i];
      imgData.data[i + 1] = data[i + 1];
      imgData.data[i + 2] = data[i + 2];
      imgData.data[i + 3] = data[i + 3];
    }
    return imgData;
  },
  /**
   * 下载图片
   * @param fileName
   * @param url
   */
  downloadFile(fileName, url, that) {
    const aLink = document.createElement('a');
    aLink.download = fileName;
    aLink.href = url;
    aLink.click();
    that.$message({
      message: '下载成功',
      type: 'success',
      center: true
    });
  },
}

export {
  util,
}