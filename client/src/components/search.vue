<template>
  <section class="search">
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <div class="form-group">
          <label for="platform">Track your enemy (or friend | who cares ) player stats</label>
        </div>
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform" @change="changePlatform()">
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
          <option value="Origin">Origin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="game" class="game">Game</label>
        <select name="game" id="game" v-model="game" @change="changeGameScheme()">
          <option value="apex">Apex</option>
          <option value="cod">COD</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">Gamertag</label>
        <input
          type="text"
          name="text"
          v-model="gamertag"
          id="gamertag"
          placeholder="Origin ID, Xbox Live gamertag, PSN ID etc"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Search" id="submitBtn" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      game: "apex",
      platform: "psn",
      gamertag: "",
      hasValue: false,
      selectedGameScheme: undefined,
      apexScheme: {
        name: "apex",
        class: "apex-scheme",
        logo: "apex-logo",
        primaryColor: "#953036",
        background: "octane2.png",
      },
      codScheme: {
        name: "cod",
        class: "cod-scheme",
        logo: "cod-logo",
        primaryColor: "#4b483f",
        background: "cod.png",
      },
      toastedObj: {
        duration: 6000,
        type: "success",
        icon: "exclamation-circle",
        theme: "bubble",
      },
    };
  },
  beforeCreate() {
    // document.body.className = "body-bg-image"
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      const legendName = sessionStorage.getItem("trkr-legendName");
      let name = legendName ? legendName : "Dummy";
      this.$toasted.show(
        `Welcome ${name} ! Use with care. Be sure to thank Kenny for this!`,
        this.toastedObj
      );
      this.changeGameScheme();
    });
  },
  computed: {
    name() {
      return this.data;
    },
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        let msg = "Enter gamertag! Dummy!";
        this.toastedObj.type = "info";
        this.$toasted.show(msg, this.toastedObj);
      } else {
        this.$router.push(`/profile/${this.platform}/${this.gamertag}/${this.game}`);
      }
    },
    changeGameScheme() {
      switch (this.game) {
        case "cod":
          this.selectedGameScheme = this.codScheme;
          break;
        case "apex":
          this.selectedGameScheme = this.apexScheme;
          break;
        default:
        // code block
      }
      document.body.className = this.selectedGameScheme.class;
    //   document.getElementById(
    //     "submitBtn"
    //   ).style.backgroundColor = this.selectedGameScheme.primaryColor;
    },
    changePlatform() {
    //   this.platform;
    },
  },
};
</script>

<style scoped>
</style>