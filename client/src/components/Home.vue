<template>
	<div class="container">
    <div class="row">
      <h1>Hello! I'm Ariel</h1>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <img src="../assets/ariel.jpg" alt="hello">
      </div>
      <div class="col">
        {{ me.description }}
      </div>
    </div>
  </div>
</template>

<style>
  img {
    width: 100%;
  }
</style>

<style scoped>
  h1 {
    margin-bottom: 1em;
  }
</style>

<script>
  var me = {
    image: '../assets/ariel.jpg',
    description: 'Non deserunt dolor officia veniam sed ut laborum amet nostrud consectetur excepteur eu ut exercitation ad minim incididunt ut aliquip amet veniam commodo adipisicing aliquip in sunt velit aliqua magna aliqua magna incididunt eu eu duis adipisicing velit ut.'
  }

export default {

    data () {
      return {
        me: me
      }
    }
}
</script>