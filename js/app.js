const titleElement = document.getElementById('main-title')
const pElement = document.querySelector('.cool')
const imgElement = document.getElementById('main-img')
const linkElement = document.querySelector('a')

const commentElements = document.querySelectorAll('.comment')

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

titleElement.style.textAlign = 'center'
titleElement.style.backgroundColor = 'rgb(100, 100, 300)'
titleElement.style.color = 'rgb(150, 250, 500)'

pElement.innerHTML = "Comments for <strong>Today</strong>"

imgElement.setAttribute(
  "src",
  `https://picsum.photos/${getRandomInt(200, 800)}`
)
imgElement.setAttribute("alt", "A random placeholder image")

linkElement.setAttribute('href', 'https://www.google.com')

for (let commentElement of commentElements) {
  commentElement.style.fontSize = '30px'
}


console.dir(titleElement)
console.log(pElement)
console.log(imgElement)
console.log(linkElement)
console.log(commentElements)