<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h1>Dynamic page {{ page.id }}</h1>
    <h1>{{ page.name }}</h1>
    <h1 v-if="page.random !== undefined">{{ page.random }}</h1>
    <!-- <h1 v-else>No property</h1> -->
    <router-link to="/">Contact</router-link>
</template>

<script>
import Pages from '../data'

export default {
    data(){
        return {
            page: Pages.find(page => page.id == this.$route.params.id)
        }
    }
}
</script>