<template>
  <v-container>
    <v-row>
      <input type="color" v-model="selectColor" />
      <v-btn @click="submitButtonoStyle()" depressed> กดแล้วแดนซ์ </v-btn>
      <v-btn @click="submitButton()" depressed> กดแล้วหยุด </v-btn>
    </v-row>
    <v-row>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title>ทดสอบ</v-card-title>
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon @click="addEventlistner('love')" depressed
              >mdi-heart
            </v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon @click="addEventlistner('listner'), EventSource()" depressed
              >mdi-bookmark</v-icon
            >
          </v-btn>

          <v-btn icon>
            <v-icon
              @click="
                addEventlistner('target'), EventSource(), EventTarget($event)
              "
              depressed
              >mdi-share-variant</v-icon
            >
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row>
      <v-col>
        <Nuxt />
      </v-col>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>
