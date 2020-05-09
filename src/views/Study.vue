<template>
  <div class="container">
    <el-row>
      <el-col :span="2"><div class="grid-content "></div></el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="4">
            <div class="grid-content ">
              <el-card class="navigation">
                <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-menu-item index="1">
                    <i class="el-icon-medal"></i>
                    <span slot="title">考研</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <i class="el-icon-medal"></i>
                    <span slot="title">编程</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <i class="el-icon-medal"></i>
                    <span slot="title">公务员</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-medal"></i>
                    <span slot="title">出国留学</span>
                  </el-menu-item>
                </el-menu>
              </el-card>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content pictures">
              <el-carousel indicator-position="outside">
                <!-- <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item> -->
                <el-carousel-item>
                  <img
                    src="@/images/homepage1.jpg"
                    style="width: 1035px;height: 299px;"
                  />
                </el-carousel-item>
                <el-carousel-item>
                  <img
                    src="@/images/homepage1.jpg"
                    style="    width: 1035px;
    height: 299px;"
                  />
                </el-carousel-item>
                <el-carousel-item>
                  <img
                    src="@/images/homepage1.jpg"
                    style="    width: 1035px;
    height: 299px;"
                  />
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"><div class="grid-content "></div></el-col>
    </el-row>

    <el-row>
      <el-col :span="2"><div class="grid-content "></div></el-col>
      <el-col :span="20">
        <el-row :gutter="10">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button type="primary">寻找同目标伙伴</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button type="primary">院校分析</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button type="primary">VIP考研规划</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button type="primary">自组小班</el-button>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"><div class="grid-content "></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="2"><div class="grid-content "></div></el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="16">
            <div class="grid-content container2">
              <el-card class="course">
                <div class="course-title">热门课程</div>
                <div class="course-box">
                  <!-- <div v-for="o in 8" :key="o">
                    <el-card class="basic-ac-note">
                      <div><img src="@/images/logo.png" /></div>
                      {{ "这是一个活动" + o }}
                    </el-card>
                  </div> -->
                  <el-card class="course-note">
                    <div><img src="@/images/logo.png" /></div>
                    {{ "7.1-12.15考研半年集训营" }}
                  </el-card>
                  <el-card class="course-note">
                    <div><img src="@/images/logo.png" /></div>
                    {{ "2020考研全程班" }}
                  </el-card>
                </div>
              </el-card>
              <el-card class="course">
                <div class="course-title">定向课程</div>
                <div class="course-box">
                  <!-- <div v-for="o in 8" :key="o">
                    <el-card class="basic-ac-note">
                      <div><img src="@/images/logo.png" /></div>
                      {{ "这是一个活动" + o }}
                    </el-card>
                  </div> -->
                  <el-card class="course-note">
                    <div><img src="@/images/logo.png" /></div>
                    {{ "计算机专硕考研辅导" }}
                  </el-card>
                  <el-card class="course-note">
                    <div><img src="@/images/logo.png" /></div>
                    {{ "会计专业考研辅导班" }}
                  </el-card>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content container2">
              <el-card class="book">
                <div class="book-note">最新推文</div>
                <el-table style="width: 100%">
                  <el-table-column
                    type="index"
                    label="序号"
                    width="80"
                  ></el-table-column>
                  <el-table-column
                    prop="name"
                    label="优学干货"
                    width="200"
                  ></el-table-column>
                </el-table>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"><div class="grid-content "></div></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: inline-block;
  padding-top: 20px;
}
.container2 {
  /* padding: 0px 0px 10px 0px; */
  margin: 20px;
}
.el-menu-item {
  font-size: 16px;
  padding: 0 30px;
}
.course {
  min-height: 300px;
}
.course-title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  padding: 5px 15px;
  text-align: left;
  border-left: 5px solid #6495ed;
  margin-bottom: 10px;
}
.navigation {
  min-height: 300px;
}
.el-button {
  height: 60px;
  width: 200px;
}
.book {
  min-height: 600px;
}
.book-note {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  padding: 5px;
  border-left: 5px solid #6495ed;
}
/* 课程 */
.course-box {
  display: flex;
  flex-wrap: wrap;
}
.course-note {
  height: 250px;
  width: 330px;
  margin-bottom: 10px;
  margin-left: 25px;
}
.course-box img {
  height: 170px;
  width: 300px;
  border: solid;
  margin-bottom: 10px;
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
/* .el-row {
  margin-bottom: 20px;
} */
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
