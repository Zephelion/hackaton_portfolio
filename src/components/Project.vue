<script setup>
import { reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router';

const state = reactive({
    projects: [],
    repo: []
});

// const repo = reactive({
//     thisRepo: []
// });

const fetchUserInfo = async () => {
    const response = await fetch('https://api.github.com/users/Zephelion/repos');
    const data = await response.json();
    console.log(data);
    state.projects = data;
}

const getRepo = async (name) => {
    const repo = name;
    const response = await fetch(`https://api.github.com/repos/Zephelion/${repo}`);
    const data = await response.json();

    // console.log(data)
    state.repo = data;
}

fetchUserInfo();
</script>


<template>
    <ul>
        <li v-for="project in state.projects" :key="project.id">
            <!-- <router-link :to="`/project/${project.name}`"> -->
            <router-link :to="{ name: 'project', params: { name: project.name }}">
                <img @click=" getRepo(project.name)" src="../../public/fancyhunter.png" alt="symbol">
                <h3>{{ project.name }}</h3>
            </router-link>
        </li>
    </ul>
    <!-- <router-view :project="state.repo"/>  -->
</template>

<style lang="scss">
    ul{
        padding: 0;
        margin: 0;
    }

    ul{
        display: flex;
        gap: 30px;
        overflow-x:auto;

        li{
            list-style: none;
            min-width: 450px;
            margin: 0;
            padding: 0;
            border: 1px solid gray;
            display: flex;
            justify-content: center;
            height: fit-content;
            flex-direction: column;
            align-items: center;
            transition: 0.4s;

            &:hover{
                transform: scale(1.1);
            }

            a{
                text-decoration: none;
                text-align: center;

                h3{
                color: black;
                font-weight: 300;
                margin: 0;
                }
    
                img{
                aspect-ratio: 1/1;
                width:7em;
                }
            }




    

   
    
            h2{
                color: black;
                // border-top: 1px solid black;
                border: 1px solid black;
                font-weight: 300;
                font-size: 1.1em;
            }


    
        }
    }
</style>