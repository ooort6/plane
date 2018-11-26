<template>
       <div class="login">
        <!-- <el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row> -->
        <el-form :model="form2" :rules="rules2" ref="form2" label-width="0" class="login2" style="float:left">
            <h1 style="font-size: 25px; margin-bottom: 30px">用户登录</h1>
            <el-form-item prop="username">
              <el-input type="text" prefix-icon="fa fa-user" v-model="form2.username" placeholder="账号:admin" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" prefix-icon="fa fa-unlock-alt" v-model="form2.password" placeholder="密码:111111" clearable></el-input>
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
                <el-button type="primary" style="width:230px"  @click.native.prevent="handleSubmit">登录</el-button>
            </el-form-item>
        </el-form>
          <div class="login3" style="float:left">
       <img src="../.././assets/logo.png" alt="" style="width:100px;height:100px;float:left;display:block;margin-right:5%">
        <img src="../.././assets/logo.png" alt="" style="width:100px;height:100px;float:left;display:block">
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
      const secretKey = 32576081;
      const keyHex = CryptoJS.enc.Utf8.parse(secretKey);
      const encrypted = CryptoJS.DES.encrypt(pass, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
      return encrypted.toString();
    },

    handleSubmit() {
      this.$refs.form2.validate(valid => {
        if (valid) {
          let para = {
            username: this.form2.username,
            password: this.form2.password
          };

          //   Login(para).then(res => {
          //     let { msg, code, user } = res;
          //     if (code !== 200) {
          //       this.$message.error(msg);
          //     } else {
          //       this.$message.success(msg);
          //       sessionStorage.setItem(
          //         "username",
          //         JSON.stringify(this.form2.username)
          //       );
          //       this.$router.push({ path: "/user" });
          //     }
          //   });
        } else {
        //   axios({
        //     headers: {
        //       "X-Requested-With": "XMLHttpRequest",
        //       "Content-Type": "application/json; charset=UTF-8",
        //       "Access-Control-Allow-Origin": "*"
        //     }, //设置跨域请求头
        //     method: "GET", //请求方式
        //     url:
        //     //   "https://solelynet.com/public/index.php/api/v1/UserMenu/GetTree", 
        //       "http://test.many-it.com:80/demo12/mobile/noSession/secret_key",    //请求地址
        //     data: {
        //     //请求参数
        //     }
        //   })
        //     .then(function(res) {
        //       //返回值
        //       console.log(res.data);
        //     //   for (var i = 0; i < res.data.length; i++) {
        //     //     console.log(res.data[i].name);
        //     //   }
        //     })
        //     .catch(function(err) {
        //       console.log(err);
        //     });


         axios
      .get("api/demo12/mobile/noSession/secret_key")
      .then(response => {
          console.log(response.data.bpi)
        this.info = response.data.bpi;
      });

          console.log(3);
          return false;
        }
      });
    }
  },
  mounted() {
    // const _key = '888'
    const _password = "111111";
    console.log(this.encryptByDES(_password));
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
