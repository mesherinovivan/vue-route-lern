<template>
  <div id="app">
    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'home', params: {id: 2, msg:test}}">Home</router-link>
            </li>
        </ul>
    </nav>
    <router-view />
    <router-view class="view one" name="headers"></router-view>
  </div>
</template>

<script>  


export default {
  name: 'App',
  data(){
    return {
      test:"heyyy"
    }
  }
}
</script>

<style>

</style>
