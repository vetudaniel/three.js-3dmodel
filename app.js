let container;
let camera;
let renderer;
let scene;
let house;


function init(){
    container = document.querySelector('.scene');

    scene = new THREE.Scene();

    const fov = 5;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 10;
    const far = 800;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-1, 0.6,20);

    const ambient = new THREE.AmbientLight(0x404040,2);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 1.8);
    light.position.set(1000, 1000,100);
    scene.add(light)

    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function(gltf) {
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        animate();
    })
}

function animate(){
    requestAnimationFrame(animate)
    house.rotation.z +=0.002;
    renderer.render(scene, camera);
}

init()

function onWindowResize(){
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize)


function myFunction(x) {
    x.classList.toggle("change");
  }