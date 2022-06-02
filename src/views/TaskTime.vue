<template>
  <h2>Step 3</h2>
  <input type="number" placeholder="time to complete" v-model="time">

  <div>
    <router-link :to="{name: 'TaskDescription'}">Back</router-link>
    <router-link :to="{name: time ? 'TaskExecutor' : 'TaskTime'}" @click="addTime(time)">Next</router-link>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      time: ""
    }
  },
  methods:{
    ...mapMutations(['addTime'])
  }
}
</script>

<style scoped>

</style>