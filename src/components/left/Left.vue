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
        <!--进度条 -->
        <el-progress :percentage="percentage"></el-progress>
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
      stepNumber: 6, // 用于记录步骤数
      percentage: 0, // 用于记录进度
      percentageChangeNum: 0 // 用于记录每次进行条相加的数量
    };
  },
  created() {
    // 计算percentage每一步需要相加的数目
    this.percentageChangeNum = Math.ceil(100 / this.stepNumber);
  },
  mounted() {
    var that = this;
    if (window.history && window.history.pushState) {
      window.onpopstate = function() {
        console.log("后退");
        that.backEvent;
      };
    }
  },
  computed: {
    // 用于监听vux中active值的变化
    storeStateActiveValue() {
      return this.$store.state.active;
    },
    //用于监听回退事件
    backEvent() {
      console.log("回退事件触发！");
      // 如果后退 这对state中active值减去1
      this.$store.commit("activeChange", -1);
      // 并且进度条数值进行相应的减小
      if (this.percentage < 100 && this.percentage > 0)
        this.percentage -= this.percentageChangeNum;
    }
  },
  watch: {
    $route: function(newRouter, oldRouter) {
      // console.log(newRouter.params.id);
      let stepNum = Number(newRouter.params.id);
      stepNum && (this.active = stepNum);
    },
    storeStateActiveValue(newValue, oldValue) {
      //当store中state的active值改变时 跳转路由
      console.log(
        "Store Active NewValue: " +
          newValue +
          " Store Active OldValue: " +
          oldValue
      );
      // 对新值和旧值进行判断，如果发生 后退事件 则阻止下面程序的进行
      if (newValue > oldValue) {
        if (newValue && newValue !== 0) {
          // 下面对left进度条的数值进行相加操作
          if (this.percentage + this.percentageChangeNum < 100) {
            this.percentage += this.percentageChangeNum;
          } else {
            this.percentage = 100;
          }
          // 对路由进行跳转（进行下一步的操作）
          this.$router.push("/step0" + newValue + "/" + newValue);
        }
      } else if (newValue == 0) {
        // 当newValue为0时需要将进度条的数值初始化
        this.percentage = 0;
      }
    }
  },
  methods: {
    next() {
      console.log("percentageChangeNum: " + this.percentageChangeNum);
      // console.log(this.$route);
      this.$store.commit("activeChange");

      if (this.$store.state.active > this.stepNumber)
        this.$store.commit("activeChange", 0);
      // console.log(this.$store.state.fileName);
      // 设置人性化通知
      if (this.$store.state.fileName !== "") {
        // 对进度天值进行设置关联

        this.$notify({
          title: "操作成功",
          message: "成功请进行下一步操作",
          type: "success",
          duration: 2000
        });
      } else {
        this.$store.state.active = 1;
        this.$notify({
          title: "警告",
          message: "请上传图片用于测量",
          type: "warning",
          duration: 2000
        });
      }
      //下面进行percentage的相加操作
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
  overflow: hidden;
}
</style>