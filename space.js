/********************************************** Підготовчі роботи. Створюємо рендерер, сцену, світло, камеру   ***************************** */
//Робота буде складатися з двох частин
//Перша це модель Сонячної системи
//Друга це ракета
//Через 5 секунд після просмотру, ракета полетить у Космос

// створюємо рендер 
const renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer({ antialias: true }) : new THREE.CanvasRenderer()
//Задаємо колір рендереру
renderer.setClearColor(new THREE.Color(0x0b0b0b))
//Задаємо рендереру довжину та ширіну на весь екран
renderer.setSize(window.innerWidth, window.innerHeight)

// додаємо візуалізатор 
document.body.appendChild( renderer.domElement )

// створюємо камеру
const camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight, 0.1,1000)
// створюємо сцену
const scene = new THREE.Scene()

let controls = new THREE.TrackballControls( camera, renderer.domElement )


//Для завантаження текстури
const loader = new THREE.TextureLoader()
let step = 0
let rocketRadius = 30

//Додаємо світло
//Це світло імітує сонячне та світить з місця Сонця
const light = new THREE.PointLight(0xffffff)
light.position.set(0,0,0)
scene.add(light)

//Це світло сіре та світить на все зроблено, щоб на місцях, де сонце не світить
//Коритувач мав змогу все бачити, але у більш сірих відтінках
const light1 = new THREE.AmbientLight(0x595454)
light1.position.set(0,1000,0)
scene.add(light1)


/*******************************************  Починаємо створювати фігури. Перші - це планети моделі сонячної системи та Сонце  ************************ */

// додаємо сонце
const sunLight = new THREE.SphereGeometry(40, 50, 50)
//Додаємо текстуру Сонця
//Колір сонця не повинен залежати від світла, тому матеріал Basic
const sunLightMaterial = new THREE.MeshBasicMaterial({map: loader.load('images/sun.jpg'),})
const sunLightMesh = new THREE.Mesh(sunLight, sunLightMaterial)
sunLightMesh.position = new THREE.Vector3(0, 0, 0)
scene.add(sunLightMesh)

//додаємо Меркурій
const mercuryGeometry = new THREE.SphereGeometry(15, 50, 50)
//Додаємо текстуру Меркурію
const mercuryMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/mercury.jpeg'),})
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial)
scene.add(mercuryMesh)

//додаємо Венеру
const venusGeometry = new THREE.SphereGeometry(20, 50, 50)
//Додаємо текстуру Венери
const venusMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/venus.jpeg'),})
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial)
scene.add(venusMesh)

//додаємо Землю
const earthGeometry = new THREE.SphereGeometry(22, 50, 50)
//Додаємо текстуру Землі
const earthMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/earth.jpg'),})
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
scene.add(earthMesh)

//додаємо Луну
const moonGeometry = new THREE.SphereGeometry(6, 50, 50)
//Додаємо текстуру Луни
const moonMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/moon.jpeg'),})
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial)
scene.add(moonMesh)


//Щоб Луна крутилась разом з Землею, додаємо її до Землі
earthMesh.add(moonMesh)

//додаємо Марс
const marsGeometry = new THREE.SphereGeometry(22, 50, 50)
//Додаємо текстуру Марсу
const marsMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/mars.jpeg'),})
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial)
scene.add(marsMesh)

//додаємо Юпітер
const yupiterGeometry = new THREE.SphereGeometry(27, 50, 50)
//Додаємо текстуру Юпітеру
const yupiterMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/jupiter.jpg'),})
const yupiterMesh = new THREE.Mesh(yupiterGeometry, yupiterMaterial)
scene.add(yupiterMesh)

//додаємо Cатурн
const saturnGeometry = new THREE.SphereGeometry(27, 50, 50)
//Додаємо текстуру Сатурну
const saturnMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/saturn.jpg'),})
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial)
scene.add(saturnMesh)


