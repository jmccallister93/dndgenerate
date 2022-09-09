// Get JSON files
async function populate(){
    const requestURL = 'https://api.open5e.com/armor'
    const request = new Request(requestURL)
    const response = await fetch(request)
    const armor = await response.json()
    var armorResults = armor.results
    var armorName = []

    armorResults.forEach(name => {
        armorName.push(name.name)
    })

    // console.log(armorName.length)
    populateArmorName(armorName)
}


function populateArmorName(obj){
    const namePlaceholder = document.getElementById('root')

    for(let i=0; i < obj.length; i++){
        var mySpan = document.createElement('span')
        mySpan.textContent = obj[i]
        namePlaceholder.appendChild(mySpan)
    }
    
    
}


// populateArmorName(armor)

populate()