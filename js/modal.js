// Get the modal
var modal = document.getElementById("equipment-modal");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var items = document.getElementsByClassName('.item-category-content')

document.querySelectorAll('.item-category-button').forEach(button => {
  button.addEventListener('click', () => {
      const categoryContent = button.nextElementSibling;
      button.classList.toggle('.item-category--active');
      
      // if (items.style.display === "block"){
      //   items.style.display ="none";
      // } else{
      //   items.style.display="block";
      // }
  })
})
