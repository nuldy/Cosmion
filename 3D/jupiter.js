import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("jupiter-container");

starsFunction(solarSystem.scene);

const jupiterGeometry = new THREE.SphereGeometry(1, 90, 90);
const jupiterTexture = new THREE.TextureLoader().load("./asset/jupiter.png");
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
solarSystem.scene.add(jupiter);

solarSystem.setPlanet(jupiter);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
