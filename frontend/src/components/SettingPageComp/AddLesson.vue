<template>
  <v-container>
    <v-subheader>Добавить предмет</v-subheader>
    <v-layout row wrap>
      <v-flex lg5 pa-5 ml-5 pt-0>
        <v-text-field
          v-model="lesson.lessonTitle"

          v-validate="'required'"
          data-vv-name="lessonTitle"
          :error-messages="errors.collect('lessonTitle')"
          required

          label="Название предмета"
          outlined
        ></v-text-field>
      </v-flex>

      <v-flex lg2 pa-5 pt-0>
        <v-text-field
          v-model="lesson.lessonHours"
          v-mask="'###'"

          v-validate="'required|min_value:20|max_value:160'"
          data-vv-name="lessonHours"
          :error-messages="errors.collect('lessonHours')"
          required

          label="Часы"
          outlined
        ></v-text-field>
      </v-flex>

      <v-flex lg2 pa-5 pt-0>
        <v-text-field
          v-model="lesson.lessonGrade"
          v-mask="'##'"

          v-validate="'required|min_value:5|max_value:30'"
          data-vv-name="lessonGrade"
          :error-messages="errors.collect('lessonGrade')"
          required

          label="Оценки"
          outlined
        ></v-text-field>
      </v-flex>

      <v-flex lg2 py-5 mt-2 ml-4 pt-0>
        <v-btn block color="primary" dark @click="addLesson">Добавить урок</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
    v-model="notification.snackbar"
    :right="notification.x"
    :timeout="notification.timeout"
    :top="notification.y"
    color="primary"
    >
      Предмет добавлен
      <v-btn
        color="white"
        text
        @click="notification.snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'AddLesson',
  directives: {
    mask
  },
  data () {
    return {
      dictionary: {
        custom: {
          lessonTitle: {
            required: () => 'Это поле не может быть пустым'
          },
          lessonGrade: {
            required: () => 'Это поле не может быть пустым',
            min_value: 'Минимальное количество оценок 5',
            max_value: 'Максимальное количество оценок 30'
          },
          lessonHours: {
            required: () => 'Это поле не может быть пустым',
            min_value: 'Минимальное количество часов 20',
            max_value: 'Максимальное количество часов 160'
          }
        }
      },

      lesson: {
        lessonTitle: '',
        lessonGrade: null,
        lessonHours: null
      },

      notification: {
        snackbar: false,
        y: 'top',
        x: 'right',
        timeout: 3000
      }
    }
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    async addLesson () {
      const valid = await this.$validator.validate()
      if (valid) {
        await this.$store.state.user.lessons.push(this.lesson)
        this.lesson = {
          lessonTitle: '',
          lessonGrade: null,
          lessonHours: null
        }
        this.notification.snackbar = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
