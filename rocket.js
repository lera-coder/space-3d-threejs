// створюємо рендер 
const renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer({ antialias: true }) : new THREE.CanvasRenderer()
//Задаємо колір рендереру
renderer.setClearColor(new THREE.Color(0x595454))
//Задаємо рендереру довжину та ширіну на весь екран
renderer.setSize(window.innerWidth, window.innerHeight)

// додаємо візуалізатор 
document.body.appendChild( renderer.domElement )

// створюємо камеру
const camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight, 0.1,1000)
// створюємо сцену
const scene = new THREE.Scene()

const controls = new THREE.TrackballControls( camera, renderer.domElement )

const rocketRadius = 30
let i =0
//Для завантаження текстури
const loader = new THREE.TextureLoader()


// додаємо освітлення ambient lighting
const light = new THREE.PointLight(0xffffff)
light.position.set(300,100,-200)
scene.add(light)

//Верхня частина ракети
let geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius, 50, 30 );
let material = new THREE.MeshPhongMaterial( {color: 0xb6b7bb} );
const mainPart = new THREE.Mesh( geometry, material );
mainPart.position.x = 60;
mainPart.position.y = 100;
mainPart.position.z = 0;
scene.add( mainPart );

//Скінечник ракети
geometry = new THREE.SphereGeometry( rocketRadius, 32, 32 );
const sphere = new THREE.Mesh( geometry, material );
sphere.position.y = 25
mainPart.add(sphere)

//Біла частина ракети
geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius, 30, 30 );
const prePart = new THREE.Mesh( geometry, material );
prePart.position.x = 0;
prePart.position.y = -160;
prePart.position.z = 0;
mainPart.add( prePart );

material = new THREE.MeshPhongMaterial( {color: 0xb6b7bb} );

createEngine()

geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius,120, 30 );
material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const secondPart = new THREE.Mesh( geometry, material );
secondPart.position.x = 0;
secondPart.position.y = -85;
secondPart.position.z = 0;
mainPart.add( secondPart );

geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius,90, 30 );
const lastPart = new THREE.Mesh( geometry, material );
lastPart.position.x = 0;
lastPart.position.y = -220;
lastPart.position.z = 0;
mainPart.add( lastPart );



geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius,30, 30 );
material = new THREE.MeshPhongMaterial( {color: 0x000000} );
const blackPart = new THREE.Mesh( geometry, material );
blackPart.position.x = 0;
blackPart.position.y = -280;
blackPart.position.z = 0;
mainPart.add( blackPart );



geometry = new THREE.SphereGeometry( rocketRadius/2, 32, 32 );
material = new THREE.MeshBasicMaterial( {color: 0x000000} );
const illuminator1 = new THREE.Mesh( geometry, material );
illuminator1.position.y = -55
illuminator1.position.x = 17
mainPart.add(illuminator1)            

const illuminator2 = new THREE.Mesh( geometry, material );
illuminator2.position.y = -55
illuminator2.position.x = -17
mainPart.add(illuminator2) 



//Додаємо позицію камери достатньо далеко, щоб усе можна було побачити
camera.position.x = 60
camera.position.y = -600
camera.position.z = 20
camera.lookAt(scene.position)

renderScene()


//Функція для відображення
function renderScene() {

    controls.update()

   // console.log(camera.position)


    requestAnimationFrame(renderScene)

    renderer.render(scene, camera)
}

//Функція для створення двигуна ракети
function createEngine(){
    //Задаємо матеріал для усього двигуна окрім нижньої чорної частини
    material = new THREE.MeshPhongMaterial( {color: 0xb6b7bb} );

    createMiddleEngine()
    createTopEngine()
    createBottomEngine()

}



