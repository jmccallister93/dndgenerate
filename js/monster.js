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
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

    for(let j=0; j<coll.length;j++){
        var btnValue = coll[j].textContent;
        if(btnValue === "Show"){
            btnValue = "Hide";
            coll[j].textContent = btnValue;
        } else if (btnValue === "Hide"){
            btnValue = "Show";
            coll[j].textContent = btnValue;
        }
    }
   
  });
}

