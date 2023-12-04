import * as THREE from "./three.js/build/three.module.js";
import { SolarSystem } from "./class/solarSystem.js";
import { starsFunction } from "./component/starsComponent.js";

const solarSystem = new SolarSystem("bg-Home");

starsFunction(solarSystem.scene);
solarSystem.animate();


