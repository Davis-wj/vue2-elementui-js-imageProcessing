<template>
  <el-container>
    <div class="web_bg"></div>

    <el-header class="head">
      <top-head />
    </el-header>
    <el-container>
      <el-collapse-transition>
        <el-aside ref="leftHeight" v-show="$store.state.leftShow" hidden-xs-only>
          <left @next="leftNext" />
        </el-aside>
      </el-collapse-transition>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import TopHead from "../components/topHead/TopHead";
import Left from "../components/left/Left";
import Context from "../components/main/Context";
export default {
  name: "home",
  data() {
    return {
      clientHeight: ""
    };
  },
  components: {
    TopHead,
    Left,
    Context
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`; //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function() {
      this.changeFixed(this.clientHeight);
    }
  },
  methods: {
    changeFixed(clientHeight) {
      //动态修改样式
      // console.log(this.$refs.leftHeight);
      this.$refs.leftHeight.$el.style.height = "calc(100vh - 60px)";
      this.$refs.leftHeight.$el.style.background = "#ffffff";
    },
    leftNext(num) {
      console.log(num);
      if (num && num !== 0) {
        this.$router.push("/step0" + num + "/" + num);
      }
    }
  }
};
</script>
<style scoped>
.head {
  padding: 0;
}
.web_bg {
  /*虚化背景 */
  filter: blur(5px);
  /* 由于背景虚化原因会导致白边情况所以将图片放大1.1倍去除白边 */
  transform: scale(1.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-image: url("../assets/img/plant.jpg");
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</style>
