<template>
    <section class = "search">
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <div class="form-group"><label for="platform">Track your enemy (or friend | who cares ) player stats</label></div>
                <label for="platform">Platform</label>
                <select name="platform" id="platform" v-model="platform">
                    <option value="psn">Playstation</option>
                    <option value="xbl">Xbox</option>
                    <option value="Origin">Origin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="game" class="game"></label>
                <select name="game" id="game" v-model="game">
                    <option value="apex">Apex</option>
                    <option value="cod">COD</option>
                </select> 
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" name="text" v-model="gamertag" id="gamertag" placeholder="Origin ID, Xbox Live gamertag, PSN ID etc">
            </div>
            <div class="form-group">
                <input type="submit" value="Submit" class="btn">
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                game: "apex",
                platform : "psn",
                gamertag: "",
                hasValue: false
            }
        },
        beforeCreate() {
            document.body.className = "body-bg-image"
        },
        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
                const legendName = sessionStorage.getItem('trkr-legendName');
                let name = (legendName) ? legendName : 'Dummy'
                this.$toasted.show(`Welcome ${name} ! Use with care. Be sure to thank Kenny for this!`, {
                    duration: 6000,
                    type : 'success',
                    icon: "exclamation-circle"
                })
            })
        },
        computed: {
            name() {
                return this.data 
            }
        },
        methods: { 
            onSubmit() {
                if (!this.gamertag){
                    let msg = "Enter gamertag! Dummy!";
                    this.$toasted.show(msg, {
                        duration: 3000,
                        type : 'info',
                        icon: "exclamation-circle"
                    })
                    console.log(msg)
                }else {
                   this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
                }
            }
        }
    }
</script>

<style scoped>

</style>