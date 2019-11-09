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

}
</script>

<style>

</style>