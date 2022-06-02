<template>
  <h2>Step 2</h2>
  <input type="text" placeholder="TaskDescription" v-model="description">
  <div>
    <router-link to="/">Back</router-link>
    <router-link :to="{name: description ? 'TaskTime' : 'TaskDescription' }"
                 @click="addDescription(description)">Next</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data(){
    return {
      description: ''
    }
  },
  methods:{
    ...mapMutations(['addDescription'])
  }
}
</script>

<style scoped>

</style>