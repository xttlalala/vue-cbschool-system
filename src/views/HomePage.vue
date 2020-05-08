<template>
  <div class="container">
    <el-row>
      <el-col :span="2"><div class="grid-content"></div></el-col>
      <el-col :span="20">
        <div class="grid-content pictures">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <!-- <h3>{{ item }}</h3> -->
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="2"><div class="grid-content"></div></el-col>
      <el-col :span="20">
        <div class="grid-content">
          <div class="cards">
            <el-card class="box-card" style="float:left">
              <div class="h">校园活动</div>
              <div class="text">
                校园活动的集中展示板块。供学生用户实时了解校园最新活动和校园最受欢迎的活动。
              </div>
            </el-card>
            <el-card class="box-card" style="float:right">
              <div class="h">活动赞助</div>
              <div class="text">
                校园活动赞助集资板块。校园活动举办方在此板块刊登活动集资通告，企业用户在此选择有利于公司宣传的校园活动方进行合作交易。
              </div>
            </el-card>
          </div>
          <div class="cards">
            <el-card class="box-card" style="float:left">
              <div class="h">舞美摄影</div>
              <div class="text">
                舞台服装道具，毕业照拍摄的交易板块。专门为大学生提供更加个性化，便捷化的舞台服务与摄影服务。
              </div>
            </el-card>
            <el-card class="box-card" style="float:right">
              <div class="h">优学教育</div>
              <div class="text">
                大学生考研考证等再教育资源板块。学生用户可以根据个人情况选择合适自己的学习机构进行知识技能补充。
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: inline-block;
  background: rgba(242, 242, 242, 1);
  height: 800px;
  padding-top: 20px;
}
/* .cards {
  display: inline-block;
} */
.box-card {
  width: 600px;
  height: 200px;
  margin: 10px 0px;
  /* background: linear-gradient(to bottom right, #8ec5fc, #e0c3fc); */
  background: linear-gradient(to bottom right, #6495ed, #e1ffff);
}
.h {
  border-left: 5px solid white;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  font-size: 20px;
  padding: 5px 20px;
}
.text {
  padding: 25px 20px;
}

/* 轮播图 */
.el-carousel__container {
  height: 340px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 600px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 布局 */
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
</style>

<script>
export default {};
</script>
