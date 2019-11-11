<template>
  <v-flex lg9 ml-5>
    <v-card>
      <AddLesson />
      <TableWithLessons />
    </v-card>
  </v-flex>
</template>

<script>
import AddLesson from '@/components/SettingPageComp/AddLesson'
import TableWithLessons from '@/components/SettingPageComp/TableWithLessons'

export default {
  name: 'SettingPage',
  components: {
    AddLesson,
    TableWithLessons
  },
  data () {
    return {
    }
  }
}
</script>
