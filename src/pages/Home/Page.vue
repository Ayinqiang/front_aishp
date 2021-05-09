<template>
  <v-app>
    <v-row no-gutters>
      <v-col class="justify-center "
             cols="12"
             md="7">
        <div class="main-part">
          <div class="d-flex">
            <v-img :src="logo"></v-img>
          </div>
          <p style="    text-align: center;
    font-family: Roboto,sans-serif;
    font-size: 84px;
    color: #fff;
    font-weight: 500;">
            厦门理工二手交易平台
          </p>
        </div>
      </v-col>
      <v-col cols="12"
             md="5"
             class="login-part d-flex align-center justify-center">
        <v-row class="align-start"
               no-gutters>
          <v-col cols="12"
                 class="d-flex align-center justify-center flex-column">
            <div class="login-wrapper  pt-12 pt-sm-0">
              <v-tabs background-color="#f6f7ff">
                <v-tab style="width:50%"
                       @click="login = 1">登录</v-tab>
                <v-tab style="width:50%"
                       @click="login = 2">注册</v-tab>
              </v-tabs>
              <v-window v-model="login">
                <v-window-item :value="1">
                  <v-container>
                    <v-col>
                      <p class="text-h3">欢迎登录</p>
                      <v-btn fab
                             style=""
                             height="48px"
                             width="48px">
                        <v-img height="48px"
                               width="48px"
                               :src="qq_icon"></v-img>
                      </v-btn>
                      <v-btn fab
                             height="48px"
                             width="48px">
                        <v-img height="48px"
                               width="48px"
                               :src="wx_icon"></v-img>
                      </v-btn>
                    </v-col>
                    <div class="py-12">
                      <div style="diplay:fixed;font-size:17px;z-index: 100;">选择以下登录方式</div>
                      <v-divider style="diplay:fixed;z-index:1"></v-divider>
                    </div>
                    <v-form>
                      <v-text-field dense
                                    class="my-2"
                                    v-model="uid"
                                    label="账号"></v-text-field>
                      <v-text-field dense
                                    class="my-2"
                                    label="密码"
                                    v-model="psw"
                                    type="password"></v-text-field>
                      <v-footer class="pa-0">
                        <v-btn @click="loginFunction"
                               color="primary">登录</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn text
                               class="text-capitalize primary--text">忘记密码</v-btn>
                      </v-footer>
                    </v-form>
                  </v-container>
                </v-window-item>
                <v-window-item :value="2">
                  <v-container>
                    <v-col>
                      <p class="text-h3">请注册您的账号</p>
                      <v-btn fab
                             style=""
                             height="48px"
                             width="48px">
                        <v-img height="48px"
                               width="48px"
                               :src="qq_icon"></v-img>
                      </v-btn>
                      <v-btn fab
                             height="48px"
                             width="48px">
                        <v-img height="48px"
                               width="48px"
                               :src="wx_icon"></v-img>
                      </v-btn>
                    </v-col>
                    <div class="py-12">
                      <div style="diplay:fixed;font-size:17px;z-index: 100;">请输入下列信息</div>
                      <v-divider style="diplay:fixed;z-index:1"></v-divider>
                    </div>
                    <v-form>
                      <v-text-field dense
                                    class="my-2"
                                    :counter="10"
                                    v-model="uid"
                                    label="请输入您的学号"></v-text-field>
                      <v-text-field dense
                                    class="my-2"
                                    v-model="psw"
                                    label="密码"
                                    type="password"></v-text-field>

                      <v-text-field dense
                                    class="my-2"
                                    v-model="s_psw"
                                    label="密码"
                                    type="password"></v-text-field>
                      <v-text-field dense
                                    class="my-2"
                                    v-model="name"
                                    label="用户名"></v-text-field>

                      <el-radio-group style="width:100%"
                                      v-model="sexs">
                        <el-radio-button style="width:50%"
                                         :label="0">男</el-radio-button>
                        <el-radio-button style="width:50%"
                                         :label="1">女</el-radio-button>
                      </el-radio-group>
                      <v-text-field dense
                                    class="my-2"
                                    v-model="email"
                                    label="邮箱"></v-text-field>
                      <v-text-field dense
                                    class="my-2"
                                    v-model="phone"
                                    label="电话"></v-text-field>
                      <v-footer class="pa-0">
                        <v-btn @click="register"
                               color="primary">注册</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn text
                               class="text-capitalize primary--text">忘记密码</v-btn>
                      </v-footer>
                    </v-form>
                  </v-container>
                </v-window-item>
              </v-window>
            </div>
          </v-col>
        </v-row>

      </v-col>

    </v-row>
  </v-app>
</template>

<script>
import { registerUser, loginUser } from "../Home/server"
export default {
  data() {
    return {

      //图片引入
      logo: require("../../assets/home/mylogo.png"),
      qq_icon: require("../../assets/home/icon-qq.png"),
      wx_icon: require("../../assets/home/wechat.png"),
      //登录标识
      login: 1,
      //表单信息 用户个人信息表单
      uid: '',  //id
      sex: 0,   //性别
      name: '', //名字
      sign: '', //签名
      avatar: '', //头像
      email: '',  //邮箱
      phone: '',  //手机号
      psw: '',    //密码
      s_psw: '',   //密码二次验证
      sexs: null,
    }
  },
  methods: {
    register() {
      const {
        uid,
        psw,
        sex,
        name,
        sign,
        avatar,
        email,
        phone
      } = this;
      const user = {
        uid,
        psw
      };
      const userData = {
        uid,
        psw,
        sex,
        name,
        sign,
        avatar,
        email,
        phone
      };
      registerUser(userData).then((data => {
        let code = data.code;
        let msg = data.msg;

      }))

    },
    loginFunction() {
      const {
        uid,
        psw
      } = this;
      const datas = {
        uid,
        psw
      }
      loginUser(datas).then((res) => {
        const msg = res.data.msg;
        const code = res.data.code;
        if (code === 2000) {
          this.$message.success("登录成功");
          this.$router.push("/SellHome/Aishop");
        } else {
          this.$message.error(msg);
        }
      })
    }
  },

}
</script>

<style  scoped>
.main-part {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #536dfe;
  vertical-align: middle !important;
}
.login-part {
  background-color: #f6f7ff;
}
.login-wrapper {
  background-color: #f6f7ff;
  width: 320px;
  height: auto;
}
</style>