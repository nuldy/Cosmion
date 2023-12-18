import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("mercury-container");

starsFunction(solarSystem.scene);

const mercuryGeometry = new THREE.SphereGeometry(1, 90, 90);
const mercuryTexture = new THREE.TextureLoader().load("./asset/mercury.jpeg");
const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
solarSystem.scene.add(mercury);

solarSystem.setPlanet(mercury);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
