<template>
  <div >
      <h1>List{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
