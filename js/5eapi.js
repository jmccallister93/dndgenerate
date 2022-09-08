// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.dnd5eapi.co/api/spells/', true)

request.onload = function () {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    // data = data.results;
    
    if (request.status >= 200 && request.status < 400) {
        data.results.forEach(spell => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card-test')

            const h1 = document.createElement('h1')
            h1.textContent = spell.name
            
            const p =document.createElement('p')
            // spell.url = spell.url.substrin(0,200)
            p.textContent = `${spell.url}`
            
            container.appendChild(card)

            card.appendChild(h1)
            card.appendChild(p)
            
        });
      } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
      }
}

// Send request
request.send()


const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container-test')
app.appendChild(container)
