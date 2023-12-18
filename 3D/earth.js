import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("earth-container");

starsFunction(solarSystem.scene);

const earthGeometry = new THREE.SphereGeometry(1, 90, 90);
const earthTexture = new THREE.TextureLoader().load("./asset/earth.jpg");
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
solarSystem.scene.add(earth);

solarSystem.setPlanet(earth);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
