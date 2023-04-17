<template>
    <div ref="container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const container = ref(null)
let camera, scene, renderer

const canvas = ref(null);
// Initialize the Three.js scene
const init = () => {

  // Scene
  scene = new THREE.Scene()


  // Sizes
  // const sizes = {
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // }

  // Light
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10);
  scene.add(light);

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 10
  scene.add(camera)




  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true;


  // Creating a sphere
  const sphereGeometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(sphereGeometry, material);
  scene.add(mesh);
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

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})


</script>