// var monsterForm = document.querySelector("#monster_form");

// monsterForm.addEventListener('change', (event) => {
    
//     var customTypeInput = document.createElement("input");
//     customTypeInput.setAttribute('id',"custom_monster_type");

//     var monsterType = document.getElementById("monster_type").value;

//     if(monsterType === 'custom' ){
//         monsterForm.appendChild(customTypeInput);
//     } 
//     else if(monsterType !== 'custom') {
//         document.getElementById('custom_monster_type').remove();
//     }
// })

// Button collapse
// var collapseBtn = document.getElementsByClassName("collapsible");

// var i;

// for (i = 0; i < collapseBtn.length; i++) {
//   collapseBtn[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//         content.style.display = "none";
//     } else {
//         content.style.display = "block";
//     }
//     const btnText = this.textContent;
//     if (this.classList.contains("active")){
//         this.textContent = "Hide"
//     } else{
//         this.textContent = btnText;
//     }
    
//   });
// }


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

