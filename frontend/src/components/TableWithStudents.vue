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
  }
}
</script>

<style lang="scss" scoped>

</style>
