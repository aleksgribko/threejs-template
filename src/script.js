// Option 1: Import the entire three.js core library.
import * as THREE from 'three';
import './styles.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


// Canvas 

const canvas = document.querySelector('canvas.webgl')
console.log(canvas)
// Scene 

const scene = new THREE.Scene();

/**
 * Sizes
 */

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
} 
/**
 * Camera
 */

const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 5;
scene.add( camera );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

renderer.setSize( sizes.width, sizes.height );
renderer.setPixelRatio(Ratio(Math.min(window.devicePixelRatio, 2)))

document.body.appendChild( renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

