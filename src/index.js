console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
	console.log("All elements are loaded")
	const breedUrl = 'https://dog.ceo/api/breeds/list/all'
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

	function slapDogs(fetchObj){
		let dogUl = document.querySelector("#dog-ul")
		let dogLi = document.createElement("li")
		let dogImg = document.createElement("img")
		dogImg.src = fetchObj
		dogLi.append(dogImg)
		dogUl.append(dogLi)

	}

	function fetchDogs(){
		return fetch(imgUrl)
		.then(res => res.json())
		.then(resObj => {
			console.log(resObj)
			// debugger
			let urlArray = resObj.message
			urlArray.forEach(slapDogs)
			
		})

	}

	function slapBreeds(fetchBreeds){
		let breedUl = document.querySelector("#breed-ul")
		let breedLi = document.createElement("li")
		breedLi.append(fetchBreeds)
		breedUl.append(breedLi)
	}

	function fetchBreeds(){
		return fetch(breedUrl)
		.then(res => res.json())
		.then(resObj => {
			console.log(resObj)
			// debugger
			let breedArray = Object.keys(resObj.message)
			breedArray.forEach(slapBreeds)
		})
	}





	fetchDogs()
	fetchBreeds()
})	

function changeColor(){}
let breedUl = document.querySelector("#breed-ul")

breedUl.addEventListener("click", function(evt){
	if (evt.target.tagName === "LI"){
		evt.target.style.color = "red"
	}
})

function sortBreeds(letter){
	allBreeds = document.querySelectorAll23
}





