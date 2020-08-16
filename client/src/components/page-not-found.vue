<template>
  <div class="section-container">
    <div class="content-title-group not-found">
      <i class="fa-3x fas fa-bomb"></i>&nbsp;
      <span class="title">{{message}}</span>
    </div>
    <hbtn />
  </div>
</template>
<script>
import hbtn from "./home-btn";

export default {
  name: 'page-not-found',
  components: { hbtn },
  beforeCreate() {
    document.body.className = "page-not-found-bg-image";
  },
  props: {
    message: {
      type: String,
      default: "These aren't the kills you're looking for"
    },
  },
};
</script>