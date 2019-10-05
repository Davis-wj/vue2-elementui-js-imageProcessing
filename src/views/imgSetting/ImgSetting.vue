<template>
  <div id="img-setting">
    <el-button class="button" @click="drawer  = true">设置</el-button>
    <el-drawer
      ref="drawer"
      title="设置"
      @open="openDrawer"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <img-setting-select />
    </el-drawer>
  </div>
</template>

<script scoped>
import ImgSettingSelect from "./imgSettingSelect/ImgSettingSelect";

export default {
  name: "ImgSetting",
  data() {
    return {
      drawer: false,
      direction: "rtl"
    };
  },
  components: {
    ImgSettingSelect
  },
  methods: {
    handleClose(done) {
      done();
    },
    openDrawer() {
      // console.log(this.$refs.drawer._vnode);
      let drawerDom = this.$refs.drawer._vnode.elm.firstChild.firstChild;
      let top = drawerDom.firstChild;
      let main = drawerDom.lastElementChild;
      let text = top.firstChild;

      // console.log(drawerDom);
      // console.log(text);
      // drawerDom 背景
      drawerDom.style.background = "black";
      // 顶部背景
      top.style.background = "yellow";
      // 顶部文字
      text.style.fontSize = "60px";
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/button.scss";

el-drawer rtl {
  background: yellow;
}

.button {
  /*是button 充满整个div */
  width: 100%;
  height: 100%;
  /*设置button 样式 */
  background: rgba(54, 87, 78, 0.4);
  font-size: 60px;
  border: 5px solid #ffffff;
  color: white;
}

.el-button:hover {
  background: rgba(255, 199, 54, 0.8);
  border-color: #000000;
  color: black;
}

/*设置顶栏的样式*/
</style>