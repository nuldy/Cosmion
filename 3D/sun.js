import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("matahari-container");

starsFunction(solarSystem.scene);

const sunGeometry = new THREE.SphereGeometry(1, 90, 90);
const sunTexture = new THREE.TextureLoader().load("./asset/sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
solarSystem.scene.add(sun);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
