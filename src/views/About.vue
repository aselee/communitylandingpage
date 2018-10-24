<!-- HTML Goes here -->
<template>
  <div>
    <div class="title">
      <h1>{{title}}</h1>
    </div>

<!-- Using vuetify card here -->
    <v-containerfluid>
      <v-layout row >
        <!-- possibly not use offset-sm3 for v-flex -->
        <v-flex xs6 sm6>
          <v-card>
            <!-- group member image -->
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">MattL019</h3>
                <div>Developer
                  <br>Experience using JavaScript, Vue, and MEAN
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 sm6>
          <v-card>
             <!-- group member image -->
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Rejam</h3>
                <div>Developer
                  <br>Experience using JavaScript, HTML/CSS, and MEN
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 sm6>
          <v-card>
             <!-- group member image -->
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Novajeeper</h3>
                <div>Developer
                  <br>Experience using JavaScript, Angular, and Meteor
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
                <v-flex xs6 sm6>
          <v-card>
             <!-- group member image -->
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Banhbaovy</h3>
                <div>Developer
                  <br>Experience using JavaScript and Ruby
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs6 sm6>
          <v-card>
             <!-- group member image -->
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">DevLee</h3>
                <div>Developer
                  <br>Experience using JavaScript, MERN and HTML/CSS
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-containerfluid>
  </div>
</template>


<!-- JavaScript goes here -->
<script>

export default {

  data: function() {
    return {
      title: 'About Us',
    }
  }
}
</script>

<!-- CSS goes here. 'scoped' attribute means the CSS will 
be applied to this component only. -->
<style scoped>
h1 {
  text-align: center;
}

</style>