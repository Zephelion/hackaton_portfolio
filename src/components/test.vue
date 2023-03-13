<script setup>

    const response = await fetch('https://api.github.com/users/Zephelion/repos');
    const data = await response.json();
    console.log(data);
</script>

<template>
    <p>This is an example component</p>
</template>