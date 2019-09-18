console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// Challenge 1
fetch(imgUrl)
  .then(response => response.json())
  .then(function(json){
    const imgDiv = document.getElementById('dog-image-container')
    json["message"].forEach(function(url) {
      let newImg = document.createElement("img")
      newImg.src = url
      imgDiv.append(newImg)
    })
  })

// Challenge 2
fetch(breedUrl)
  .then(response => response.json())
  .then(function(json){
    const breedUl = document.getElementById('dog-breeds')
    for (const breed in json["message"]) {
      let newLi = document.createElement("li")
      newLi.innerText = breed
      breedUl.append(newLi)
    }
  })

// Challenge 3
const breedUl = document.getElementById('dog-breeds')
const breedClickHandler = function(){
  if (event.target.nodeName === "LI") {
    event.target.classList.add("blue")
  }
}

breedUl.addEventListener("click", breedClickHandler)

// Challenge 4
const breedDropdown = document.getElementById('breed-dropdown')
const breedDropdownHandler = function(){
  const letter = event.target.value
  breedUl.childNodes.forEach(function(li) {
    if (li.nodeName === "LI") {
      let firstLetter = li.innerText[0]
      if (firstLetter === letter) {
        li.classList.remove("hidden")
      } else {
        li.classList.add("hidden")
      }
    }
  })
}

breedDropdown.addEventListener("click", breedDropdownHandler)
