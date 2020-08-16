<template>
  <div>
    <router-link to="/">Go back!</router-link>
  </div>
</template>

<script>
export default {
  name: "homeBtn",
};
</script>

<style scoped>
a {
  display: inline-block;
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
}
a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}
</style>