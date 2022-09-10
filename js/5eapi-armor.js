// Get JSON files
async function populate(){
    // Get JSON File
    const requestURL = 'https://api.open5e.com/armor'
    const request = new Request(requestURL)
    const response = await fetch(request)
    const armor = await response.json()
    var armorResults = armor.results

    
    for(let x=0; x<armorResults.length; x++){
        // Remove properties
        delete armorResults[x]['slug']
        delete armorResults[x]['document__slug']
        delete armorResults[x]['document__title']
        delete armorResults[x]['document__license_url']
        delete armorResults[x]['weight']

        //Rename Keys
        armorResults[x]['Name'] = armorResults[x]['name']
        delete armorResults[x]['name']

        armorResults[x]['Category'] = armorResults[x]['category']
        delete armorResults[x]['category']

        armorResults[x]['AC'] = armorResults[x]['ac_string']
        delete armorResults[x]['ac_string']

        armorResults[x]['Strength Requirement'] = armorResults[x]['strength_requirement']
        delete armorResults[x]['strength_requirement']

        armorResults[x]['Cost'] = armorResults[x]['cost']
        delete armorResults[x]['cost']
        
        armorResults[x]['Steath Disadvantage'] = armorResults[x]['stealth_disadvantage']
        delete armorResults[x]['stealth_disadvantage']

        // Adjust null / false values
        if (armorResults[x]['Strength Requirement'] === null){
            armorResults[x]['Strength Requirement'] = "None"
        }
        
        if (armorResults[x]['Steath Disadvantage'] === false){
            armorResults[x]['Steath Disadvantage'] = "No"
        } else{
            armorResults[x]['Steath Disadvantage'] = "Yes"
        }
    }

    
    
    // Get objects in array
    for(var p of Object.values(armorResults)){
            pairs = p
            populateArmorDetails(pairs)
    }

    // Get Keys of objects in array
    for ( var k of Object.keys(pairs)){
            var keys = k
            populateHeaders(keys)
    }
   
    // Get Values of objects in array
    // for (var v of Object.values(pairs)){
    //     values = v
    // }
            
}

function populateArmorDetails(obj){
    const id = document.getElementById('item-info')

    for(var property in obj){
        var mySpan = document.createElement('span')
        mySpan.textContent = mySpan.textContent + " " + (obj[property])
        id.appendChild(mySpan)
        mySpan.classList.add('item-details')
    }   
}

function populateHeaders(obj){
    const id = document.getElementById('item-titles')
    var mySpan = document.createElement('span')
    mySpan.textContent = obj
    id.appendChild(mySpan)
    mySpan.classList.add('item-headers')
}

populate()