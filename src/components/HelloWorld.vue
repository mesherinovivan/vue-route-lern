<template>
  <div >
      <h1>Hello{{ id }}{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    id : String,
  }
}
</script>

<style scoped>

</style>
