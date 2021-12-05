<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
    </v-navigation-drawer>

    <v-dialog v-model="dialogProduct" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Plublic Product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12">
                <v-text-field v-model="product_id" label="Product ID" required></v-text-field>
                <v-text-field v-model="product_name" label="Product's name" required></v-text-field>
                <v-text-field v-model="product_detail" label="Details in product" required></v-text-field>
                <v-text-field v-model="product_price" label="Price" type="Number" required></v-text-field>
              <v-text-field
              v-model="product_qty"
              label="Quantity"
              type="Number"
              required ></v-text-field>
             </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogProduct = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="InsertProduct()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-main
      class="grey lighten-2"
      v-model="showname"
      @contextmenu.native="ContextMenu($event)"
    >
      <v-container> Client : {{ clientX + ' ' + clientY }} </v-container>
      <div
        id="MenuContext"
        ref="MenuContext"
        style="z-index:9999;top:200px left:200px;position:fixed;display:none;"
      >
        <v-list dense>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              link
              v-on:click="Acction(item.text)"
            >
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
import axios from 'axios'
export default {
  layout: 'main',
  data: () => ({
    product_id:'',
    product_name:'',
    product_detail:'',
    product_price:0,
    product_qty:0,

    dialogProduct: false,
    showname: false,
    clientX: 0,
    clientY: 0,
    drawer: null,
    selectedItem: 0,
    items: [
      { text: 'เพิ่ม', icon: 'mdi-clock' },
      { text: 'เพิ่มเติม', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
  }),
  watch: {},
  async created() {
    window.addEventListener('click', (e) => {
      if (this.showname) {
        this.Close(e)
      }
    })
  },
  methods: {
    async InsertProduct(){
      if (this.product_id.length > 0&&this.product_name.length > 0
      &&this.product_detail.length > 0&&this.product_price > 0
      &&this.product_qty > 0) {
        const data = {
          product_id:this.product_id,
          product_name:this.product_name,
          product_detail:this.product_detail,
          product_price:this.product_price,
          product_qty:this.product_qty
        }
        await axios.post("http://localhost:9999/product",data)
        alert("ส่งข้อมูล")
      }
      this.product_id = ''
      this.product_name = ''
      this.product_detail = ''
      this.product_price = 0
      this.product_qty = 0
      this.dialogProduct = false
    },
    Acction(i) {
      if (i === 'เพิ่ม') {
        this.dialogProduct = true
      }
      console.log(i)
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

