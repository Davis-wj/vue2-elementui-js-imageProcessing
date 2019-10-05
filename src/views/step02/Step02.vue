<template>
  <div class="Step02">
    <div class="button-box">
      <el-row>
        <el-col style="display: flex" justify="center">
          <el-button class="button" @click="grayEvent" :span="6">灰度处理</el-button>
          <el-button class="button" @click="resetEvent" :span="6">恢复</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="body-box">
      <div id="histogram"></div>
      <canvas id="myCanvas">抱歉，您的浏览器还不支持canvas。</canvas>
    </div>
    <el-row :gutter="20">
      <el-col type="flex" justify="center">
        <el-button class="button" @click="downLoadEvent">下载</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { util } from "../../util/index";
import { gray } from "../../algorithm/gray";
import { rgbToHsv } from "../../algorithm/rgb2hsv";

export default {
  name: "Step02",
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
    util.imagDataInitializetion(this);
  },
  methods: {
    grayEvent() {
      // console.log(this.imgData.data);
      console.log("01");
      console.log(this.imgData);

      gray(this.imgData.data);
      console.log(this.imgData);
      this.context.putImageData(this.imgData, 0, 0);
      this.$store.state.grayImageDate = this.imgData;
    },
    resetEvent() {
      const imgData = util.copyData(this.imgData, this.data);
      this.context.putImageData(imgData, 0, 0);
    },
    downLoadEvent() {
      util.downloadFile(this.fileName, this.myCanvas.toDataURL(), this);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/button.scss";

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.body-box {
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.6);
}
#myCanvas {
  display: flex;
  margin: 0 auto;
}
</style>