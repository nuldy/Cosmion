import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("jupyter-container");

starsFunction(solarSystem.scene);

const jupyterGeometry = new THREE.SphereGeometry(1, 90, 90);
const jupyterTexture = new THREE.TextureLoader().load("./asset/jupiter.png");
const jupyterMaterial = new THREE.MeshBasicMaterial({ map: jupyterTexture });
const jupyter = new THREE.Mesh(jupyterGeometry, jupyterMaterial);
solarSystem.scene.add(jupyter);

const light = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(light);

solarSystem.animate();
