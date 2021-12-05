<template>
  <v-container>
    <div>
      <v-simple-table dark>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Detail</th>
            <th class="text-left">Price</th>
            <th class="text-left">Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.detail }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.qty }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
      <v-btn
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Update
    </v-btn>
     <v-btn
      class="ma-2"
      color="success"
      @click="loader = 'loading2'"
    >
     Delete
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'product',
  layout: 'main',
  data() {
    return {
      desserts: [],
    }
  },
  async created(){
     await axios.get("http://localhost:9999/product").then((resp)=>{
          this.desserts = resp.data
    })
  }
}
</script>
