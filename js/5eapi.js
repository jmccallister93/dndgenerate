// Get JSON files
async function populate(){
    const requestURL = 'https://api.open5e.com/armor'
    const request = new Request(requestURL)
    const response = await fetch(request)
    const armor = await response.json()
    var armorResults = armor.results
    var armorItems = []
    var armorItemsObj = {}

    
    for(let x=0; x<armorResults.length; x++){
        delete armorResults[x]['slug']
        delete armorResults[x]['document__slug']
        delete armorResults[x]['document__title']
        delete armorResults[x]['document__license_url']
        // delete armorResults[x][]
    }

    
 
    for(var p of Object.values(armorResults)){
            pairs = p
            console.log(pairs)
            populateArmorName(pairs)
           
            for ( var k of Object.keys(pairs)){
                keys = k
                // console.log(keys)
                
            }
            for (var v of Object.values(pairs)){
                values = v
                // console.log(values)
            }
        }
}

function populateArmorName(obj){
    const namePlaceholder = document.getElementById('root')

    for(var property in obj){
        var mySpan = document.createElement('span')
        mySpan.textContent = mySpan.textContent + " " + (obj[property])
        namePlaceholder.appendChild(mySpan)
        mySpan.classList.add('test-span')
    }   
}


// populateArmorName(armor)

populate()