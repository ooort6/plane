<template>
  <div id="app" >
    <el-header id="header">
      <el-row type="flex"
              align="middle"
              style="height: 60px;">
        <el-col :span="3">
          <h2 style="color:white" @click="qq()">旻瑞信息</h2>
        </el-col>
<!-- <el-col :span="9" class="chang"  v-show="tab.isShow1">
 <el-menu :default-active="tab.activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
 <el-menu-item v-model="tab.index"  index="1"><router-link to="/layout/user" style="text-decoration:none;display:block;">首页门户</router-link></el-menu-item>
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
</el-col> -->
<!-- <div id="navs"  v-show="tab.isShow"  >
<el-col :span="9">
 <el-menu :default-active="tab.activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
 <el-menu-item v-model="tab.index"  index="1"><router-link to="/layout/user" style="text-decoration:none;">首页门户</router-link></el-menu-item>
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
</div> -->
<!-- <el-button class="zhankai" type="primary" icon="el-icon-more"  @click="zhankai"></el-button> -->

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
       <!-- <Menu :menuData="this.data3" /> -->
       <el-menu
        background-color="#2A2E34"
        text-color="#fff"
     
      :default-openeds="['M25366']"
      default-active="1"
      :unique-opened="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <!-- <template v-for="item in this.data3">
                <template>
                    <el-submenu   :index="item.RIGHTID">
                        <template slot="title">{{ item.MENUNAME }}</template>
                        <el-menu-item v-for="(subItem,i) in item.childs" :key="i" :index="subItem.RIGHTID">
                          {{ subItem.MENUNAME }}
                          </el-menu-item>
                    </el-submenu>
                </template>
            </template> -->

            
   <template v-for="item in this.data3" >
                <template >
                    <el-submenu   :index="item.RIGHTID">
                    
                        <template slot="title">
                    
                          {{ item.MENUNAME }}
                          
                          </template>
                    
                            <template v-for="subItem in item.childs">
                                <template  v-if="subItem.childs.length>=1">
                              
                                    <el-submenu     :index="subItem.RIGHTID">
                                        <template slot="title">{{ subItem.MENUNAME }}</template>
                                          <!-- <router-link to="/"> -->
                                           <router-link  v-for="(subItem1,i) in subItem.childs" :to="{ path: subItem1.PY }" style="text-decoration:none;">
                                          <el-menu-item   :key="i" :index="subItem1.RIGHTID">
                                            {{subItem1.MENUNAME}}
                                          </el-menu-item>
                                           </router-link>
                                            <!-- </router-link> -->
                                    </el-submenu>
                              
                                </template>
                                 <template  v-else>
                                   <router-link  :to="{ path: subItem.PY }" style="text-decoration:none;">
                                    <el-menu-item    :index="subItem.RIGHTID">
                                      {{ subItem.MENUNAME }}
                                          
                                    </el-menu-item>

                                   </router-link>
                                  
                                </template>
                            </template>
                    </el-submenu>
                </template>
            </template>
    </el-menu>
      </el-aside>


      <el-container class="hpct100">
        <el-main>
          <levelbar style="margin-bottom:2%" />
           <transition name="fade" mode="out-in">
          <router-view/>
           </transition>
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
  // background: red;
}
#navs {
  margin-left: 0.45%;
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

.el-menu-vertical-demo {
  height: 100%;
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
  margin-left: 0.35%;
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
.iconfont {
  margin-left: 75%;
  display: block;
  float: right;
}

.iconfont i {
  margin-top: 4%;
  float: left;
  font-size: 1.5625rem;
  // width: 2.25rem;
}

.liuchengjiankong {
  // color: red;
  background: url(../assets/liuchengjiankong.png) no-repeat;
  width: 1.3125rem;
  height: 1.3125rem;
  display: inline-block;
  background-size: 90%;

  // width: 20px;
  // background-image: url(./assets/liuchengjiankong.png)
}

.shuiguan {
  // color: red;
  background: url(../assets/shuiguan.png) no-repeat;
  width: 1.3125rem;
  height: 1.3125rem;
  display: inline-block;
  background-size: 90%;

  // width: 20px;
  // background-image: url(./assets/liuchengjiankong.png)
}

.laba {
  // color: red;
  background: url(../assets/laba.png) no-repeat;
  width: 1.3125rem;
  height: 1.3125rem;
  display: inline-block;
  background-size: 90%;

  // width: 20px;
  // background-image: url(./assets/liuchengjiankong.png)
}

.yaochi {
  // color: red;
  background: url(../assets/yaochi.png) no-repeat;
  width: 1.3125rem;
  height: 1.3125rem;
  display: inline-block;
  background-size: 90%;

  // width: 20px;
  // background-image: url(./assets/liuchengjiankong.png)
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
  left: 22.8%;
  // margin-left: 144.5%;
}

.changyong {
  // margin-top: 0%;
  top: 0.54rem;
  left: 3.102%;
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
import { Levelbar } from "../views/components";
export default {
  components: {
    Levelbar
  },

  data() {
    return {
      // isRouterAlive: true,
      data2: {},
      data3: {},
      tab: {
        index: "1",
        activeIndex: "1",
        isShow: false,
        isShow1: true
        // activeIndex2: '1'
      },
      block: false
    };
  },
  init: {},
  methods: {
    datatree() {
      let data1 = JSON.parse(sessionStorage.getItem("data1"));
      this.data2 = data1;
      // console.log(this.data2)
      // debugger;
    },

    transTreeData(items) {
      if (items.length > 0) {
        var curPid = "M"; //pid=0，为最上层节点 ，即无父节点
        var parent = this.findChild(curPid); //数组
        return parent;
      } else {
        return [];
      }
    },

    findChild(curPid) {
      var _arr = [];
      var items = this.data2;
      var length = items.length;
      for (var i = 0; i < length; i++) {
        if (items[i].UPMENUID == curPid) {
          var _obj = items[i];
          _obj.childs = this.findChild(_obj.RIGHTID);
          _arr.push(_obj);
        }
      }
      return _arr;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      // console.log(this.tab.index)
    },
    ww() {
      console.log(this.$route.path);
      if (this.$route.path == "/") {
        // alert(222)
        // this.block=false;
        console.log(3);
      }
    },
    qq() {
      console.log(new Date());
      console.log(this.tab.index);
      console.log(this.tab.activeIndex);
      console.log(this.$route.path);
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
    pathclick() {
      console.log(555);
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
      window.history.go(0);
    }
  },
  mounted() {
    this.ww();
    this.datatree();
    console.log(this.transTreeData(this.data2));
    this.data3 = this.transTreeData(this.data2);
    console.log(this.data3);
    // Log.info("SessionId:" + request.getSession().getId());
  }
};
</script>