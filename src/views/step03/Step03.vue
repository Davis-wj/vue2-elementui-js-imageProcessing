<template>
  <div id="step03">
    <div class="body-box">
      <div id="histogram"></div>
      <canvas id="myCanvas">抱歉，您的浏览器还不支持canvas。</canvas>
    </div>
    <el-row :gutter="20">
      <el-col type="flex" justify="center">
        <el-button class="button" @click="down">矩形面积计算</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { util } from "../../util/index";
import { MouseEvent } from "../../util/mouseEvent";
export default {
  name: "Step03",
  data() {
    return {
      mouseEvent: "",
      myCanvas: "",
      width: "",
      height: "",
      context: "",
      fileName: "",
      data: [],
      imgData: {},
      point: []
    };
  },
  mounted() {
    util.imagDataInitializetion(this);
    MouseEvent(this);
  },
  methods: {
    down() {
      if (this.point.length == 4) {
        this.context.lineWidth = 8; //线条的宽度
        let [x1, y1, x2, y2, x3, y3, x4, y4] = [
          this.point[0].disX,
          this.point[0].disY,
          this.point[1].disX,
          this.point[1].disY,
          this.point[2].disX,
          this.point[2].disY,
          this.point[3].disX,
          this.point[3].disY
        ];
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.lineTo(x3, y3);
        this.context.lineTo(x4, y4);
        this.context.closePath();
        this.context.stroke();
        this.rectArea(x1, y1, x2, y2, x3, y3, x4, y4);
      } else {
        this.point = [];
        this.$message.error("请重新选择四边形的四个角点！");
      }
    },
    //面积计算
    rectArea(x1, y1, x2, y2, x3, y3, x4, y4) {
      function triangle(a1, b1, a2, b2, a3, b3) {
        return (a1 * b2 + a2 * b3 + a3 * b1 - a1 * b3 - a2 * b1 - a3 * b2) / 2;
      }
      let area1 = triangle(x1, y1, x2, y2, x3, y3);
      let area2 = triangle(x1, y1, x4, y4, x3, y3);
      this.$store.state.rectArea = area1 + area2; // 将面积记录到Vux
      this.$message("矩形面积记录成功！面积为：" + (area1 + area2));
      this.point = [];
    },
    clickPoint(e) {
      if (this.$store.state.rectArea == 0) {
        console.log("aaaaawww");
        let op = e.target; //获取目标元素
        //算出鼠标相对元素的位置
        let disX = e.clientX - op.offsetLeft;
        let disY = e.clientY - op.offsetTop;
        this.point.push({ disX, disY });
        console.log(this.point);
      } else {
        this.$message({
          message: "恭喜你，计算成功请进行下一步操作",
          type: "success"
        });
      }
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