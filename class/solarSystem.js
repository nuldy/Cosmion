import * as THREE from "../three.js/build/three.module.js";
import { OrbitControls } from "../three.js/examples/jsm/controls/OrbitControls.js";

export class SolarSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.scene = new THREE.Scene();
    this.rotationSpeed = 0.005;
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    this.camera.lookAt(0, 0, 0);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    window.addEventListener("resize", () => this.handleWindowResize());
    this.camera.position.z = 4;
    this.camera.position.y = 2;
  }

  handleWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setPlanet(planet) {
    this.planet = planet;
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.planet) {
      this.planet.rotation.y += this.rotationSpeed;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
