function getValue(hashmap, key){
    let value = hashmap[key];
    return value;
}

document.addEventListener("DOMContentLoaded", function(){   

    //grab the button

  let library = fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json()) 
    .then(resObj => {

        let imgDiv = document.querySelector("#dog-image-container");
        let ulTag = document.createElement("ul");
        imgDiv.append(ulTag);

        resObj.message.forEach(function(img){
            let imageLi = document.createElement("li");
            let imgTag = document.createElement("img");
            imgTag.src = img;

            ulTag.append(imageLi);
            imageLi.append(imgTag);
        })

    })

    let library2 = fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(resObj => {
    
            let ulTag = document.querySelector("#dog-breeds");
            let breedKeys = Object.keys(resObj.message); 
            // let values = breedKeys.map(function(v) {
                //     return resObj.message[v]
                // })
                
                
                //ask how to retrieve the values 
            breedKeys.forEach(function(breed){
            let breedLi = document.createElement("li");
                if(resObj.message[breed].length > 0){
                    resObj.message[breed].forEach(function(type){
                    let typeLi = document.createElement("li");
                    typeLi.innerText = type;
                    breedLi.append(typeLi);
                    })
                }
                    
            breedLi.innerText = breed;
            ulTag.append(breedLi);
            })
        })

    
})