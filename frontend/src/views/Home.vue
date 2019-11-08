<template>
  <v-content>
    <v-layout row wrap mx-auto my-5>
      <SideBar/>
      <TableWithStudents v-show="this.showTabel === 'home'" />
      <SettingPage v-show="this.showTabel === 'settings'" />
    </v-layout>
  </v-content>
</template>

<script>
import SideBar from '@/components/SideBar'
import TableWithStudents from '@/components/TableWithStudents'
import SettingPage from '@/components/SettingPage'

import user from '@/store/user'

export default {
  name: 'Home',
  components: {
    TableWithStudents,
    SettingPage,
    SideBar
  },
  data: () => ({
    showTabel: 'home'
  }),

  computed: {
    count () {
      return user.state.tabel
    }
  },

  watch: {
    count (newCount, oldCount) {
      this.showTabel = newCount
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
