<template>
  <div id="app">
    <el-header id="header">
      <el-row type="flex"
              align="middle"
              style="height: 60px;">
        <el-col :span="3">
          <h2 style="color:white" @click="qq()">旻瑞信息</h2>
        </el-col>
<el-col :span="9" class="chang"  v-show="tab.isShow1">
 <el-menu :default-active="tab.activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
 <el-menu-item v-model="tab.index"  index="1"><router-link to="/myPage/pageOne" style="text-decoration:none;display:block">首页门户</router-link></el-menu-item>
 <el-menu-item  v-model="tab.index" index="2">栏目维护</el-menu-item>
  <el-menu-item  v-model="tab.index" index="3"><router-link to="/detail/detail1" style="text-decoration:none;display:block">日常办公</router-link></el-menu-item>
  <el-menu-item  v-model="tab.index" index="4">客户合同管理</el-menu-item>
<el-dropdown trigger="click" class="changyong1">
  <el-button type="primary" >
   常用
  </el-button>
  <el-dropdown-menu slot="dropdown"  >
    <el-dropdown-item>公司门户</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
 
  
</el-menu>
</el-col>
<div id="navs"  v-show="tab.isShow"  >
<el-col :span="9">
 <el-menu :default-active="tab.activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
 <el-menu-item v-model="tab.index"  index="1"><router-link to="/myPage/pageOne" style="text-decoration:none;">首页门户</router-link></el-menu-item>
 <el-menu-item  v-model="tab.index" index="2">栏目维护</el-menu-item>
  <el-menu-item  v-model="tab.index" index="3">日常办公</el-menu-item>
  <el-menu-item  v-model="tab.index" index="4">客户合同管理</el-menu-item>
  <el-menu-item  v-model="tab.index" index="5" @click="zhankai">CMS管理</el-menu-item>
  <el-menu-item  v-model="tab.index" index="6" @click="zhankai">日常事务</el-menu-item>
  <el-menu-item  v-model="tab.index" index="7" @click="zhankai">个人事务</el-menu-item>
  <el-menu-item  v-model="tab.index" index="8" @click="zhankai">流程效率统计</el-menu-item>
  <el-menu-item  v-model="tab.index" index="9" @click="zhankai">办公辅助</el-menu-item>
  <el-menu-item  v-model="tab.index" index="10" @click="zhankai">信息发布</el-menu-item>
  <el-menu-item  v-model="tab.index" index="11" @click="zhankai">移动门户</el-menu-item>
  <el-menu-item  v-model="tab.index" index="12" @click="zhankai">系统管理</el-menu-item>

  

 
  
</el-menu>
</el-col>
<el-dropdown trigger="click" class="changyong">
  <el-button type="primary" >
   常用
  </el-button>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item>公司门户</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>
<el-button class="zhankai" type="primary" icon="el-icon-more"  @click="zhankai"></el-button>
<!-- <el-button class="changyong" type="primary" icon="el-icon-more"  @click="changyong"></el-button> -->

  <el-col :span="4"  class="iconfont" >
    <span style="border-left:1px solid #448EBB;height:50px;display:block;float:left; margin-right:2.5%;margin-left:2.5%"></span>
        <router-link to="/myPage/pageOne" style="text-decoration:none;"> <i class="el-icon-menu" style="color:white"></i></router-link>
    <span style="border-left:1px solid #448EBB;height:50px;display:block;float:left; margin-right:2.5%;margin-left:2.5%"></span>

        <i class="el-icon-bell" style="color:white"></i>
    <span style="border-left:1px solid #448EBB;height:50px;display:block;float:left; margin-right:2.5%;margin-left:2.5%"></span>

        <i class="el-icon-refresh" style="color:white" @click="refresh"></i>
    <span style="border-left:1px solid #448EBB;height:50px;display:block;float:left; margin-right:2.5%;margin-left:2.5%"></span>

        <i class="el-icon-setting" style="color:white"></i>
    <span style="border-left:1px solid #448EBB;height:50px;display:block;float:left; margin-right:2.5%;margin-left:2.5%"></span>
<el-dropdown trigger="click" class="changyong2">
        <i class="el-icon-more"  style="color:white"></i>
  
  <el-dropdown-menu slot="dropdown"  >
    <el-dropdown-item @click.native="banben">版本授权信息</el-dropdown-item>

  </el-dropdown-menu>
