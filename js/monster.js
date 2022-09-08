 // Scroll to a certain element on click
var title = document.getElementsByClassName('content-title-1')[0];
title.addEventListener('click', function (event) {
    document.querySelector('.content-display').scrollIntoView({ 
    behavior: 'smooth' 
  });
 });

document.querySelectorAll('.accordian__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordianContent = button.nextElementSibling;

        button.classList.toggle('accordian__button--active');
    })
})

// Get form data
var monsterName = document.getElementById("monster-name");
var displayName = document.getElementById("name-display");
monsterName.addEventListener("input", (e) => {
    displayName.innerText = monsterName.value;
})

var monsterType = document.getElementById("monster-type");
var displayType = document.getElementById("type-display");
monsterType.addEventListener("change", (e) => {
    var arr = monsterType.value.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var capArr = arr.join(" ");
    displayType.innerText = capArr;
})

var monsterSize = document.getElementById("monster-size");
var displaySize = document.getElementById("size-display");
monsterSize.addEventListener("change", (e) => {
    var arr = monsterSize.value.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var capArr = arr.join(" ");
    displaySize.innerText = capArr;
})

var monsterAlignment = document.getElementById("monster-alignment");
var displayAlignment = document.getElementById("alignment-display");
monsterAlignment.addEventListener("change", (e) => {
    var arr = monsterAlignment.value.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var capArr = arr.join(" ");
    displayAlignment.innerText = capArr;
})

var monsterAC = document.getElementById("monster-ac");
var displayAC = document.getElementById("ac-display");
monsterAC.addEventListener("change", (e) => {
    displayAC.innerText = monsterAC.value;
})


var monsterACType = document.getElementById("monster-ac-type");
var displayACType = document.getElementById("ac-type-display");
monsterACType.addEventListener("change", (e) => {
    var arr = monsterACType.value.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    var capArr = arr.join(" ");
    displayACType.innerText = capArr;
})

// var monsterShield = document.getElementById("shield");
// var displayShield = document.getElementById("shield-display");
// monsterShield.addEventListener("change", (e) => {
//     if (e.target.checked){
//         displayShield.innerText = "Yes";
//     } else{
//         displayShield.innerText = "None";
//     }
// })

var monsterHP = document.getElementById("monster-hp");
var displayHP = document.getElementById("hp-display");
monsterHP.addEventListener("change", (e) => {
    displayHP.innerText = monsterHP.value;
})

var monsterSpeed = document.getElementById("speed");
var displaySpeed = document.getElementById("speed-display");
monsterSpeed.addEventListener("change", (e) => {
    displaySpeed.innerText = monsterSpeed.value;
})

var monsterBurrow = document.getElementById("burrow-speed");
var displayBurrow = document.getElementById("burrow-display");
monsterBurrow.addEventListener("change", (e) => {
    displayBurrow.innerText = monsterBurrow.value;
})

var monsterClimb = document.getElementById("climb-speed");
var displayClimb = document.getElementById("climb-display");
monsterClimb.addEventListener("change", (e) => {
    displayClimb.innerText = monsterClimb.value;
})

var monsterFly = document.getElementById("fly-speed");
var displayFly = document.getElementById("fly-display");
monsterFly.addEventListener("change", (e) => {
    displayFly.innerText = monsterFly.value;
})

var monsterSwim = document.getElementById("swim-speed");
var displaySwim = document.getElementById("swim-display");
monsterSwim.addEventListener("change", (e) => {
    displaySwim.innerText = monsterSwim.value;
})

var monsterStr = document.getElementById("monster-str");
var displayStr = document.getElementById("str-display");
monsterStr.addEventListener("change", (e) => {
    displayStr.innerText = monsterStr.value;
})

var monsterDex = document.getElementById("monster-dex");
var displayDex = document.getElementById("dex-display");
monsterDex.addEventListener("change", (e) => {
    displayDex.innerText = monsterDex.value;
})

var monsterCon = document.getElementById("monster-con");
var displayCon = document.getElementById("con-display");
monsterCon.addEventListener("change", (e) => {
    displayCon.innerText = monsterCon.value;
})

var monsterInt = document.getElementById("monster-int");
var displayInt = document.getElementById("int-display");
monsterInt.addEventListener("change", (e) => {
    displayInt.innerText = monsterInt.value;
})

var monsterWis = document.getElementById("monster-wis");
var displayWis = document.getElementById("wis-display");
monsterWis.addEventListener("change", (e) => {
    displayWis.innerText = monsterWis.value;
})

var monsterCha = document.getElementById("monster-cha");
var displayCha = document.getElementById("cha-display");
monsterCha.addEventListener("change", (e) => {
    displayCha.innerText = monsterCha.value;
})
