<template>
  <v-content>
    <v-layout row wrap mx-auto my-5>
      <SideBar/>
      <v-flex lg9 ml-5>
        <v-card>
          <v-sheet height="500">
            <v-calendar
              type="month"
              now="2019-01-08"
              value="2019-01-08"
            ></v-calendar>
          </v-sheet>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
  name: 'Home',
  components: {
    SideBar
  },
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
</style>
