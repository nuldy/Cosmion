import * as THREE from "../three.js/build/three.module.js";
import { SolarSystem } from "../class/solarSystem.js";
import { starsFunction } from "../component/starsComponent.js";

const solarSystem = new SolarSystem("saturn-container");

starsFunction(solarSystem.scene);

const saturnGeometry = new THREE.SphereGeometry(1, 90, 90);
const saturnTexture = new THREE.TextureLoader().load("./asset/saturn.jpeg");
const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
solarSystem.scene.add(saturn);

const ringGeometry = new THREE.TorusGeometry(2, 0.4, 2, 100);
const ringTexture = new THREE.TextureLoader().load("./asset/saturnRing.jpeg");
const ringMaterial = new THREE.MeshBasicMaterial({
  map: ringTexture,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.4,
});
const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
ringMesh.rotation.x = Math.PI / 2;
solarSystem.scene.add(ringMesh);

solarSystem.setPlanet(saturn);

const saturnLight = new THREE.AmbientLight(0xffffff, 2);
solarSystem.scene.add(saturnLight);

solarSystem.animate();
