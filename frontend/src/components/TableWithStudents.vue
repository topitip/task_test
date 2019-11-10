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
          id: 0,
          FullName: 'Артур Яковлев',
          lessonTitle0: {},
          lessonTitle1: {},
          lessonTitle2: {},
          lessonTitle3: {},
          lessonTitle4: {},
          lessonTitle5: {}
        },
        {
          id: 1,
          FullName: 'Антон Николаев',
          lessonTitle0: {},
          lessonTitle1: {},
          lessonTitle2: {},
          lessonTitle3: {},
          lessonTitle4: {},
          lessonTitle5: {}
        },
        {
          id: 2,
          FullName: 'Роман Никольский',
          lessonTitle0: {},
          lessonTitle1: {},
          lessonTitle2: {},
          lessonTitle3: {},
          lessonTitle4: {},
          lessonTitle5: {}
        },
        {
          id: 3,
          FullName: 'Роман Никольский',
          lessonTitle0: {},
          lessonTitle1: {},
          lessonTitle2: {},
          lessonTitle3: {},
          lessonTitle4: {},
          lessonTitle5: {}
        },
        {
          id: 4,
          FullName: 'Алексей Лутковский',
          lessonTitle0: {},
          lessonTitle1: {},
          lessonTitle2: {},
          lessonTitle3: {},
          lessonTitle4: {},
          lessonTitle5: {}
        },
        {
          id: 5,
          FullName: 'Карл Маркс',
          lessonTitle0: {},
          lessonTitle1: {},
          lessonTitle2: {},
          lessonTitle3: {},
          lessonTitle4: {},
          lessonTitle5: {}
        },
        {
          id: 6,
          FullName: 'Стив Джобс',
          lessonTitle0: {},
          lessonTitle1: {},
          lessonTitle2: {},
          lessonTitle3: {},
          lessonTitle4: {},
          lessonTitle5: {}
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
