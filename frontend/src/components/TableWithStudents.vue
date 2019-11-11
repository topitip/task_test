<template>
  <v-flex lg9 ml-5>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="students"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.lessonTitle0="{ item }">
          <v-chip color="orange" v-if="
            item.lessonTitle0.skeaps.length === 0
          ">
          Студен не заполнен</v-chip>

          <v-chip color="error" v-else-if="100 / (60 / item.lessonTitle0.skeaps[0].skippingNoReason) > 10">
          Не допущен по прогулам</v-chip>

          <v-chip color="error" v-else-if="item.lessonTitle0.grades.length === 0 ||
          item.lessonTitle0.grades.length <= 6">
          Не допущен по количеству оценок</v-chip>

          <v-chip color="green" v-else>Допущен</v-chip>
        </template>

        <template v-slot:item.lessonTitle1="{ item }">
          <v-chip color="orange" v-if="
            item.lessonTitle1.skeaps.length === 0
          ">
          Студен не заполнен</v-chip>

          <v-chip color="error" v-else-if="100 / (60 / item.lessonTitle1.skeaps[0].skippingNoReason) > 10">
          Не допущен по прогулам</v-chip>

          <v-chip color="error" v-else-if="item.lessonTitle1.grades.length === 0 ||
          item.lessonTitle1.grades.length <= 6">
          Не допущен по количеству оценок</v-chip>

          <v-chip color="green" v-else>Допущен</v-chip>
        </template>

        <template v-slot:item.lessonTitle2="{ item }">
          <v-chip color="orange" v-if="
            item.lessonTitle2.skeaps.length === 0
          ">
          Студен не заполнен</v-chip>

          <v-chip color="error" v-else-if="100 / (60 / item.lessonTitle2.skeaps[0].skippingNoReason) > 10">
          Не допущен по прогулам</v-chip>

          <v-chip color="error" v-else-if="item.lessonTitle2.grades.length === 0 ||
          item.lessonTitle2.grades.length <= 6">
          Не допущен по количеству оценок</v-chip>

          <v-chip color="green" v-else>Допущен</v-chip>
        </template>

        <template v-slot:item.lessonTitle3="{ item }">
          <v-chip color="orange" v-if="
            item.lessonTitle3.skeaps.length === 0
          ">
          Студен не заполнен</v-chip>

          <v-chip color="error" v-else-if="100 / (60 / item.lessonTitle3.skeaps[0].skippingNoReason) > 10">
          Не допущен по прогулам</v-chip>

          <v-chip color="error" v-else-if="item.lessonTitle3.grades.length === 0 ||
          item.lessonTitle3.grades.length <= 6">
          Не допущен по количеству оценок</v-chip>

          <v-chip color="green" v-else>Допущен</v-chip>
        </template>

        <template v-slot:item.lessonTitle4="{ item }">
          <v-chip color="orange" v-if="
            item.lessonTitle4.skeaps.length === 0
          ">
          Студен не заполнен</v-chip>

          <v-chip color="error" v-else-if="100 / (60 / item.lessonTitle4.skeaps[0].skippingNoReason) > 10">
          Не допущен по прогулам</v-chip>

          <v-chip color="error" v-else-if="item.lessonTitle4.grades.length === 0 ||
          item.lessonTitle4.grades.length <= 6">
          Не допущен по количеству оценок</v-chip>

          <v-chip color="green" v-else>Допущен</v-chip>
        </template>

        <template v-slot:item.lessonTitle5="{ item }">
          <v-chip color="orange" v-if="
            item.lessonTitle5.skeaps.length === 0
          ">
          Студен не заполнен</v-chip>

          <v-chip color="error" v-else-if="100 / (60 / item.lessonTitle5.skeaps[0].skippingNoReason) > 10">
          Не допущен по прогулам</v-chip>

          <v-chip color="error" v-else-if="item.lessonTitle5.grades.length === 0 ||
          item.lessonTitle5.grades.length <= 6">
          Не допущен по количеству оценок</v-chip>

          <v-chip color="green" v-else>Допущен</v-chip>
        </template>
      </v-data-table>
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
      students: []
    }
  },

  created () {
    this.students = this.$store.state.user.students
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
      this.students = newCount
    },
    lessons (newCount, oldCount) {
      this.headers = [{
        text: 'Имя студента',
        align: 'left',
        value: 'FullName'
      }]
      let head = this.headers
      let store = this.$store.state.user.lessons
      store.forEach(function callback (element, index) {
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
