let budget = prompt('Qual è il tuo budget?')
console.log(budget);

let halfBudget = budget / 2;

document.getElementById('budgetStart').innerHTML = '£ ' + +(budget);

function showItems() {
    document.getElementById('container').style.visibility = "visible";
    document.getElementById('showItems').style.visibility = "hidden";
}

let imgs = ['plant1', 'plant2', 'plant3']

let card = document.getElementById('container');

imgs.forEach(img => {
    let productPrice = fixPrice();
    card.innerHTML += '<div class="card">' +
                     '<img src="assets/imgs/'+img+'.png">' +
                     '<h4>Plant Name: '+img+'</h4>' +
                     '<p>£ '+productPrice+'</p>' +
                     '<button class="buyBtn" onclick="buyItem('+productPrice+')">buy</button>' +
                     '</div>'
})

function fixPrice() {
    let price = Math.random() * 80;
    return price.toFixed(2);
}

function addBudget() {
    let addValue = document.getElementById('budgetValue').value;
    budgetStart.innerHTML = parseInt(budget) + parseInt(addValue);
    budget = parseInt(budget) + parseInt(addValue);
    document.getElementById('budgetValue').value = '';
}

function buyItem(productPrice) {
    console.log(budget);
    console.log(halfBudget);
    if(budget > productPrice) {
        budget = +(budget) - productPrice;
        budgetStart.innerHTML = parseInt(budget).toFixed(2);
    } else if(budget == halfBudget){   
        alert('Sei a metà del tuo budget!');
    } else if(budget < productPrice){
        alert('Out of budget! =(');
    }       
}
