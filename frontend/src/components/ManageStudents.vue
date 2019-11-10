<template>
  <v-flex lg9 ml-5>
    <v-dialog v-model="showEdit" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ editInf.FullName }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex lg6>
                <v-text-field v-model="editInf.skippingReason" label="Пропусков по причине"></v-text-field>
              </v-flex>
              <v-flex lg6>
                <v-text-field v-model="editInf.skippingNoReason" label="Пропусков без причины"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-btn small class="ma-5" color="primary" @click="addGrade">Добавить оценку</v-btn>
              <v-flex lg6>
                <v-text-field v-model="editInf.grade" label="Оценка"></v-text-field>
              </v-flex>
            </v-layout>

            <v-data-table
              :headers="headersInf"
              :items="editInf.grades"
              :items-per-page="5"
              class="elevation-1"
            >
            </v-data-table>
          </v-container>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn small color="blue darken-1" dark @click="showEdit = false">Close</v-btn>
        <v-btn small color="blue darken-1" dark @click="showEdit = false, save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-data-table
        v-if="headers.length !== 1"
        :headers="headers"
        :items="students"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.lessonTitle0="{ item }">
          <v-btn small @click="edit(item.id,'lessonTitle0')">Изменить оценки</v-btn>
        </template>
        <template v-slot:item.lessonTitle1="{ item }">
          <v-btn small @click="edit(item.id,'lessonTitle1')">Изменить оценки</v-btn>
        </template>
        <template v-slot:item.lessonTitle2="{ item }">
          <v-btn small @click="edit(item.id,'lessonTitle2')">Изменить оценки</v-btn>
        </template>
        <template v-slot:item.lessonTitle3="{ item }">
          <v-btn small @click="edit(item.id,'lessonTitle3')">Изменить оценки</v-btn>
        </template>
        <template v-slot:item.lessonTitle4="{ item }">
          <v-btn small @click="edit(item.id,'lessonTitle4')">Изменить оценки</v-btn>
        </template>
        <template v-slot:item.lessonTitle5="{ item }">
          <v-btn small @click="edit(item.id,'lessonTitle5')">Изменить оценки</v-btn>
        </template>
      </v-data-table>

      <v-flex v-else text-center pt-10 pb-5>
        <p>Добавьте уроки в панели настроек.</p>
      </v-flex>
    </v-card>
  </v-flex>
</template>

<script>
import user from '@/store/user'

export default {
  name: 'ManageStudents',
  data () {
    return {
      showEdit: false,
      editInfId: '',
      editInfLesson: undefined,
      editInf: {
        grade: '',
        grades: [],
        FullName: '',
        skippingReason: '',
        skippingNoReason: ''
      },
      headersInf: [{
        text: 'Имя студента',
        align: 'left',
        value: 'FullName'
      }],
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
  },

  methods: {
    edit (id, lesson) {
      this.editInfId = id
      this.editInfLesson = lesson
      console.log(this.editInfLesson)
      this.editInf = this.students[id]
      this.showEdit = true

      console.log(this.$store.state.user.students)
    },
    save () {
      this.addSkeap()
    },

    addSkeap () {
      switch (this.editInfLesson) {
        case 'lessonTitle0':
          this.$store.dispatch('addSkeap', {
            lesson: 'lessonTitle0',
            skippingReason: this.editInf.skippingReason,
            skippingNoReason: this.editInf.skippingNoReason
          })
          break

        case 'lessonTitle1':
          this.$store.dispatch('addSkeap', {
            lesson: 'lessonTitle1',
            skippingReason: this.editInf.skippingReason,
            skippingNoReason: this.editInf.skippingNoReason
          })
          break

        case 'lessonTitle2':
          this.$store.dispatch('addSkeap', {
            lesson: 'lessonTitle2',
            skippingReason: this.editInf.skippingReason,
            skippingNoReason: this.editInf.skippingNoReason
          })
          break

        case 'lessonTitle3':
          this.$store.dispatch('addSkeap', {
            lesson: 'lessonTitle3',
            skippingReason: this.editInf.skippingReason,
            skippingNoReason: this.editInf.skippingNoReason
          })
          break

        case 'lessonTitle4':
          this.$store.dispatch('addSkeap', {
            lesson: 'lessonTitle4',
            skippingReason: this.editInf.skippingReason,
            skippingNoReason: this.editInf.skippingNoReason
          })
          break

        case 'lessonTitle5':
          this.$store.dispatch('addSkeap', {
            lesson: 'lessonTitle5',
            skippingReason: this.editInf.skippingReason,
            skippingNoReason: this.editInf.skippingNoReason
          })
          break
      }
    },

    addGrade () {
      switch (this.editInfLesson) {
        case 'lessonTitle0':
          this.$store.dispatch('addGrade', { lesson: 'lessonTitle0', grade: this.editInf.grade, student: this.editInfId })
          break

        case 'lessonTitle1':
          this.$store.dispatch('addGrade', 'lessonTitle1', this.editInf.grade, this.editInfId)
          break

        case 'lessonTitle2':
          this.$store.dispatch('addGrade', 'lessonTitle2', this.editInf.grade, this.editInfId)
          break

        case 'lessonTitle3':
          this.$store.dispatch('addGrade', 'lessonTitle3', this.editInf.grade, this.editInfId)
          break

        case 'lessonTitle4':
          this.$store.dispatch('addGrade', 'lessonTitle4', this.editInf.grade, this.editInfId)
          break

        case 'lessonTitle5':
          this.$store.dispatch('addGrade', 'lessonTitle5', this.editInf.grade, this.editInfId)
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
