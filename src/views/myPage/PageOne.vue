<template>
<div>
  <div class="rt">22

<navbar/>
  
</div>
<!-- <navbar/> -->

</div>

<!-- <navbar/> -->
</template>
<style>
 
</style>

<script>
// import {PageTwo} from './pageTwo'
import {Navbar} from './components'
  export default {
    components:{
      Navbar
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>