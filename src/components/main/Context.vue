<template>
  <div id="context">


    <div class="title">
    <el-row
      <h2>植物叶片测量</h2>
    </el-row>
    </div>

    <div class="buttons">
      <el-row :gutter="20" style="display: flex;">
        <el-col :span="6" style="margin: 0 auto;">
          <el-button class="button" @click="start">开始测量</el-button>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="display: flex;">
        <el-col :span="6" style="margin: 0 auto;">
          <img-setting />
        </el-col>
      </el-row>

      <el-row :gutter="20" style="display: flex;">
        <el-col :span="6" style="margin: 0 auto;">
          <el-button class="button">关于</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ImgSetting from '../../views/imgSetting/ImgSetting'

export default {
  name: "Main",
  components:{
    ImgSetting
  },
  methods: {
    start() {
      return this.$router.push('/step01/1')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/button.scss";


.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  padding-top: 50px;
}

.buttons {
  margin-top: 350px;
}
.el-col.el-col-6 {
    /*讲按钮水平居中*/
  margin: 0, auto;
}

</style>