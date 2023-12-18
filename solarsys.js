import * as THREE from './three.js/build/three.module.js'
import {OrbitControls} from "./three.js/examples/jsm/controls/OrbitControls.js"
import {FontLoader} from './three.js/examples/jsm/loaders/FontLoader.js'
import {TextGeometry} from './three.js/examples/jsm/geometries/TextGeometry.js';

const textElement = document.getElementById('animatedText');
const texts = ["Welcome to the Solar System!", "Scroll to zoom in and zoom out; right-click or left-click while moving the cursor to move the camera."];
let index = 0;

function updateText() {
  textElement.textContent = texts[index];
  index = (index + 1) % texts.length;
}

function fadeIn() {
  textElement.style.opacity = 1;
}

function fadeOut() {
  textElement.style.opacity = 0;
  setTimeout(updateText, 1000);
  setTimeout(fadeIn, 1000);
}

updateText();
fadeIn();
setInterval(fadeOut, 4000);



let isAnimationActive = false;
const controls = document.getElementById('controls');
controls.addEventListener('change', function(e) {
    const checkBox = document.getElementById('check')
    isAnimationActive = checkBox.checked;
    if(isAnimationActive) {
      clock.start();
      animate();
      scene.add(mercuryOrbit);
      scene.add(venusOrbit);
      scene.add(earthOrbit);
      scene.add(marsOrbit);
      scene.add(jupiterOrbit);
      scene.add(saturnOrbit);
      scene.add(uranusOrbit);
      scene.add(neptuneOrbit);
    }
    else { 
      mercury.position.set(50, 0, 0);
      venus.position.set(70, 0, 0);
      earth.position.set(90, 0, 0);
      mars.position.set(120, 0, 0);
      jupiter.position.set(160, 0, 0);
      saturn.position.set(220, 0, 0);
      uranus.position.set(280, 0, 0);
      neptune.position.set(330, 0, 0);
      clock.stop();
      scene.remove(mercuryOrbit);
      scene.remove(venusOrbit);
      scene.remove(earthOrbit);
      scene.remove(marsOrbit);
      scene.remove(jupiterOrbit);
      scene.remove(saturnOrbit);
      scene.remove(uranusOrbit);
      scene.remove(neptuneOrbit);
  }
});


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const control = new OrbitControls(camera, renderer.domElement)
camera.lookAt(0, 0, 0)
camera.position.set(0, 0, 200);
control.minDistance = 30;
control.maxDistance = 700;

// Create Sun
const sunGeometry = new THREE.SphereGeometry(30, 32, 32);
const sunTexture = new THREE.TextureLoader().load("./asset/sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const mercuryGeometry = new THREE.SphereGeometry(2, 32, 32);
const mercuryTexture = new THREE.TextureLoader().load("./asset/mercury.jpeg"); 
const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.set(50, 0, 0);

const venusGeometry = new THREE.SphereGeometry(4, 32, 32);
const venusTexture = new THREE.TextureLoader().load("./asset/venus.jpeg");
const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(70, 0, 0);

const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
const earthTexture = new THREE.TextureLoader().load("./asset/earth.jpg");
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(90, 0, 0);

const marsGeometry = new THREE.SphereGeometry(3, 32, 32);
const marsTexture = new THREE.TextureLoader().load("./asset/mars.png");
const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(120, 0, 0);

const jupiterGeometry = new THREE.SphereGeometry(20, 32, 32);
const jupiterTexture = new THREE.TextureLoader().load("./asset/jupiter.png");
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(160, 0, 0);

const saturnGeometry = new THREE.SphereGeometry(15, 32, 32);
const saturnTexture = new THREE.TextureLoader().load("./asset/saturn.jpeg");
const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(220, 0, 0);

const ringGeometry = new THREE.TorusGeometry(25, 5, 2, 100);
const saturnRingTexture = new THREE.TextureLoader().load("./asset/saturnRing.jpeg");
const ringMaterial = new THREE.MeshBasicMaterial({ map: saturnRingTexture, side: THREE.DoubleSide, transparent: true, opacity: 0.2});
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.rotation.x = Math.PI / 2;
saturn.add(ring);

const uranusGeometry = new THREE.SphereGeometry(10, 32, 32);
const uranusTexture = new THREE.TextureLoader().load("./asset/uranus.jpg");
const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(280, 0, 0);

const neptuneGeometry = new THREE.SphereGeometry(8, 32, 32);
const neptuneTexture = new THREE.TextureLoader().load("./asset/neptune.jpeg");
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(330, 0, 0);

scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(mars);
scene.add(jupiter);
scene.add(uranus);
scene.add(neptune);
saturn.add(ring);
scene.add(saturn);

const fontLoader = new FontLoader();

let textGroup; // Declare textGroup as a global variable

fontLoader.load('./three.js/examples/fonts/helvetiker_bold.typeface.json', (font) => {

    const geo = new TextGeometry("Click The Sun", {
        font: font,
        size: 7,
        height: 2
    })

    const material = new THREE.MeshBasicMaterial({
        color: "white"
    })

    geo.computeBoundingBox();
    const textWidth = geo.boundingBox.max.x - geo.boundingBox.min.x;

    const textMesh = new THREE.Mesh(geo, material);
    
    textGroup = new THREE.Group();
    textGroup.add(textMesh);

    textGroup.position.set(0, 35, 0); // Set the initial position of the text

    textMesh.position.x = -textWidth / 2;
    textMesh.castShadow = true;
    scene.add(textGroup);

    // Start the animation loop
    animate();
});

function createOrbitLines(radius) {
    const points = [];
    const segments = 360;
  
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = radius * Math.cos(theta);
      const z = radius * Math.sin(theta);
  
      points.push(new THREE.Vector3(x, 0, z));
    }
  
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.2, transparent: true });
    const line = new THREE.Line(geometry, material);
  
    return line;
  }
  
