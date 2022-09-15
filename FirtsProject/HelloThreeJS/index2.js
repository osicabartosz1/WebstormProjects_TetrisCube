const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(24, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 35;
camera.position.y = 35;
camera.position.x = 35;
camera.rotation.x = 20;
camera.rotation.z = -20;
//camera.position.x = -40;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const colorYellow = new THREE.Color("hsl(40,100%,60%)")
const colorPink = new THREE.Color("hsl(306,100%,60%)")
const cubeGeometry =  new THREE.BoxGeometry(20,10,50);

var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
const light = new THREE.PointLight(colorPink, 2)

light.position.z = 20;
light.position.y = -20;
light.position.x = -40;

scene.add(light);
scene.add(cube);
renderer.render(scene,camera);