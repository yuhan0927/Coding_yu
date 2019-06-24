<template>
  <div class="login">
    <template>
      <i-form ref="formLogin" :model="formLogin" :rules="formLoginRules" class="card-box">
        <FormItem class="formLogin-title">
          <h3>系统登录</h3>
        </FormItem>
        <FormItem prop="username">
          <i-Input type="text" v-model="formLogin.username" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-Input>
        </FormItem>
        <FormItem prop="password">
          <i-Input type="password" v-model="formLogin.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend">hah</Icon>
          </i-Input>
        </FormItem>
        <FormItem>
        <template>
          <Checkbox :checked.sync="single">记住密码</Checkbox>
        </template>
        </FormItem>
      </i-form>
    </template>
  </div>
</template>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
      </i-form>
    </template>
  </div>
</template>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
        remeber: false,
        formLoginRules: {
          user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
          password: [
            { required: true, message: "请填写密码", trigger: "blur" },
            {
              type: "string",
              min: 6,
              message: "密码长度不能小于6位",
              trigger: "blur"
            }
          ]
        }
      }
    };
  }
};
</script>

<style scope>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
}
.card-box {
  padding: 20px;
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  background-color: #f9fafc;
  margin: 180px auto;
  width: 400px;
  border: 2px solid #8492a6;
}

.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.formLogin-title {
  text-align: center;
  font-size: 28px;
}
.formLogin-title h3 {
  font-size: 18px;
}
.login-no-bottom {
  margin-bottom: 10px;
}
</style>


