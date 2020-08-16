<template>
    <div>
        <router-link to="/">Facebook</router-link>
    </div>
</template>

<script>
    export default {
        name: 'socialMediaShareButton'
    }
</script>

<style scoped>
a {
  /* display: inline-block; */
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
  float: right;
}
a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}

</style>