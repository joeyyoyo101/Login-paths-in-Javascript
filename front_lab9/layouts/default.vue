<template>
  <v-app id="inspire">
    <v-dialog persistent v-model="StateDialog" width="300">
      <template v-slot:activator="{ on }">
        <v-app-bar app :color="color">
          <HeaderLogin v-bind="on" flat @keydown.enter="SignIn()" />
        </v-app-bar>
        <v-main class="grey lighten-3">
          <Nuxt />
        </v-main>
      </template>
      <v-card class="pa-5 text-center" elevation="14">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
          class="mt-3 mb-2"
        ></v-progress-circular>
        <h4 class="mb-4">ระบบกำลังประมวลผล</h4>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    links: ['Dashboard', 'Messages', 'Profile', 'Updates'],
    color:"serria",
    selectColor:null
  }),
  
  computed: {
    ...mapState(['StateDialog']),
  },
  created(){
    // setInterval(() => {
      // this.color = this.randomColor()
    // }, 1000);data
  },
  watch:{
    selectColor(val){
      this.color=val
    }
  },
  methods:{
    addEventlistner:(data)=>{
      console.log(data)
      // this.EventTarget()
      this.EventTarget()
    },
    EventSource() {
      console.log('bookmark')
    },
    EventTarget: (event) => {
      console.log(event)
    },
    submitButtonoStyle() {
      console.log(this.color)
      // this.color = "#D842CE"
    },
    // submitButton(){
    //   console.log(this.color)
    //   default.color ="#f18973"
    // },
    randomColor(){
      let bg_color = Math.floor(Math.random()*16777215).toString();
      bg_color = "#"+("00000"+bg_color).slice(-6);
      return bg_color
    }
  }
}
</script>

<style scoped>
/* sass ::v-deep */
/* css >>> */
.v-text-field >>> label {
  font-size: 12px;
}
</style>