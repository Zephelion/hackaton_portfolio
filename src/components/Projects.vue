<script setup>
import { reactive, ref } from 'vue'
import Project from './Project.vue'
import ThreeJSComponent from './ThreeJSComponent.vue';


const showProjects = ref(false);

const state = reactive({
  projects: [],
});


function toggleProjects() {
  showProjects.value = !showProjects.value;
}

const fetchProjects = async () => {
    const response = await fetch('https://api.github.com/users/Zephelion/repos');
    const data = await response.json();
    console.log(data);
    state.projects = data;
}

fetchProjects();

</script>

<template>
  
  <Transition name="fade" mode="out-in">

    <section v-if="!showProjects">
        <h1>Russell Numo</h1>
        <section>
          <button @click="toggleProjects">Enter</button>
        </section>
    </section>

    <section class="projects" v-else>
      <!-- <h2>Select project</h2> -->
      <!-- <ul>
        <li v-for="project in state.projects" :key="project.id">
            <router-link :to="`/project/${project.name}`">
              <Project :repo="project"/>
        </li>
    </ul> -->

    <ThreeJSComponent/>
    </section>
    
  </Transition>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/styles.scss';

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  p{
    color: black;
  }

  main{
    overflow-x: hidden;

    section.projects{
      width: 100vw;
      overflow: hidden;
      // padding-left: 55px;

      h2{
        color: black;
        font-weight: 200;
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        padding: 10px;
      }
    }
  }

</style>