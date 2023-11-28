import * as THREE from "./three.js/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("matahari-container").appendChild(renderer.domElement);

//matahari brok
const sunGeometry = new THREE.SphereGeometry(1, 90, 90);
const sunTexture = new THREE.TextureLoader().load("./asset/sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

camera.position.z = 3;

const light = new THREE.AmbientLight(0xffffff, 2);
scene.add(light);

const animate = () => {
  requestAnimationFrame(animate);

  sun.rotation.x += 0.01;
  sun.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
