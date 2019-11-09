<template>
  <v-flex lg9 ml-5>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="students"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-flex>
</template>

<script>
import user from '@/store/user'

export default {
  name: 'TableWithStudents',
  data () {
    return {
      headers: [
        {
          text: 'Имя студента',
          align: 'left',
          value: 'FullName'
        }
      ],
      students: [
        {
          FullName: 'Артур Яковлев',
          data: []
        },
        {
          FullName: 'Антон Николаев',
          data: []
        },
        {
          FullName: 'Роман Никольский',
          data: []
        },
        {
          FullName: 'Роман Никольский',
          data: []
        },
        {
          FullName: 'Алексей Лутковский',
          data: []
        },
        {
          FullName: 'Карл Маркс',
          data: []
        },
        {
          FullName: 'Стив Джобс',
          data: []
        }
      ]
    }
  },

  computed: {
    count () {
      return user.state.students
    },
    lessons () {
      return user.state.lessons
    }
  },

  watch: {
    count (newCount, oldCount) {
      this.students.data = newCount.students
      this.headers.push(newCount.headers)
    },
    lessons (newCount, oldCount) {
      let head = this.headers
      this.$store.state.user.lessons.forEach(function callback (element, index) {
        head.push(
          {
            text: element.lessonTitle,
            value: 'lessonTitle' + index
          }
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
