<template>
  <div class="container">
    <el-row>
      <el-col :span="2"><div class="grid-content "></div></el-col>
      <el-col :span="20"></el-col>
      <el-col :span="2"><div class="grid-content "></div></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: inline-block;
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
