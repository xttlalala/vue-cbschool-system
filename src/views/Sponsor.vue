<template>
  <div class="container">
    <el-row>
      <el-col :span="2"><div class="grid-content "></div></el-col>
      <el-col :span="20">
        <div class="grid-content">
          <el-row>
            <el-col :span="16">
              <div class="grid-content ">
                <el-card class="box-card1">
                  <div class="title">赞助公告</div>
                  <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column
                      label="序号"
                      width="100"
                      type="index"
                    ></el-table-column>
                    <el-table-column
                      prop="name"
                      label="赞助标题"
                      width="180"
                    ></el-table-column>
                    <el-table-column
                      prop="address"
                      label="地区"
                    ></el-table-column>
                    <el-table-column prop="time" label="时间"></el-table-column>
                    <el-table-column
                      prop="money"
                      label="金额"
                    ></el-table-column>
                  </el-table>
                </el-card>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">
                <el-card class="box-card2">
                  <div class="title">最近赞助</div>
                  <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column
                      prop="name"
                      label="赞助商家"
                      width="180"
                    ></el-table-column>
                    <el-table-column
                      prop="money"
                      label="赞助金额"
                    ></el-table-column>
                  </el-table>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-card class="recommend">
          <div style="display:flex">
            <div class="recommend-title">
              赞助商
              <br />
              推荐
            </div>
            <div class="logos"><img src="@/images/huayu.png" /></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="2"><div class="grid-content "></div></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: inline-block;
}
.box-card1 {
  min-height: 600px;
  margin: 20px;
}
.box-card2 {
  min-height: 500px;
  margin: 20px;
}
.title {
  border-left: 5px solid #6495ed;
  text-align: left;
  font-size: 18px;
  padding: 0px 10px;
  margin: 10px;
}
.recommend-title {
  padding: 15px 0px;
}
.recommend {
  display: flex;
  margin-left: 20px;
  padding: 10px;
  height: 130px;
  font-size: 20px;
  color: #6495ed;
}
.logos img {
  height: 80px;
  width: 80px;
  margin: 5px 10px;
}
.el-card {
  padding: 0px;
}
/* 布局 */
.el-row {
  margin-bottom: 20px;
}
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
