<template>
  <transition name="el-zoom-in-center">
    <div class="left" v-show="$store.state.leftShow">
      <el-steps
        class="steps"
        :space="200"
        :active="active"
        direction="vertical"
        finish-status="success"
        :align-center="true"
      >
        <el-step title="上传图片"></el-step>
        <el-step title="灰度处理"></el-step>
        <el-step title="图像校正"></el-step>
        <el-step title="图像分割"></el-step>
        <el-step title="二值化处理"></el-step>
        <el-step title="面积计算"></el-step>
        <el-button style="margin-top: 12px;" @click="next()">下一步</el-button>
      </el-steps>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Left",
  data() {
    return {
      active: 0,
      stepNumber: 6 // 用于记录步骤数
    };
  },
  watch: {
    $route: function(newRouter, oldRouter) {
      // console.log(newRouter.params.id);
      let stepNum = Number(newRouter.params.id);
      stepNum && (this.active = stepNum);
    }
  },
  methods: {
    next() {
      // console.log(this.$route);
      if (this.active++ > this.stepNumber - 1) this.active = 0;
      this.$emit("next", this.active);
      // console.log(this.$store.state.fileName);
      // 设置人性化通知
      if (this.$store.state.fileName !== "") {
        this.$notify({
          title: "操作成功",
          message: "成功请进行下一步操作",
          type: "success",
          duration: 2000
        });
      } else {
        this.$notify({
          title: "警告",
          message: "请上传图片用于测量",
          type: "warning",
          duration: 2000
        });
      }
    }
  }
};
</script>
<style scoped>
.el-step__title.is-process {
  font-size: 60px;
}
.left {
  /*调整距离顶栏的高度*/
  padding-top: 35px;
}
</style>