// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.open5e.com/armor', true)

request.onload = function () {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response);
        
        data.results.forEach(armors => {
          var armor = armors.name
          var armorName = []
          armorName.push(armor)
          var list = document.getElementById('root')
          list.append(armorName)  
        });
    }

// Send request
request.send()



// var push = document.getElementsByClassName('.push-here')
// push.appendChild(armor)