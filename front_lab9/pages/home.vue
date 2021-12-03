<template>
    <v-row>
      <v-col
        v-for="item in card_list"
        :key="item"
        cols="12"
        sm="6"
        md="3"
        lg="3"
      >
        <v-card color="#385F73" class="my-2 mx-2" dark>
          <v-card-title class="text-h5"> {{ item.Category }} </v-card-title>
          <v-card-subtitle>
            {{ item.Description }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text> {{ item.API }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  layout: 'main',
  data() {
    return {
      card_list: null,
    }
  },
  async created() {
    await axios.get('https://api.publicapis.org/entries').then((taylor) => {
      this.card_list = taylor.data.entries
    })
  },
}
</script>