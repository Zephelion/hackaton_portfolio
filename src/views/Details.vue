<script setup>
import {reactive} from 'vue';
import { useRoute } from 'vue-router';

const state = reactive({
    repo: {},
});

const route = useRoute();
const name = route.params.name;


const getRepo = async (name) => {

    console.log(name);
    const repo = name;
    const response = await fetch(`https://api.github.com/repos/Zephelion/${repo}`);
    const data = await response.json();
    
    state.repo = data;

    console.log(state.repo);
}

getRepo(name);

</script>


<template>
    <section>
        <h2>{{ state.repo.name }}</h2>
    </section>
</template>

<style lang="scss" scoped>
    h2{
        color: black;
        font-weight: 300;
    }
</style>