//Функція для створення основних циліндрів двигуна ракети
function createMiddleEngine(){

    //задаємо геометрію для усіх циліндрів
    geometry = new THREE.CylinderGeometry( rocketRadius/2.5, rocketRadius/2.5,80, 30 );

    //Створюємо меши з своєю позицією та додаємо до ракети
    const engine1 = new THREE.Mesh( geometry, material );
    engine1.position.x = 30;
    engine1.position.y = -240;
    engine1.position.z = 0;
    mainPart.add( engine1 )

    const engine2 = new THREE.Mesh( geometry, material );
    engine2.position.x = 15;
    engine2.position.y = -240;
    engine2.position.z = 25;
    mainPart.add( engine2 )

    const engine3 = new THREE.Mesh( geometry, material );
    engine3.position.x = 15;
    engine3.position.y = -240;
    engine3.position.z = -30;
    mainPart.add( engine3 )

    const engine4 = new THREE.Mesh( geometry, material );
    engine4.position.x = -20;
    engine4.position.y = -240;
    engine4.position.z = -25;
    mainPart.add( engine4 )

    const engine5 = new THREE.Mesh( geometry, material );
    engine5.position.x = -30;
    engine5.position.y = -240;
    engine5.position.z = 5;
    mainPart.add( engine5 )

    const engine6 = new THREE.Mesh( geometry, material );
    engine6.position.x = -10;
    engine6.position.y = -240;
    engine6.position.z = 30;
    mainPart.add( engine6 )
}




//Створюємо верхню частину ракети
function createTopEngine(){

    //Задаємо геометрію для верхньої частини двигуна ракети
    geometry = new THREE.CylinderGeometry( 1, rocketRadius/2.5, 20, 30 );

    //Створюємо верхні частини двигуна з особливою позицією
    const enginetop1 = new THREE.Mesh( geometry, material );
    enginetop1.position.x = 30;
    enginetop1.position.y = -190;
    enginetop1.position.z = 0;
    mainPart.add( enginetop1 )


    const enginetop2 = new THREE.Mesh( geometry, material );
    enginetop2.position.x = 15;
    enginetop2.position.y = -190;
    enginetop2.position.z = 25;
    mainPart.add( enginetop2 )


    const enginetop3 = new THREE.Mesh( geometry, material );
    enginetop3.position.x = 15;
    enginetop3.position.y = -190;
    enginetop3.position.z = -30;
    mainPart.add( enginetop3 )

    const enginetop4 = new THREE.Mesh( geometry, material );
    enginetop4.position.x = -20;
    enginetop4.position.y = -190;
    enginetop4.position.z = -25;
    mainPart.add( enginetop4 )

    const enginetop5 = new THREE.Mesh( geometry, material );
    enginetop5.position.x = -30;
    enginetop5.position.y = -190;
    enginetop5.position.z = 5;
    mainPart.add( enginetop5 )

    const enginetop6 = new THREE.Mesh( geometry, material );
    enginetop6.position.x = -10;
    enginetop6.position.y = -190;
    enginetop6.position.z = 30;
    mainPart.add( enginetop6 )

}



//Функція для створення нижньої частини ракети
function createBottomEngine(){

    //Задаємо матеріал та геометрію для нижньої частини двигуна
    material = new THREE.MeshPhongMaterial( {color: 0x000000} );
    geometry = new THREE.CylinderGeometry( rocketRadius/2.5, rocketRadius/2.5, 20, 30 );

    //Сторюємо нижню частину з особливою позицією на кожній
    const enginebottom1 = new THREE.Mesh( geometry, material );
    enginebottom1.position.x = 30;
    enginebottom1.position.y = -290;
    enginebottom1.position.z = 0;
    mainPart.add( enginebottom1 )

    const enginebottom2 = new THREE.Mesh( geometry, material );
    enginebottom2.position.x = 15;
    enginebottom2.position.y = -290;
    enginebottom2.position.z = 25;
    mainPart.add( enginebottom2 )

    const enginebottom3 = new THREE.Mesh( geometry, material );
    enginebottom3.position.x = 15;
    enginebottom3.position.y = -290;
    enginebottom3.position.z = -30;
    mainPart.add( enginebottom3 )

    const enginebottom4 = new THREE.Mesh( geometry, material );
    enginebottom4.position.x = -20;
    enginebottom4.position.y = -290;
    enginebottom4.position.z = -25;
    mainPart.add( enginebottom4 )

    const enginebottom5 = new THREE.Mesh( geometry, material );
    enginebottom5.position.x = -30;
    enginebottom5.position.y = -290;
    enginebottom5.position.z = 5;
    mainPart.add( enginebottom5 )

    const enginebottom6 = new THREE.Mesh( geometry, material );
    enginebottom6.position.x = -10;
    enginebottom6.position.y = -290;
    enginebottom6.position.z = 30;
    mainPart.add( enginebottom6 )

}