</el-dropdown>
    <span style="border-left:1px solid #448EBB;height:50px;display:block;float:left; margin-right:2.5%;margin-left:2.5%"></span>

        <i class="el-icon-circle-close-outline" style="color:white"></i>
    <span style="border-left:1px solid #448EBB;height:50px;display:block;float:left; margin-right:2.5%;margin-left:2.5%"></span>

  </el-col>




      </el-row>
    </el-header>
   <!-- {{console.log(1)}} -->
   <!-- {{1?console.log(8888):''}} -->
   
   <!-- {{this.tab.activeIndex==1?<div>222asasa</div>:''}} -->
    <el-container class="hpct100">

      <el-aside v-if="this.tab.index==1" style="width:15.8125rem;">
       <el-menu
   
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
 
     <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">公司门户</span>
      </el-menu-item>
          <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">人事管理</span>
      </el-menu-item>
     <!-- <el-submenu index="3-1" >
        <template slot="title" >
          <span >ceshi</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
    
 <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">员工花名册</span>
      </el-menu-item>
       <el-menu-item index="5">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">流程中心</span>
      </el-menu-item>
       <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">个人考勤</span>
      </el-menu-item>
       <el-menu-item index="7">
        <i class="el-icon-menu"></i>
        <span slot="title">考勤记录</span>
      </el-menu-item>
       <el-menu-item index="8">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">考勤统计</span>
      </el-menu-item>
       <el-menu-item index="9">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">考勤统计审核</span>
      </el-menu-item>
       <el-menu-item index="10">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">报销明细打印</span>
      </el-menu-item>
       <el-menu-item index="11">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">测试嵌入其他页面</span>
      </el-menu-item>

    </el-menu>
    
      </el-aside>
    
    
     <el-aside v-if="this.tab.index==2" style="width:15.8125rem;">
       <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
     <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">栏目维护菜单</span>
      </el-menu-item>
          <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">信息发布</span>
      </el-menu-item>
       <el-menu-item index="3">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">测试嵌入其他页面</span>
      </el-menu-item>
    </el-menu>
      </el-aside>

      <el-aside v-if="this.tab.index==3" style="width:15.8125rem;">
       <el-menu
   
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
 
     <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">阅件回收</span>
      </el-menu-item>
          <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">错发回收</span>
      </el-menu-item>
     <!-- <el-submenu index="3-1" >
        <template slot="title" >
          <span >ceshi</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
    
 <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">代办文件</span>
      </el-menu-item>
       <el-menu-item index="5">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">待阅文件</span>
      </el-menu-item>
       <el-menu-item index="6">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">已办文件</span>
      </el-menu-item>
       <el-menu-item index="7">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">已阅文件</span>
      </el-menu-item>
       <el-menu-item index="8">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">关注文件</span>
      </el-menu-item>
       <el-menu-item index="9">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">公文检索</span>
      </el-menu-item>
       <el-menu-item index="10">
        <i class="el-icon-menu"></i>
        <span slot="title">流程监控</span>
      </el-menu-item>
       <el-menu-item index="11">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">回收站</span>
      </el-menu-item>

    </el-menu>
    
      </el-aside>


 <el-aside v-if="this.tab.index==4" style="width:15.8125rem;">
       <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
     <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">客户管理</span>
      </el-menu-item>
          <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">合同管理（new）</span>
      </el-menu-item>
       <el-menu-item index="3">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">合同收款总汇</span>
      </el-menu-item>
        <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">发票上传</span>
      </el-menu-item>
        <el-menu-item index="5">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">合同开票申请</span>
      </el-menu-item>
    </el-menu>
      </el-aside>


<el-aside v-if="this.tab.index==5" style="width:15.8125rem;">
       <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
     <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">CMS栏目维护</span>
      </el-menu-item>
          <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">CMS信息发布</span>
      </el-menu-item>
       <el-menu-item index="3">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">CMS信息发布管理</span>
      </el-menu-item>
        <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">CMS链接维护</span>
      </el-menu-item>
        <el-menu-item index="5">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">CMS模板管理</span>
      </el-menu-item>
    </el-menu>
      </el-aside>

<el-aside v-if="this.tab.index==6" style="width:15.8125rem;">
       <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
     <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">合同管理</span>
      </el-menu-item>
          <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">报销申请</span>
      </el-menu-item>
       <el-menu-item index="3">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">合同维护</span>
      </el-menu-item>
        <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">休假申请</span>
      </el-menu-item>
    
    </el-menu>
      </el-aside>



      <el-aside v-if="this.tab.index==7" style="width:15.8125rem;">
       <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
     <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">消息提醒设置</span>
      </el-menu-item>
          <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">委托代办</span>
      </el-menu-item>
       <el-menu-item index="3">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">测试页面</span>
      </el-menu-item>
        <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">已发布公告</span>
      </el-menu-item>
        <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">修改密码</span>
      </el-menu-item>
        <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">个人日程</span>
      </el-menu-item>
    
    </el-menu>
      </el-aside>

