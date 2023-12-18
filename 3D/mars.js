import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("mars-container");

starsFunction(solarSystem.scene);

const marsGeometry = new THREE.SphereGeometry(1, 90, 90);
const marsTexture = new THREE.TextureLoader().load("./asset/mars.png");
const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
solarSystem.scene.add(mars);

solarSystem.setPlanet(mars);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
