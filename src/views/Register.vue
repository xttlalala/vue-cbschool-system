<template>
  <div class="container">
    <el-row>
      <el-col :span="2"><div class="grid-content "></div></el-col>
      <el-col :span="20">
        <el-card>
          <el-row>
            <el-col :span="4"><div class="grid-content "></div></el-col>
            <el-col :span="16">
              <div class="title">注册</div>
              <div>
                <el-form
                  :label-position="labelPosition"
                  label-width="80px"
                  :model="formLabelAlign"
                >
                  <el-form-item label="用户名">
                    <el-input
                      v-model="formLabelAlign.tele"
                      placeholder="请输入您的手机号"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input
                      v-model="formLabelAlign.password"
                      placeholder="请输入您的密码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-input
                      v-model="formLabelAlign.password1"
                      placeholder="请再次输入您的密码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="姓名">
                    <el-input
                      v-model="formLabelAlign.name"
                      placeholder="请输入您的真实姓名"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </el-col>
            <el-col :span="8"><div class="grid-content "></div></el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="2"><div class="grid-content "></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: inline-block;
}
.el-card {
  min-height: 500px;
  margin: 50px;
}
.title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  font-size: 20px;
  margin: 20px;
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