<el-aside v-if="this.tab.index==8" style="width:15.8125rem;">
       <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
     <el-menu-item index="1">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">流程效率统计配置</span>
      </el-menu-item>
          <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">代办文件统计</span>
      </el-menu-item>
       <el-menu-item index="3">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">流程催办统计</span>
      </el-menu-item>
        <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">流程阶段统计</span>
      </el-menu-item>
           <el-menu-item index="4">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">流程超时统计</span>
      </el-menu-item>
    
    </el-menu>
      </el-aside>


      <el-container class="hpct100">
        <el-main>
          <levelbar style="margin-bottom:2%"/>
          <router-view/>
          <!-- <router-view></router-view> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#navs {
  margin-left: 0%;
  width: 82.625rem;
  height: 10rem;
  // background: #2A2E34;
  position: relative;
  top: 83%;
  left: 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: gray;
    text-decoration: overline;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#header {
  background-color: #0070c1;
  background-repeat: no-repeat;
  background-size: 60px;
}
.el-menu.el-menu--horizontal {
  // background: red;
  // background: red;
  // background: #0070c1;
  z-index: 50;
  width: 31.525rem;
}
// .el-menu-demo el-menu--horizontal el-menu el-menu-item{
//   color: #fff;
// }
.el-dropdown {
  vertical-align: center;
}
.el-dropdown + .el-dropdown {
  margin-left: 150px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item {
  // margin-left: 5%;
}

.el-menu-demo el-menu--horizontal el-menu {
  // width: 30.625rem;
  // color: #42b983;
  background: #0070c1;
}
.chang {
  // background: red;
  margin-left: 0.1%;
  margin-top: 0.1%;
  width: 71.5545%;
}
.zhankai {
  z-index: 51;
  position: absolute;
  left: 35%;
  top: -5%;
  margin: 0.6rem;
}

.iconfont i {
  margin-top: 4%;
  float: left;
  font-size: 1.5625rem;
  // width: 2.25rem;
}
.changyong2 {
  margin-top: 4%;
  float: left;
  font-size: 1.5625rem;
}
// .changyong{
//   margin-top: 10%;
//   margin-left: 25%;
// }

.changyong1 {
  // margin-top: 0%;
  top: 0.5rem;
  left: 20.8%;
  // margin-left: 144.5%;
}

.changyong {
  // margin-top: 0%;
  top: 0.54rem;
  left: 1.5888%;
  // margin-left: 144.5%;
}
// .changyong{
// margin-left: 50px;
// position: absolute;
// top: -10%
// left: 19%;
// top: -5%;
// margin: 0.6rem;
// }
</style>
<script>
import { Levelbar } from "./views/myPage/components";
export default {
  components: {
    Levelbar
  },

  data() {
    return {
      // isRouterAlive: true,
      tab: {
        index: "1",
        activeIndex: "1",
        isShow: false,
        isShow1: true
        // activeIndex2: '1'
      }
    };
  },
  init: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      // console.log(this.tab.index)
    },
    qq() {
      console.log(this.tab.index);
      console.log(this.tab.activeIndex);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      // console.log(this.tab.index)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.tab.index = key;
      this.tab.activeIndex = key;

      console.log(this.tab.index);
      console.log(this.tab.activeIndex);
      // key==1?console.log(555):console.log(333)
    },
    zhankai() {
      // this.tab.index=this.tab.index
      // console.log(this.tab.index)
      this.tab.activeIndex = this.tab.index;
      this.tab.isShow = !this.tab.isShow;
      this.tab.isShow1 = !this.tab.isShow1;
      // alert(2)
    },
    banben() {
      alert(2);
    },

    refresh() {
      // alert(2)
      //       this.isRouterAlive=false;

      // this.$nextTick(function () {
      //   this.isRouterAlive = true
      // })
      //       console.log(this.tab.activeIndex);
      //  debugger;
      //  this.tab.activeIndex = this.tab.index;
      window.history.go(0);
      //  console.log(this.tab.activeIndex)
      //   console.log(this.tab.index)
      //       this.tab.activeIndex = this.tab.index;
      //      console.log(this.tab.activeIndex)
      // console.log(this.tab.index)
    }
  }
};
</script>