//Додаємо кільця Сатурну
//Їх у нас буде 2 штуки
let geometry = new THREE.RingGeometry(34, 38, 32);
let material = new THREE.MeshBasicMaterial({
    color: 0x595454,
    side: THREE.DoubleSide,
    transparent: true
  });
const ring = new THREE.Mesh(geometry, material);
ring.rotation.x  = 1.5708

scene.add(ring)


const secondSaturnRinggeometry = new THREE.RingGeometry(43, 45, 32);

const secondSaturnRingmaterial = new THREE.MeshBasicMaterial({
    color: 0x65635e,
    side: THREE.DoubleSide,
    transparent: true
  });

const secondSaturnRing = new THREE.Mesh(secondSaturnRinggeometry, secondSaturnRingmaterial);
secondSaturnRing.rotation.x  = 1.5708

scene.add(secondSaturnRing)

//Додаємо Уран
const uranusGeometry = new THREE.SphereGeometry(25, 50, 50)
//Додаємо текстуру Урану
const uranusMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/uranus.jpg'),})
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial)
scene.add(uranusMesh)

//Додаэмо Кільця Урану
const ringUranusGeometry = new THREE.RingGeometry(34, 38, 32);
  const ringUranusMaterial = new THREE.MeshBasicMaterial({
    color: 0x96c5cd,
    side: THREE.DoubleSide,
    transparent: true
  });
const ringUranus = new THREE.Mesh(ringUranusGeometry, ringUranusMaterial);
// ringUranus.rotation.x  = 1.5708

scene.add(ringUranus)

//Додаємо Уран
const neptuneGeometry = new THREE.SphereGeometry(25, 50, 50)
//Додаємо текстуру Урану
const neptuneMaterial = new THREE.MeshPhongMaterial({map: loader.load('images/neptune.jpg'),})
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial)
scene.add(neptuneMesh)

//Додаємо кільця Урану
//Їх у нас буде 2 штуки
const neptuneRingGeometry = new THREE.RingGeometry(32, 34, 32);
  const neptuneRingMaterial = new THREE.MeshBasicMaterial({
    color: 0x2f3687,
    side: THREE.DoubleSide,
    transparent: true
  });
const neptuneRing = new THREE.Mesh(neptuneRingGeometry, neptuneRingMaterial);
neptuneRing.rotation.x  = 1.5708

scene.add(neptuneRing)


const secondneptuneRinggeometry = new THREE.RingGeometry(37, 39, 32);

const secondneptuneRingmaterial = new THREE.MeshBasicMaterial({
    color: 0x2f3687,
    side: THREE.DoubleSide,
    transparent: true
  });

  const secondneptuneRing = new THREE.Mesh(secondneptuneRinggeometry, secondneptuneRingmaterial);
secondneptuneRing.rotation.x  = -1.5708

scene.add(secondneptuneRing)

/************************************************************Тепер створюємо ракету******************** */

//Верхня частина ракети
geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius, 50, 30 );
material = new THREE.MeshPhongMaterial( {color: 0xb6b7bb} );
const mainPart = new THREE.Mesh( geometry, material );
mainPart.position.x = 60;
mainPart.position.y = 100;
mainPart.position.z = 0;
//Сюди ми будемо додавати усі частини ракети, щоб вона мала змогу рухатись самостійно
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

//Створення двигуна
//Досить багато коду, винесемо в окремі функції
createEngine()

//Ще одна основна частина ракети
geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius,120, 30 );
material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const secondPart = new THREE.Mesh( geometry, material );
secondPart.position.x = 0;
secondPart.position.y = -85;
secondPart.position.z = 0;
mainPart.add( secondPart );

//Це вже частина ракети, яка повинна відокремитися з прильотом у Космос
geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius,90, 30 );
const lastPart = new THREE.Mesh( geometry, material );
lastPart.position.x = 0;
lastPart.position.y = -220;
lastPart.position.z = 0;
mainPart.add( lastPart );


