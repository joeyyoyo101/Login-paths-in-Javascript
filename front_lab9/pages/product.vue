<template>
  <v-container>
    <div>
      <v-simple-table dark>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
    <v-btn
      class="ma-2"
      color="secondary"
      @click="loader = 'loading'"
    >
      Create
    </v-btn>
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
export default {
  name: 'product',
  layout: 'main',
  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
      ],
    }
  },
}
</script>
