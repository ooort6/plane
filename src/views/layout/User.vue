<template>
<div>
   <el-row :gutter="24">
  <el-col :span="12">
    
    <div class="grid-content bg-purple">
     
       <el-card class="box-card" shadow="hover">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
        </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple">
          <el-table
    :data="tableData"
    style="width: 100%;height:100%; position:relative; overflow-y:scroll">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    
    
    </div></el-col>
      
</el-row>

   <el-row :gutter="24">
  <el-col :span="12">
          
    <div class="grid-content bg-purple">
    <span>Original message: "{{ message }}"</span><br>
    <span>Computed reversed message: "{{ reversedMessage }}"</span><br>
    <span>Date: "{{ nowTime }}"</span>
      </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>

</el-row>

   <el-row :gutter="24">
  <el-col :span="12">
          
    <div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>

</el-row>
</div>
</template>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 300px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 48.4375rem;
  height: 300px;
  position: relative;
  overflow-y: scroll;
}
</style>

<script>
export default {
  
  data() {
    return {
      message: "Hello",
      nowTime:'',
      // date:null,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "公司"
        }
      ]
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
   timeFormate(timeStamp) {
          let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
    let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
    this.nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+":"+ss ;
    },
    nowTimes(){
      this.timeFormate(new Date());
    },


    indexMethod(index) {
      return index * 2;
    }
  },
  mounted(){
    this.nowTimes();
    setInterval(this.nowTimes,1000);


  }
  
};
</script>