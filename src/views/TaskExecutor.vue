<template>
  <h2>Step 4</h2>
  <form action="formdata" method="post" name="form1">
    <select name="list1" v-model="executor">
      <option disabled value="">Choose executor</option>
      <option>Alpha</option>
      <option>Beta</option>
      <option>Gamma</option>
      <option>Delta</option>
      <option>Epsilon</option>
    </select>
  </form>

  <div>
    <router-link to="/description">Back</router-link>
    <router-link :to="{name: executor ? 'TaskPage' : 'TaskExecutor'}"
                 @click="addExecutor(executor)">Create</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      executor: ""
    }
  },
  methods:{
    ...mapMutations(['addExecutor'])
  }
}
</script>

<style scoped>

</style>