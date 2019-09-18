console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breedsUl = document.querySelector("#dog-breeds");
let filterDropdown = document.querySelector("#breed-dropdown")



document.addEventListener("DOMContentLoaded", function() {

  // Fetch and display dogs images
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(function(json) {
      let imgUrls = json.message;
      // console.log(json);
      for (const url of imgUrls) {
        let newDogImg = document.createElement("img")
        newDogImg.src = url
        let imgContainer = document.querySelector("#dog-image-container")
        imgContainer.append(newDogImg)
      };
    });

  // Fetch and display dog breeds
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(function(json) {
      let breedsHash = json.message;
      for (const breedKey in breedsHash) {
        for (const breed of breedsHash[breedKey]) {
          let newBreedLi = document.createElement("li");
          newBreedLi.innerText = breed;
          breedsUl.append(newBreedLi);
        };
      };
  });

  // Change color of breed text on click
  breedsUl.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.style.color = "blue";
    };
  });

  // Filter breeds by chosen starting letter in dropdown
  filterDropdown.addEventListener("change", function(e) {
    e.preventDefault();
    let letter = e.target.value;
    let lis = breedsUl.querySelectorAll("li");
    for (const li of lis) {
      li.innerText.startsWith(letter) ? li.style.display = "list-item" : li.style.display = "none";
    };
  });

});
