<template>
  <div class="app-container">
    <!-- 搜索条件 -->
    <div class="filter-container" style="margin-bottom:2%">
      <!-- <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="标题" v-model="listQuery.title">
      </el-input>
      <el-select clearable class="filter-item" style="width: 130px" v-model="listQuery.type" placeholder="类型">
        <el-option v-for="item in  typeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key">
        </el-option>
      </el-select>

      <el-button class="filter-item" type="primary" v-waves icon="search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" type="primary" @click="handleCreate"  icon="edit">添加</el-button>

      <el-button class="filter-item" type="primary" @click="handleDelAll"  icon="edit">批量删除</el-button>
      <el-button class="filter-item" type="primary" icon="document" @click="handleDownload">导出</el-button> -->
         员工： <el-input  style="width: 200px;margin-right:2%;" class="filter-item" placeholder="请输入内容" >
      </el-input>
         工号： <el-input  style="width: 200px;margin-right:2%;" class="filter-item" placeholder="请输入内容" >
      </el-input>
        状态：
      <el-select clearable class="filter-item" v-model="form.region" style="width: 130px;margin-right:2%;" placeholder="[全部]">
        <el-option label="区域一" value="shanghai">---
            <!-- <el-option v-for="item in  typeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key">
        </el-option> -->
        </el-option>
      </el-select>


      <el-button class="filter-item" type="primary"  icon="search" style="width: 130px;" >查询</el-button>
     <div style="float:right">
<el-button class="filter-item" type="primary"   icon="edit">导入</el-button>

      <el-button class="filter-item" type="primary"  icon="edit">新增</el-button>
      <el-button class="filter-item" type="primary" icon="document" >导出</el-button>

     </div>
      
    </div>



  <el-table
    :data="tableData7.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Address"
      prop="address">
    </el-table-column>
    <el-table-column
      align="right">
      <!-- <template slot="header" slot-scope="scope">
       
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template> -->
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">注销</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    
      :page-size="10"
 
      layout="total, prev, pager, next, jumper"
      :total="tableData7.length">
    </el-pagination>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

           form: {
        
          region: '',
        
        },
          list:null,
          total:14,
           currentPage:1,
           pagesize:10,
        tableData7: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },{
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    mounted(){
        let vm=this;

    },
    methods: {
         handleSizeChange(val) {
            //  this.total=this.tableData7.length;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.currentPage =val;
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {

        console.log(index, row);
      },
      handleDelete(index, row) {
        //    let vm = this;
        //   vm.list.splice(index,1)
        console.log(this)
        this.tableData7.splice(index,1)
        console.log(index, row);
      },
    //   created:function(){
    //      this.total=this.tableData7.length;
    //   },
    //  current_change:function(currentPage){
    //     //  debugger;
    //     this.currentPage = currentPage;
    //   }
    },
  }
</script>