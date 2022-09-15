//Creates scene and camera

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x999999 );
const grid = new THREE.GridHelper( 50, 50, 0xffffff, 0x333333 );
scene.add( grid );

var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 20, 20, 20 );
camera.lookAt(0,0,0);

//Creates renderer and adds it to the DOM

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//The Box!

//BoxGeometry (makes a geometry)
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//Material to apply to the cube (green)
//var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
var material1 = new THREE.MeshPhongMaterial( { color: 0x00ffff} );
var material2 = new THREE.MeshPhongMaterial( { color: 0xffff00} );
//Applies material to BoxGeometry
const board = new THREE.Group();
for (let x=0; x<10; x++) {
    for (let z = 0; z < 10; z++) {
        let cube;
        if(z%2==0){
            cube = new THREE.Mesh(geometry, x%2 ==0 ? material1 : material2)
        }else{
            cube = new THREE.Mesh(geometry, x%2 ==0 ? material2 : material1)
        }
        cube.position.set(x,0,z);
        board.add(cube);
    }
}
//Adds cube to the scene
scene.add( board );

const light = new THREE.DirectionalLight( 0xffffff );
scene.add( light );

//Rendering

function render() {
    board.rotation.x += 0.01;
    board.rotation.y += 0.01;
    board.rotation.z += 0.01;
    renderer.render( scene, camera );
    requestAnimationFrame( render );
}
render();