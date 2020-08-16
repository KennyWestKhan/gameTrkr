<template>
  <section>
    <div class="section-container" id="loading-div" v-if="loading">
      <span>Loading</span>
      <i class="fas fa-spinner fa-spin"></i>
    </div>
    <div v-if="error">
      <pageNotFound :message="error" />
    </div>
    <div v-if="profileData" class="section-container">
      <h1 class="gamertag">
        <img :src="profileData.platformInfo.avatarUrl" alt class="platform-avatar" />
        {{profileData.platformInfo.platformUserId}}
      </h1>
      <div class="grid">
        <div>
          <img :src="profileData.segments[1].metadata.imageUrl" alt />
        </div>
        <div>
          <ul>
            <li>
              <h4>Selected Legend</h4>
              <p>{{profileData.metadata.activeLegendName}}</p>
            </li>
            <li v-if="profileData.segments[0].stats.season2Wins">
              <h4>Season 2 Wins</h4>
              <p>
                {{profileData.segments[0].stats.season2Wins.displayValue}}
                <span>({{profileData.segments[0].stats.season2Wins.percentile}})</span>
              </p>
            </li>
            <li v-if="profileData.segments[0].stats.level">
              <h4>Apex Level</h4>
              <p>
                {{profileData.segments[0].stats.level.displayValue}}
                <span>({{profileData.segments[0].stats.level.percentile}}%)</span>
              </p>
            </li>
            <li v-if="profileData.segments[0].stats.kills">
              <h4>Lifetime Kills</h4>
              <p>
                {{profileData.segments[0].stats.kills.displayValue}}
                <span>({{profileData.segments[0].stats.kills.percentile}}%)</span>
              </p>
            </li>
            <li v-if="profileData.segments[0].stats.damage">
              <h4>Damage Done</h4>
              <p>
                {{profileData.segments[0].stats.damage.displayValue}}
                <span>({{profileData.segments[0].stats.damage.percentile}}%)</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid">
        <hbtn />
        <socialBtn />
      </div>
    </div>
  </section>
</template>

<script>
import { dataService } from "../shared/data.service";
import hbtn from "./home-btn";
import pageNotFound from "./page-not-found";
import socialBtn from "./share-buttons";

export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      error: null,
      profileData: null,
    };
  },
  components: { hbtn, pageNotFound, socialBtn },
  beforeCreate() {
    document.body.className = "body-bg-no-image";
  },
  async created() {
    this.$toasted.clear();
    this.loading = true;
    const res = await dataService.getGamerStats(
      this.$route.params.platform,
      this.$route.params.gamertag,
      this.$route.params.game
    );
    if (typeof res !== "object") {
      this.error = res;
    } else {
      this.profileData = res;
    }
    this.loading = false;
  },
};
</script>

<style scoped>
h1.gamertag {
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}
#loading-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
#loading-div span {
  padding: 7px;
}
.platform-avatar {
  width: 40px;
  margin-right: 0.7rem;
}
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
li {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}
li p {
  font-size: 2rem;
}
li:first-child p {
  font-size: 1.5rem;
}
li span {
  font-size: 1rem;
  color: #ccc;
}
@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
  .platform-avatar {
    display: none;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
}
</style>