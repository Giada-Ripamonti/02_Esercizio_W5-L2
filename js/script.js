let budget = prompt('Qual è il tuo budget?')
console.log(budget);

document.getElementById('budget').innerHTML = budget;

function showItems() {
    document.getElementById('container').style.visibility = "visible";
}

let imgs = ['plant1', 'plant2', 'plant3']

let card = document.getElementById('container');

imgs.forEach(img => {
    card.innerHTML = '<div class="card">' +
                     '<img src="assets/imgs/'++img'.png">' +
                     '<p>Plant Name</p>' +
                     '<p>Price: <span id="price1"></span></p>' +
                     '<button class="buyBtn" onclick="buyItem()">buy</button>' +
                     '</div>'
})

