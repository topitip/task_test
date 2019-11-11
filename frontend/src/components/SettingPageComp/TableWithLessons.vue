<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import user from '@/store/user'

export default {
  name: 'TableWithLessons',
  data () {
    return {
      headers: [
        {
          text: 'Название предмета',
          align: 'left',
          sortable: false,
          value: 'lessonTitle'
        },
        { text: 'Количество часов', align: 'center', value: 'lessonHours' },
        { text: 'Количсетво оценок для аттестации', align: 'center', value: 'lessonGrade' }
      ],
      desserts: []
    }
  },
  computed: {
    count () {
      return user.state.lessons
    }
  },

  watch: {
    count (newCount, oldCount) {
      this.desserts = newCount
    }
  }
}
</script>
