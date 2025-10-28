const titleElement = document.getElementById('main-title')
const pElement = document.querySelector('.cool')
const imgElement = document.getElementById('main-img')

titleElement.style.textAlign = 'center'
titleElement.style.backgroundColor = 'rgb(100, 100, 300)'
titleElement.style.color = 'rgb(150, 250, 500)'

pElement.innerHTML = "Comments for <strong>Today</strong>"


console.dir(titleElement)
console.log(pElement)