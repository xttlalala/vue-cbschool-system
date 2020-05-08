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
          <div class="navigation">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">校园活动</el-menu-item>
              <el-menu-item index="2">竞赛活动</el-menu-item>
              <el-menu-item index="3">拼团活动</el-menu-item>
            </el-menu>
          </div>
          <el-card class="basic-ac">
            <div class="my-box">
              <div v-for="o in 8" :key="o">
                <el-card class="basic-ac-note">
                  <div><img src="@/images/logo.png" /></div>
                  {{ "这是一个活动" + o }}
                </el-card>
              </div>
            </div>
          </el-card>
          <el-card class="box-card hot-ac">
            <div class="hot-title">本周热门活动</div>
            <div v-for="o in 10" :key="o">
              <div class="hot-ac-note">{{ "热门活动 " + o }}</div>
            </div>
          </el-card>
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
  padding: 20px 0px;
}
.basic-ac {
  float: left;
  width: 800px;
  padding-top: 10px;
  padding-left: 10px;
}
.my-box {
  display: flex;
  flex-wrap: wrap-reverse;
}
.basic-ac-note {
  height: 250px;
  width: 330px;
  margin-bottom: 10px;
  margin-left: 25px;
}
img {
  height: 170px;
  width: 300px;
  border: solid;
  margin-bottom: 10px;
}
.hot-ac {
  float: right;
  width: 400px;
  padding: 10px;
}
.hot-title {
  padding: 5px 15px;
  font-size: 18px;
  border-left: 5px solid #6495ed;
  text-align: left;
  margin-bottom: 15px;
}
.hot-ac-note {
  margin-bottom: 10px;
}
.el-menu {
  background: rgba(242, 242, 242, 1);
  width: 100%;
}
.el-menu el-menu-item {
  height: 50px;
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
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