//Кінець основної частини ракети
geometry = new THREE.CylinderGeometry( rocketRadius, rocketRadius,30, 30 );
material = new THREE.MeshPhongMaterial( {color: 0x000000} );
const blackPart = new THREE.Mesh( geometry, material );
blackPart.position.x = 0;
blackPart.position.y = -280;
blackPart.position.z = 0;
mainPart.add( blackPart );


//Створюємо іллюмінатори
geometry = new THREE.SphereGeometry( rocketRadius/2, 32, 32 );
material = new THREE.MeshBasicMaterial( {color: 0x000000} );
const illuminator1 = new THREE.Mesh( geometry, material );
illuminator1.position.y = -55
illuminator1.position.x = 20
mainPart.add(illuminator1)            

const illuminator2 = new THREE.Mesh( geometry, material );
illuminator2.position.y = -55
illuminator2.position.x = -20
mainPart.add(illuminator2) 

mainPart.rotation.x  = 1.5708
mainPart.rotation.y  = 1.5708
mainPart.rotation.z  = 2.508

animateRocket()


//Додаємо позицію камери достатньо далеко, щоб усе можна було побачити
camera.position.x = 0
camera.position.y = 1000
camera.position.z = 0
camera.lookAt(scene.position)

renderScene()



//Функція для відображення
function renderScene() {

    controls.update()
    //Функція для того, щоб планети крутились навволо Сонця
    rotateAll()
    requestAnimationFrame(renderScene)
    TWEEN.update()

    //Рендерінг
    renderer.render(scene, camera)
}



/****************************************** Функції для побудови сонячної системи та ракети  ********************/

//Функція для анімації ракети
function animateRocket(){

    //Задаємо позицію
    let mainPartPosition = { y: mainPart.position.y, z: mainPart.position.z }	
    let mainPartTarget = {
        y : 0,
        z: -1000
    }
         

    //Створюємо анімацію 
    let mainPartTween = new TWEEN.Tween(mainPartPosition).to(mainPartTarget, 2000)
    mainPartTween.easing(TWEEN.Easing.Quadratic.In)

    //Чекаємо 5 секунд, щоб користувач роздивився ракету
    setTimeout( function (){
        mainPartTween.start()
        mainPartTween.onUpdate(function(){
            mainPart.position.z = mainPartPosition.z
            mainPart.position.y = mainPartPosition.y

        })

    }, 5000);
}


//Функція для кручіння планети
//planet -об'єкт, який будемо крутити
//selfRotation - швидкість обертів навколо своєї осі
//rotationSpeed - коефіціент для вирахування швидкості, чим він більший, тим менше швидкість
//distance - відстань планети від об'єкта навколо якого крутиться
function rotatePlanet(planet, selfRotation, rotationSpeed, distance){
    planet.rotation.y -= selfRotation
    planet.position.z = distance * (Math.sin(step/ rotationSpeed))
    planet.position.x = distance * (Math.cos(step/ rotationSpeed))

}

//Функція для кручіння усіх планет
function rotateAll(){

        //Для кожної планети та супутника налаштуємо кручіння
        step += 0.03	
        rotatePlanet(mercuryMesh, 0.009, 2, 70)
        rotatePlanet(venusMesh, 0.005, 4, 120)
        rotatePlanet(earthMesh, 0.007, 4.5, 180)
        rotatePlanet(moonMesh, 0.007, 4.5, 30)
        rotatePlanet(marsMesh, 0.007, 5.5, 250)
        rotatePlanet(yupiterMesh, 0.01, 6, 330)
        rotatePlanet(saturnMesh, 0.015, 7, 420)
        rotatePlanet(ring, 0, 7, 420)
        rotatePlanet(secondSaturnRing, 0, 7, 420)
        rotatePlanet(uranusMesh, 0.01, 8, 540)
        rotatePlanet(ringUranus, 0, 8, 540)
        rotatePlanet(neptuneMesh, 0.01, 9, 660)
        rotatePlanet(neptuneRing, 0, 9, 660)
        rotatePlanet(secondneptuneRing, 0, 9, 660)
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


