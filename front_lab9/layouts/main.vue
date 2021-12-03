<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
    </v-navigation-drawer>

    <v-main
      class="grey lighten-2"
      v-model="showname"
      @contextmenu.native="ContextMenu($event)"
    >
      <v-container>
        Client : {{ clientX + ' ' + clientY }}
      </v-container>
      <div
        id="MenuContext"
        ref="MenuContext"
        style="z-index:9999;top:200px left:200px;position:fixed;display:none;"
      >
        <v-list dense>
          <v-list-item-group  color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" link  v-on:click="Acction(item.text)">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <Nuxt style="z-index: 50" />
    </v-main>
  </v-app>
</template>


<script>
export default {
  layout: 'main',
  data: () => ({
    showname: false,
    clientX: 0,
    clientY: 0,
    drawer: null,
    selectedItem: 0,
    items: [
      { text: 'เพิ่ม', icon: 'mdi-clock'},
      { text: 'เพิ่มเติม', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag'},
    ],
  }),
  watch: {
  },
  created() {
    window.addEventListener('click', (e) => {
      if(this.showname){
        this.Close(e)
      }
    })
  },
  methods: {
    Acction(i){
      console.log(i);
    },
    Close() {
      this.showname = false
      this.$refs.MenuContext.style.display = 'none'
    },
    ContextMenu(e) {
      this.showname = true
      e.preventDefault()
      this.clientX = e.clientX
      this.clientY = e.clientY
      this.$refs.MenuContext.style.top = this.clientY + 'px'
      this.$refs.MenuContext.style.left = this.clientX + 'px'
      this.$refs.MenuContext.style.display = 'block'
    },
  },
}
</script>

