import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("uranus-container");

starsFunction(solarSystem.scene);

const uranusGeometry = new THREE.SphereGeometry(1, 90, 90);
const uranusTexture = new THREE.TextureLoader().load("./asset/uranus.jpg");
const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
solarSystem.scene.add(uranus);

solarSystem.setPlanet(uranus);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
