console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function(){
let dogBreedUl = document.getElementById("dog-breeds")
let filterDropdown = document.querySelector("#breed-dropdown")

    // Fetch and display dogs images

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(resObj => {

      let dogUl = document.createElement("ul")
      resObj.message.forEach(function(dog){
        let dogLi = document.createElement("li")
        let dogImg = document.createElement("img")
        let dogImgContainer = document.getElementById('dog-image-container')


        dogImg.src = dog

        dogLi.append(dogImg)
        dogUl.append(dogLi)
        dogImgContainer.append(dogUl)

      })
    })

     // Fetch and display dog breeds ?????

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(resObj => {
      let dogHash = resObj.message
        Object.keys(dogHash).forEach(function(breed){
        let dogBreedLi = document.createElement("li")
        dogBreedLi.innerText = breed
        dogBreedUl.append(dogBreedLi)

      })
    })

     // Change color of breed text on click

      dogBreedUl.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.style.color = "blue";
      };
    });

    // Filter breeds by chosen starting letter in dropdown
 filterDropdown.addEventListener("change", function(e) {
   e.preventDefault();
   let letter = e.target.value;
   let lis = dogBreedUl.querySelectorAll("li");
   for (const li of lis) {
     li.innerText.startsWith(letter) ? li.style.display = "list-item" : li.style.display = "none";
   };
 });
})
