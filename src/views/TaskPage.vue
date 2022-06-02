<template>
  <span>Задача: {{this.$store.state.name}}</span>
  <p>Описание: {{this.$store.state.description}}</p>
  <p>Исполнитель: {{this.$store.state.executor}}</p>
  <p>Время на выполнение (в часах):{{this.$store.state.time}}</p>
  <div class="buttons">
    <router-link :to="{name: 'TaskName'}">Новая задача</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>