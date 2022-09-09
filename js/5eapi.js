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

    console.log(armorName)

    
}

// function populateArmorName(obj){
//     const armorName = document.getElementById('root')
//     const myH1 = document.createElement('h1')
//     myH1.textContent = obj.results['name'] 
//     armorName.appendChild(myH1)}


// populateArmorName(armor)

populate()