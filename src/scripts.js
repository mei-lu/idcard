const card = document.getElementById("card")
const name = document.querySelector(".name")
const age = document.querySelector(".age")
const gender = document.querySelector(".gender")
const submit = document.querySelector(".submit")
const profile = document.querySelector(".pfp")
const country = document.querySelector(".country")

window.onload = function() {
    this.fetchAPI()
}

submit.onclick = function() {
    fetchAPI()
}

function fetchAPI() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => setInfo(data))
}

function setInfo(data) {
    //Set name
    const nameGen = `<p>${data.results[0].name.first} ${data.results[0].name.last}</p>`
    name.innerHTML = nameGen
    //Set gender
    const genderGen = `<p>${data.results[0].gender}</p>`
    gender.innerHTML = genderGen
    //Set age
    const ageGen = data.results[0].dob.age
    age.innerHTML = `<p>${ageGen}</p>`
    console.log(data.results[0])
    //Set profile picture
    const pictureGen = data.results[0].picture.large
    profile.src = pictureGen
    //Set country
    const countryGen = data.results[0].location.country
    country.innerHTML = `<p>${countryGen}</p>`
}