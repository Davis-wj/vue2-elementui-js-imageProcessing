<template>
  <section class="homepage">
    <div class="button-box-flex">
      <div class="input-upload-box">
        <input type="file" id="id" @change="handleFileChange" ref="inputer" style="height: 100%;" />本地上传
      </div>
    </div>
    <div class="body-box">
      <canvas id="myCanvas">抱歉，您的浏览器还不支持canvas。</canvas>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      myCanvas: "",
      width: "",
      height: "",
      context: "",
      fileName: "",
      data: [],
      imgData: {}
    };
  },
  mounted() {
    // 添加该方法的目的是防止 用户回退操作时导致 canvas 上没有image
    setTimeout(() => {
      console.log("aaaaa");
      this.drawCanvas(this.$store.getters.imageObj.dataUrl);
    }, 100);
  },
  methods: {
    handleFileChange(even) {
      console.log(even);
      const inputDOM = this.$refs.inputer;
      const selectedFile = inputDOM.files[0];
      console.log(selectedFile);
      this.fileName = selectedFile.name; //图像名称
      const reader = new FileReader(); //please google
      reader.onload = this.putImage2Canvas; // 生命周期函数, 当图像加载完成时
      reader.readAsDataURL(selectedFile);
    },
    putImage2Canvas(event) {
      // console.log(event.target.result)
      // event.target.result 返回图片的Base64编码
      this.drawCanvas(event.target.result, true);
    },
    drawCanvas(url, setFlag = false) {
      if (url) {
        this.myCanvas = document.getElementById("myCanvas");
        const img = new Image();
        img.src = url;
        img.onload = () => {
          this.width = this.myCanvas.width = img.width; //img 宽
          this.height = this.myCanvas.height = img.height; // img 高
          this.context = this.myCanvas.getContext("2d"); //getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
          this.context.drawImage(img, 0, 0); //将图片放入canvas
          this.imgData = this.context.getImageData(0, 0, img.width, img.height); // 复制图片ROI，参数 x, y, width, height
          // console.log(this.imgData);
          this.setDate(this.imgData.data); //获取每个像素的数据
          if (setFlag) {
            this.$store.commit("setImageData", {
              fileName: this.fileName,
              imgData: this.imgData,
              dataUrl: this.toDataUrl() //返回图片 base 64
            });
          }
        };
      }
    },
    /**
     * 保存原图base64编码
     * @param data
     */
    setDate(data) {
      for (let i = 0, len = data.length; i < len; i += 4) {
        this.data[i] = data[i]; // Red
        this.data[i + 1] = data[i + 1]; // Greend
        this.data[i + 2] = data[i + 2]; // Buld
        this.data[i + 3] = data[i + 3];
      }
      this.$store.commit("setInitData", this.data); // 保存图像RGB值到 vuex
    },
    toDataUrl() {
      return this.myCanvas.toDataURL(); // 返回图片的 Base64
    }
  }
};
</script>
<style lang="scss" scoped>
.homepage {
  padding: 10px;
  .button-box-flex {
    display: flex;
    .input-upload-box {
      width: 145px;
      flex: 0 0 145px;
    }
  }
  .body-box {
    padding-top: 10px;
    text-align: center;
  }
}
.input-upload-box {
  position: relative;
  display: inline-block;
  background: rgba(61, 61, 61, 0.3);
  border: 2px solid #ffffff;
  border-radius: 4px;
  padding: 12px 12px;
  overflow: hidden;
  color: #eeeeee;
  text-align: center;
  text-decoration: none;
  text-indent: 0;
  line-height: 60px;
  font-size: 30px;
}
.input-upload-box input {
  position: absolute;
  text-align: center;
  font-size: 30px;
  right: 0;
  top: 0;
  opacity: 0;
}
.input-upload-box:hover {
  background: #4b4b4b;
  border-color: #020202;
  border: 2px solid #000000;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}
</style>
