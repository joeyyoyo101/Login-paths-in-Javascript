<template>
  <v-container class="py-0 m-5 fill-height">
    Logo
    <v-spacer></v-spacer>
    <v-responsive max-width="150">
      <v-text-field
        label="Email"
        type="email"
        dense
        flat
        hide-details
        rounded
        solo-inverted
        small
        v-model="username"
        class="mr-2"
      ></v-text-field>
    </v-responsive>
    <v-responsive max-width="150">
      <v-text-field
        label="Password"
        type="password"
        class="mr-2"
        dense
        flat
        hide-details
        rounded
        v-model="password"
        solo-inverted
        small
      ></v-text-field>
    </v-responsive>
    <v-responsive max-width="100">
      <v-btn @click="SignIn()" rounded elevation="0" small>เข้าสู่ระบบ</v-btn>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    ...mapMutations(['setStateDialog']),
    async SignIn() {
      const data = {username:this.username,password:this.password}
      this.setStateDialog(true)
      await axios.post("http://localhost:9999/login",data).then((resp)=>{
        if(resp.data.length>0){
          console.log(resp.data[0]);
          setTimeout(() => {
          this.setStateDialog(false)
          this.username = ''
          this.password = ''
          this.$router.push({ path: '/home' })
          }, 1000)
        }else{
          console.log("ไม่สำเร็จ")
          this.setStateDialog(false)
        }
      })
    },
  },
}
</script>
