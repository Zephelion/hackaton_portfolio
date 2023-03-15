<script setup>
import { ref } from 'vue'

const showProjects = ref(false);

function toggleProjects() {
  showProjects.value = !showProjects.value;
}

const fetchUserInfo = async () => {
  const response = await fetch('https://api.github.com/users/Zephelion/repos');
  const data = await response.json();
  console.log(data);
}

fetchUserInfo();

</script>

<template>
  
  <Transition name="fade" mode="out-in">
    <section v-if="!showProjects">
        <h1>Russell Numo</h1>
        <section>
          <button @click="toggleProjects">Enter</button>
        </section>
    </section>
    <section v-else>
      <p>loading projects....</p>
    </section>
  </Transition>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/landing.scss';

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  p{
    color: black;
  }

</style>