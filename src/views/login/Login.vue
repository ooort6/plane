<template>
       <div class="login">
        <!-- <el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row> -->
        <el-form :model="form2" :rules="rules2" ref="form2" label-width="0" class="login2" style="float:left">
            <h1 style="font-size: 25px; margin-bottom: 30px">用户登录</h1>
            <el-form-item prop="username">
              <el-input type="text" prefix-icon="fa fa-user" v-model="form2.username" placeholder="账号:admin" @keyup.enter.native="handleSubmit"  clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" prefix-icon="fa fa-unlock-alt" v-model="form2.password" placeholder="密码:111111" @keyup.enter.native="handleSubmit" clearable></el-input>
            </el-form-item>
              <!-- <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item> -->
            <!-- <el-checkbox label="自动登入" name="type" style="margin-bottom:20px; float:left"></el-checkbox><span style="float:left">ss</span> -->
               <el-form-item>
                   <el-checkbox label="自动登入" name="type" style=" float:left;margin-right:40px"></el-checkbox><span style="float:left;">忘记密码？</span>
               </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:230px" :plain="true"  @click.native.prevent="handleSubmit" >登录</el-button>
            </el-form-item>
        </el-form>
          <div class="login3" style="float:left">
            <div  style="width:100px;height:200px;float:left;display:block;margin-right:5%">
<img src="../.././assets/erweima.jpg" alt="" style="margin-bottom:10%">
<span style="text-align:center;display:block;font-size: 12px;color: #666;">手机客户端</span>
            </div> 
            <div  style="width:100px;height:200px;float:left;display:block;margin-right:5%">
<img src="../.././assets/erweima1.png" alt="" style="margin-bottom:10%"> 
<span style="text-align:center;display:block;font-size: 12px;color: #666;">企业微信</span>

            </div>
       
    </div>
    </div>
</template>

<script>
// import './cryptoJS/components/core-min.js';
// import './cryptoJS/components/mode-ecb-min.js';
// import './cryptoJS/rollups/tripledes.js';
import axios from "axios";
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      pass: "",
      secretkey: "",
      data1:{},
      form2: {
        username: "",
        password: ""
      },
      rules2: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //     encryptPassWord(password){
    // 	var secretKey = $("#secretKey").val();
    // 	var keyHex = CryptoJS.enc.Utf8.parse(secretKey);
    // 	var encrypted = CryptoJS.DES.encrypt(password, keyHex, {
    // 		mode: CryptoJS.mode.ECB,
    // 		padding: CryptoJS.pad.Pkcs7
    // 	});
    // 	console.log(encrypted.toString());
    //     return encrypted.toString();
    //     alert(555)
    // },
    encryptByDES(pass) {
      //  await
      //  console.log(this)
      // const secretkey=55652235
      const secretkey = this.secretKey;
      // const secretkey = "75068918";

      console.log(secretkey);
      const keyHex = CryptoJS.enc.Utf8.parse(secretkey);
      const encrypted = CryptoJS.DES.encrypt(pass, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      // console.log(encrypted.toString());
      return encrypted.toString();
    },

    async handleSubmit() {
      // this.$message('这是一条消息提示');
      let para = {
        username: this.form2.username,
        password: this.form2.password
      };

      //   debugger;
    // this.getSecretkey();

      console.log(para);
      console.log(para.username);
      console.log(this.secretKey);
        console.log(this.encryptByDES(this.form2.password))
        this.pass=this.encryptByDES(this.form2.password)
      console.log(this.pass);
      let formData = new FormData();
      formData.append("_funccode_", "C_Login");
      formData.append("async", true);
      formData.append("name", this.form2.username);
      formData.append("pass", this.form2.password);


      this.$http.post("/demo12/Login.do", formData,{withCredentials : true}).then(function(res) {
      console.log(res); /*这里做处理*/
        if(res.data._returncode_==0){
          this.$message({
          showClose: true,
          message: '登陆成功',
          type: 'success'
        });
          
           this.data1=res.data;
             sessionStorage.setItem(
                "username",
                JSON.stringify(this.form2.username)
              );
               sessionStorage.setItem(
                "data1",
                JSON.stringify(this.data1.MENULIST)
              );
            this.$router.push({name: 'user', params: {}})
        }
        if(res.data._returncode_!=0&&this.form2.username!=''&&this.form2.password!=0){
          this.$message({
          showClose: true,
          message: res.data._returnmsg_,
          type: 'error'
        });
        }
        //     if (res.status === 2000) {
        //   }
      }.bind(this));

      // await axios
      //   .post("api/Login.do?_funccode_=C_Login&async=true&name=admin&pass=5eAljvxr/ZA=", {

      //       // name:"admin",
      //       // pass:this.encryptByDES("111111")
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    async getSecretkey() {
      const { data } = await axios.get("/demo12/mobile/noSession/secret_key", {
        //   params: {
        //     ID: 12345
        //   }
      });
      console.log(data);
      // console.log(data.secretKey)
      this.secretKey = data.secretkey;
      console.log(this.secretKey);
      // this.pass = this.encryptByDES(this.form2.password);
      //  console.log(this.pass);
      // .then(function(response) {
      //     if(response.data.errcode==0){
      //   console.log(response.data.secretkey);
      // //   console.log(1)
      //   console.log(secretKey1)
      // //   this.secretKey=response.data.secretkey
      //     }
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    }
  },

  created() {

    // const _key = '888'
  },
  mounted() {
    //   const _password = "111111";
    //   console.log(this.form2.password)
    // this.encryptByDES(this.form2.password);
    // console.log(this.encryptByDES(_password));
  }
};
</script>

<style >
.login {
  /* background: red; */
  width: 100%;
  height: 43.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login2 {
  height: 320px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4e7ed;
  border-right: none;
}
.login3 {
  height: 320px;
  width: 250px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  border: 1px solid #e4e7ed;
}
</style>
