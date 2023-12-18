import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("venus-container");

starsFunction(solarSystem.scene);

const venusGeometry = new THREE.SphereGeometry(1, 90, 90);
const venusTexture = new THREE.TextureLoader().load("./asset/venus.jpeg");
const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
solarSystem.scene.add(venus);

solarSystem.setPlanet(venus);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
