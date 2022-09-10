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

// Create show/hide tabs based on click event
var items = document.getElementById('item-category-content')

document.querySelectorAll('.item-category-tab').forEach(tab => {
  tab.addEventListener('click', () => {
      const categoryContent = tab.nextElementSibling;
      tab.classList.toggle('item-category-tab--active');
      items.classList.toggle('item-category-content--show')  
  })
})



