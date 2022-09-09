// Get JSON files
async function populate(){
    const requestURL = 'https://api.open5e.com/armor'
    const request = new Request(requestURL)
    const response = await fetch(request)
    const armor = await response.json()
    var armorResults = armor.results
    var armorItems = []

    // console.log(armorResults[0].name, armorResults[0].cost)
    for(let x=0; x<armorResults.length; x++){
        delete armorResults[x]['slug']
        delete armorResults[x]['document__slug']
        delete armorResults[x]['document__title']
        delete armorResults[x]['document__license_url']
    }

    console.log(armorResults[0])

    armorResults.forEach((item) => {
        armorItems.push(item.name, item.cost)
    })

    populateArmorName(armorItems)
}


function populateArmorName(obj){
    const namePlaceholder = document.getElementById('root')

    for(let i=0; i < obj.length; i++){
        var mySpan = document.createElement('span')
        mySpan.textContent = obj[i]
        namePlaceholder.appendChild(mySpan)
        mySpan.classList.add('test-span')
    }
    
    
}


// populateArmorName(armor)

populate()