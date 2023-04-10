<template>
    <div ref="container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let camera, scene, renderer

// Initialize the Three.js scene
const init = () => {
  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // Scene
  scene = new THREE.Scene()

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  // Cube
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}

// Animation loop
const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

onMounted(() => {
  init()
  animate()
})


</script>