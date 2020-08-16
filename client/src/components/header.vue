<template>
    <header>
        <span class="logo"><img :src="image"></span>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return{}
        },
        props: {
            image: {
                type: String,
                default: require('@/assets/apexlogo.png')
            }
        },
    }
</script>

<style scoped>
    img {
        width: 300px;
    }

    @media(max-width: 700px) {
        img {
            display: block;
            margin: auto;
        }
    }
</style>