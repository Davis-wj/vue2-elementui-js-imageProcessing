<template>
  <div id="imgSettingSelect">
    <!--标题1 -->
    <el-row class="title" type="flex" justify="left">
      <h2 style="font-size: 40px;">保存质量</h2>
    </el-row>
    <!--选项1-->
    <el-row type="flex" justify="center">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-row>
    <!--标题2-->
    <el-row class="title" type="flex" justify="left">
      <h2 style="font-size: 40px;">语言</h2>
    </el-row>
    <!--选项2-->
    <el-row type="flex" justify="center">
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ImgSettingSelect",
  data() {
    return {
      value: "100",
      options: [
        {
          value: "100",
          label: "高"
        },
        {
          value: "80",
          label: "中"
        },
        {
          value: "30",
          label: "低"
        }
      ],
      value2: "zh_cn",
      options2: [
        {
          value: "zh_cn",
          label: "简体中文"
        },
        {
          value: "us_en",
          label: "英文"
        }
      ]
    };
  }
};
</script>

<style>
#imgSettingSelect {
  color: white;
}
.title {
  margin: 0;
  letter-spacing: 0.5em;
  margin-left: 20px;
  margin-bottom: 5px;
  color: #ffc830;
}
/* 选项栏 */
.el-select {
  margin: 0px 20px;
  padding: 0;
  width: 100vh;
}
/**设置选框文字大小 */
.el-select .el-input--suffix {
  font-size: 34px;
  color: white;
  border: 3px solid white;
}
/**设置选框背景和大小 */
.el-select .el-input--suffix .el-input__inner {
  background: black;
  /**设置选框大小 */
  padding: 30px 20px;
}
/* 控制标题 */
.title {
  font-size: 20px;
}
/**设置选项栏文字的样式 */
.el-scrollbar__view.el-select-dropdown__list .el-select-dropdown__item {
  font-size: 30px;
}
</style>