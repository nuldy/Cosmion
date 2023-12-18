import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("neptune-container");

starsFunction(solarSystem.scene);

const neptuneGeometry = new THREE.SphereGeometry(1, 90, 90);
const neptuneTexture = new THREE.TextureLoader().load("./asset/neptune.jpeg");
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
solarSystem.scene.add(neptune);

solarSystem.setPlanet(neptune);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
