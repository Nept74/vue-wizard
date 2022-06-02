<template>
  <h2>Step 1</h2>
  <input placeholder="name" v-model="title">
  <div>
    <router-link :to="{name: title ? 'TaskDescription' : 'TaskName' }" @click="addName(title)">Next</router-link>
  </div>

</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data(){
    return{
      title: ''
    }
  },
  methods:{
    ...mapMutations(['addName'])
  }
}
</script>

<style scoped>

</style>