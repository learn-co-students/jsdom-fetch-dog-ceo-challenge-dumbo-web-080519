//console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  let imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  let breedUrl = "https://dog.ceo/api/breeds/list/all"


  function fetchDogs(url) {
    let dogImg =
    fetch(imgUrl)
    .then(res => res.json())
    .then(resObj => handleDogImages(resObj))
  }

  function fetchBreeds(url) {
    fetch(breedUrl)
    .then(res => res.json())
    .then(resObj => handleBreeds(resObj))
  }

  function handleBreeds(obj) {
    let breedsUl = document.querySelector("#dog-breeds")
    let breedsObj = obj.message
    for (var key in breedsObj) {
      let breedsli = document.createElement("li")
      breedsli.innerText = `${key}  ${breedsObj[key]}`
      breedsUl.append(breedsli)
    }
  }

function changeBreedColor(){
  addEventListener("click", function(evt) {
    if (evt.target.tagName === "LI") {
      evt.target.style.color = "red"
    }

  })
}

  function handleDogImages(obj) {
    //set outside the loop because we want a single Ul
    // and if i call .message on the object it will return an array
    // in this instance. In the future i may have to use for .. in
    let urlArray = obj.message
    let dogUl = document.querySelector("#dog-breeds")
    urlArray.forEach(function(url) {
      let dogLi = document.createElement("li")
      //create an image tag because were working with images
      let dogImage = document.createElement("img")
      // images have a source so we need to set the src.
      dogImage.src = url
      dogLi.append(dogImage)
      dogUl.append(dogLi)

    })
  }









  // You must call function within addEventListener when you write
  // out function
  // Dont need to call handleDogImages because its being run in
  // fetchDogs and fetchDogs is already being run
  fetchDogs(imgUrl)
  fetchBreeds(breedUrl)
  changeBreedColor()





})
