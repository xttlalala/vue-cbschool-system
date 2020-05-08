<template>
  <div class="container">
    <el-row>
      <el-col :span="2"><div class="grid-content "></div></el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="16">
            <div class="grid-content container2">
              <el-card>
                <div>
                  <el-autocomplete
                    v-model="state"
                    prefix-icon="el-icon-search"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入商品"
                    @select="handleSelect"
                    style="float:left; margin-bottom:15px"
                  ></el-autocomplete>
                </div>
                <div>
                  <el-card class="store">
                    <img src="@/images/stage-store1.jpg" />
                    <div class="store-content">
                      <span>大全舞美艺术服装厂</span>
                      <el-button type="primary" size="mini" round>
                        进入店铺
                      </el-button>
                      <br />
                      经营业务：演出服装出租旗舰店 演出服装面料专营店
                      <br />
                      所在地：黑龙江省哈尔滨市南岗区学府路47-1号2单元
                      <br />
                    </div>
                  </el-card>
                  <el-card class="store">
                    <img src="@/images/stage-store2.jpg" />
                    <div class="store-content">
                      <span>兔兔服装摄影道具</span>
                      <el-button type="primary" size="mini" round>
                        进入店铺
                      </el-button>
                      <br />
                      经营业务：证件照 形象照 毕业照 服装租赁 化妆 航拍 活动跟拍
                      <br />
                      所在地：黑龙江省哈尔滨市南岗区学府路东四道街218号
                      <br />
                    </div>
                  </el-card>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content container2">
              <el-card>
                <div class="book-note">最新活动策划书</div>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column
                    type="index"
                    label="序号"
                    width="80"
                  ></el-table-column>
                  <el-table-column
                    prop="name"
                    label="策划名称"
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
}
.container2 {
  padding: 20px 0px 10px 0px;
  margin: 20px;
}
.grid-content > .el-card {
  min-height: 500px;
}
.store {
  width: 750px;
  height: 150px;
  margin-bottom: 15px;
}
.store span {
  display: inline-block;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  width: 67%;
}
.store img {
  margin-right: 30px;
  width: 110px;
  height: 110px;
  float: left;
}
.store-content {
  text-align: left;
}
.book-note {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  padding: 5px;
  border-left: 5px solid #6495ed;
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

<script>
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      tableData: [
        {
          name: "活动策划书1"
        },
        {
          name: "活动策划书2"
        },
        {
          name: "活动策划书3"
        },
        {
          name: "活动策划书4"
        },
        {
          name: "活动策划书5"
        },
        {
          name: "活动策划书6"
        },
        {
          name: "活动策划书7"
        },
        {
          name: "活动策划书8"
        },
        {
          name: "活动策划书9"
        }
      ]
    };
  },
  methods: {
    //搜索
    loadAll() {
      return [
        { value: "大全舞美演出服装出租店", address: "哈尔滨市南岗区" },
        {
          value: "兔兔服装摄影道具",
          address: "哈尔滨市南岗区"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
  //搜索
};
</script>
