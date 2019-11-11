<template>
  <v-app>
    <v-container>
      <router-view></router-view>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
