<template>
  <div class="form">
    <div class="description">

    </div>
    <div class="loginContainer">
      <div class="logo">
        <svg t="1666362220113" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="9421" width="48" height="48">
          <path
            d="M87.296 273.184c34.432 2.816 101.184 24.448 132.704 40.128-4 73.888-0.416 150.624 40.448 190.144 5.952 5.888 15.296 9.728 23.68 9.728 15.616 0 30.56-12.768 33.184-28.16 1.92-11.552 9.056-32.8 13.76-46.848l3.136-9.344c3.68-11.648 5.44-25.28 7.296-39.744 0.512-4.16 1.184-9.376 1.952-14.528 22.08 12.96 52.64 30.944 56.48 33.312a1873.248 1873.248 0 0 1 121.6 83.616c79.136 59.584 178.112 141.696 241.856 248.192 4.352 7.424 8.608 14.944 12.672 22.592-38.976 62.112-91.072 157.76-76.48 204.928A34.56 34.56 0 0 0 733.12 992c17.312 0 32.96-10.848 57.728-40.64 18.368-5.568 49.088-17.344 69.248-38.208 14.432 9.568 38.016 22.432 62.304 23.904 14.72 8.96 29.024 20.48 31.328 24.704 2.4 11.072 10.528 20.032 21.28 23.552 14.656 4.864 32.352-1.344 41.28-14.016 11.84-16.96 10.24-40.736-5.856-85.248-1.408-3.68-33.28-86.688-120.224-149.984 0.48-9.408 0.8-21.408 0.384-34.08 0.64-10.88 2.784-64.064-11.168-137.408-20.384-106.592-75.456-258.112-221.216-383.552 4.896-16.736 16.32-42.24 41.792-50.304 20.384-4.096 33.824-17.28 35.264-34.88 2.688-32.544-34.816-45.152-53.504-51.392-2.08-0.8-20.992-7.84-51.776-8.288-31.52 0-78.08 7.744-128 42.368C466.304 63.04 383.904 31.904 298.24 31.904c-79.168 0-141.696 26.048-185.472 77.024-6.272 7.04-12.224 14.816-17.856 23.168-29.92 6.4-76.576 21.568-90.656 54.816-4.352 10.24-9.152 30.944 7.232 54.368 17.856 25.696 46.208 29.76 75.84 31.904z m753.504 506.464a309.152 309.152 0 0 1 90.88 93.376c-1.6-0.064-3.2-0.032-4.8 0.128-9.504 0-27.136-9.856-37.536-17.76-11.744-12.736-24.32-15.552-33.088-15.552-20.448 0-34.56 14.4-41.408 28.704-3.712 5.12-18.336 12.896-34.24 18.688a908.48 908.48 0 0 1 59.04-105.664l1.152-1.92zM119.68 192.544a32 32 0 0 0 22.528-15.456 158.72 158.72 0 0 1 18.72-26.016c31.456-36.608 77.664-55.168 137.312-55.168 96.032 0 192.352 47.712 193.312 48.192 11.232 5.6 24.704 4.16 34.464-3.648 33.216-26.752 68.16-40.32 105.248-40.32h0.416c-34.784 36.448-40.192 87.168-40.448 90.048-1.056 10.688 3.328 21.152 11.648 27.936 142.08 115.584 194.624 258.72 213.728 358.4 13.6 71.712 10.112 122.016 10.08 122.496a27.52 27.52 0 0 0-0.064 3.616c0.224 6.528 0.224 12.96 0.096 18.816-2.656-4.8-5.408-9.6-8.192-14.368-69.632-116.288-174.688-203.616-258.56-266.816a1929.28 1929.28 0 0 0-125.76-86.4c-4.544-2.944-81.376-48-81.376-48a46.72 46.72 0 0 0-22.208-5.824c-30.4-0.032-42.144 25.28-47.872 51.456 0.16-22.016 1.536-41.792 2.336-53.248a32.128 32.128 0 0 0-12.256-27.488C240.64 245.632 139.424 213.248 92.192 209.344a169.472 169.472 0 0 1-20.416-2.4c11.456-5.632 30.624-11.616 47.872-14.4z"
            fill="#1296db" p-id="9422"></path>
          <path d="M288 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#1296db" p-id="9423"></path>
        </svg>
        <div class="title">MySQL-GUI</div>
      </div>
      <div class="inputContainer">
        <input class="username" placeholder="username" v-model="username">
        <input class="password" placeholder="password" type="password" v-model="password" autocomplete="off" />
        <button class="loginButton" :plain="true" @click="onSubmit" :loading="this.isLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'LoginForm',
  data: function () {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    ...mapActions(['login']),
    async onSubmit() {
      const user = {}
      user.username = this.username
      user.password = this.password
      const res = await this.login(user)
      if (res.success) {
        this.$router.push('/home')
        this.$message({ message: '????????????', type: 'success' })
      } else {
        this.$message.error(res.data.msg)
      }
    }
  }
}
</script>

<style lang="scss">
.form {
  .loginContainer {
    background-color: white;
    width: 50%;
    height: 100%;
  }

  .description {
    width: 50%;
    height: 100%;
    background: black;
  }

  border-radius: 10px;
  border: 1px;
  width: 700px;
  height: 400px;
  position: absolute;
  top: 120px;
  left: 450px;
  display: flex;

}

.logo {
  width: 100%;

  svg {
    display: block;
    margin: 0px auto;
    margin-top: 40px;
  }

  .title {
    width: 100%;
    margin: 0px auto;
    text-align: center;
    height: 25px;
    line-height: 25px;
    font-family: "Source code pro";
    font-weight:600;
  }
}

.inputContainer {
  margin: 30px auto;
  width: 100%;

  .password {
    margin: 0px auto;
    display: block;
    width: 220px;
    height: 25px;
    border: none;
    border-bottom: 1px solid rgb(0, 106, 255);
    outline: none;
  }

  .username {
    display: block;
    margin: 20px auto;
    width: 220px;
    height: 25px;
    border: none;
    border-bottom: 1px solid rgb(0, 106, 255);
    outline: none;
  }

  .loginButton {
    display: block;
    margin: 0px auto;
    margin-top: 40px;
    width: 150px;
    height: 30px;
    border: 0px;
    border-radius: 10px;
    background-color: #409eff;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
  }
}
</style>