const mercuryOrbit = createOrbitLines(50);
const venusOrbit = createOrbitLines(70);
const earthOrbit = createOrbitLines(90);
const marsOrbit = createOrbitLines(120);
const jupiterOrbit = createOrbitLines(160);
const saturnOrbit = createOrbitLines(220);
const uranusOrbit = createOrbitLines(280);
const neptuneOrbit = createOrbitLines(330);

const clock = new THREE.Clock();
  
function updatePlanets() {
    const elapsedTime = clock.getElapsedTime();
  
    mercury.position.x = Math.cos(elapsedTime * 0.5) * 50;
    mercury.position.z = Math.sin(elapsedTime * 0.5) * 50;
  
    venus.position.x = Math.cos(elapsedTime * 0.4) * 70;
    venus.position.z = Math.sin(elapsedTime * 0.4) * 70;
  
    earth.position.x = Math.cos(elapsedTime * 0.3) * 90;
    earth.position.z = Math.sin(elapsedTime * 0.3) * 90;
  
    mars.position.x = Math.cos(elapsedTime * 0.25) * 120;
    mars.position.z = Math.sin(elapsedTime * 0.25) * 120;
  
    jupiter.position.x = Math.cos(elapsedTime * 0.2) * 160;
    jupiter.position.z = Math.sin(elapsedTime * 0.2) * 160;
  
    saturn.position.x = Math.cos(elapsedTime * 0.15) * 220;
    saturn.position.z = Math.sin(elapsedTime * 0.15) * 220;
  
    uranus.position.x = Math.cos(elapsedTime * 0.1) * 280;
    uranus.position.z = Math.sin(elapsedTime * 0.1) * 280;
  
    neptune.position.x = Math.cos(elapsedTime * 0.08) * 330;
    neptune.position.z = Math.sin(elapsedTime * 0.08) * 330;
  }

const starsGeometry = new THREE.BufferGeometry();
const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
});

const starsVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starsVertices.push(x, y, z);
}

starsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starsVertices, 3)
);

const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

let animationStarted = false;
window.addEventListener('mousedown', (e) => {
    if (animationStarted) return;

    const mouse = new THREE.Vector2();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * -2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(sun);

    if (intersects.length > 0) {
        movePage()
    }
});


function movePage() {
    animationStarted = true
    window.location.href = 'carousel.html#matahari-container';
}

function updateTextFaces() {
  if (textGroup && camera) {
    textGroup.lookAt(camera.position);
}
}

const rotationSpeed = 0.0009
function animate(){
    requestAnimationFrame(animate);
    sun.rotation.y += 0.0002;
    saturn.rotation.y += rotationSpeed
    mercury.rotation.y += rotationSpeed;
    venus.rotation.y += rotationSpeed;
    earth.rotation.y += rotationSpeed;
    mars.rotation.y += rotationSpeed;
    jupiter.rotation.y += rotationSpeed;
    uranus.rotation.y += rotationSpeed;
    neptune.rotation.y += rotationSpeed;

    sun.updateMatrixWorld()
    mercury.updateMatrixWorld();
    venus.updateMatrixWorld();
    earth.updateMatrixWorld();
    mars.updateMatrixWorld();
    jupiter.updateMatrixWorld();
    uranus.updateMatrixWorld();
    neptune.updateMatrixWorld();
    control.update()
    updateTextFaces()
    if (isAnimationActive) {
      updatePlanets();
    }
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
};
animate();