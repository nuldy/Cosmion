import * as THREE from './three.js/build/three.module.js'
import {OrbitControls} from "./three.js/examples/jsm/controls/OrbitControls.js"

const textElement = document.getElementById('animatedText');
const texts = ["Welcome to Solar System!", "Scroll to zoom in and zoom out; right-click or left-click while moving the cursor to move the camera.", "Zoom in on one of the planets and click on it to see information about it."];
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

// Create Sun
const sunGeometry = new THREE.SphereGeometry(30, 32, 32);
const sunTexture = new THREE.TextureLoader().load("./asset/sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
sun.name = "Sun";

const mercuryGeometry = new THREE.SphereGeometry(2, 32, 32);
const mercuryTexture = new THREE.TextureLoader().load("./asset/mercury.jpeg");
const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.set(50, 0, 0);
mercury.name = 'Mercury';

const venusGeometry = new THREE.SphereGeometry(4, 32, 32);
const venusTexture = new THREE.TextureLoader().load("./asset/venus.jpeg");
const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(70, 0, 0);
venus.name = 'Venus';

const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
const earthTexture = new THREE.TextureLoader().load("./asset/earth.jpg");
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(90, 0, 0);
earth.name = 'Earth';

const marsGeometry = new THREE.SphereGeometry(3, 32, 32);
const marsTexture = new THREE.TextureLoader().load("./asset/mars.png");
const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(120, 0, 0);
mars.name = 'Mars';

const jupiterGeometry = new THREE.SphereGeometry(20, 32, 32);
const jupiterTexture = new THREE.TextureLoader().load("./asset/jupiter.png");
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(160, 0, 0);
jupiter.name = 'Jupiter';

const saturnGeometry = new THREE.SphereGeometry(15, 32, 32);
const saturnTexture = new THREE.TextureLoader().load("./asset/saturn.jpeg");
const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(220, 0, 0);
saturn.name = 'Saturn';

const ringGeometry = new THREE.TorusGeometry(25, 2, 2, 100);
const saturnRingTexture = new THREE.TextureLoader().load("./asset/saturnRing.jpeg");
const ringMaterial = new THREE.MeshBasicMaterial({ map: saturnRingTexture, side: THREE.DoubleSide, transparent: true, opacity: 0.2});
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.rotation.x = Math.PI / 2;
ring.name = 'Saturn';
saturn.add(ring);

const uranusGeometry = new THREE.SphereGeometry(10, 32, 32);
const uranusTexture = new THREE.TextureLoader().load("./asset/uranus.jpg");
const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(280, 0, 0);
uranus.name = 'Uranus';

const neptuneGeometry = new THREE.SphereGeometry(8, 32, 32);
const neptuneTexture = new THREE.TextureLoader().load("./asset/neptune.jpeg");
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: neptuneTexture });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(330, 0, 0);
neptune.name = 'Neptune';

scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(mars);
scene.add(jupiter);
scene.add(uranus);
scene.add(neptune);
saturn.add(ring);
scene.add(saturn);

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


window.addEventListener('mousedown', (e) => {
    const mouse = new THREE.Vector2();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * -2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects([sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]);

    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;

        if (intersectedObject.name === 'Sun') {
            window.location.href = 'index.html#matahari-container';
        } else if (intersectedObject.name === 'Mercury') {
            window.location.href = 'index.html#mercury-container';
        } else if (intersectedObject.name === 'Venus') {
            window.location.href = 'index.html#venus-container';
        } else if (intersectedObject.name === 'Earth') {
            window.location.href = 'index.html#earth-container';
        } else if (intersectedObject.name === 'Mars') {
            window.location.href = 'index.html#mars-container';
        } else if (intersectedObject.name === 'Jupiter') {
            window.location.href = 'index.html#jupiter-container';
        } else if(intersectedObject.name === 'Saturn'){
            window.location.href = 'index.html#saturn-container';
        } else if (intersectedObject.name === 'Uranus') {
            window.location.href = 'index.html#uranus-container';
        } else if (intersectedObject.name === 'Neptune') {
            window.location.href = 'index.html#neptune-container';
        }
    }
});

const rotationSpeed = 0.002
function animate(){
    requestAnimationFrame(animate);
    sun.rotation.y += 0.0005;
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
    saturn.updateMatrixWorld();
    uranus.updateMatrixWorld();
    neptune.updateMatrixWorld();
    control.update()

    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
};
animate();