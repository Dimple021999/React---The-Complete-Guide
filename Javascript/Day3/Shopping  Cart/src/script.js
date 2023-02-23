const shop_container = document.getElementById('shop-container');

//every time we select the product it will store the product in basket array in the form of object
// let basket =[]
let basket = JSON.parse(localStorage.getItem('data')) || [];


//print card automatically
let generateShop = () => {

    return (shop_container.innerHTML = products.map((product) => {

        let { id, name, price, desc, img, alt } = product;

        //upadte from local storage
        let search = basket.find((product)=>product.id === id) || []

        return `<div id=product-id-${id} class="product">
        <div class="product-image">
            <img src="${img}" alt="${alt}">
        </div>
        <div class="product-details">
            <div class="detail-container">
            <h2>${name}</h2>
            <p>${desc}</p>
            </div>
            <div class="price flex-con">
                <span>
                    <span class="price-symbol">₹</span>
                    <span class="price-amount">${price}</span>
                </span>
                <div class="buttons flex-con">
                   <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                   <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                   <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `
    }).join(""))

}
generateShop();

let increment = function (id) {
    let selectedItem = id;

    //we'll search to check whether product already exists in the basket if it's existing we'll increment the quantity

    let search = basket.find((product) => product.id === selectedItem.id)

    //product is not there in basket
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    }
    else {
        search.item += 1;
    }

    // console.log(basket)
    update(selectedItem.id)
    localStorage.setItem('data',JSON.stringify(basket))

}
let decrement = function (id) {
    let selectedItem = id;

    let search = basket.find((product) => product.id === selectedItem.id)

    if(search.item === undefined) {
        return
    }

    else if (search.item === 0) {
        return;
    }
    else {
        search.item -= 1;
    }

    update(selectedItem.id)
    basket=basket.filter((product)=>product.item !== 0)
    // console.log(basket)

    localStorage.setItem('data',JSON.stringify(basket))

}

// to update the quantity of picked items on each item card
let update = function (id) {
    let search = basket.find((product) => product.id === id)
    document.getElementById(id).textContent = search.item;

    // console.log(search.item)
    calculate()

}

let calculate = function () {
    let cart = document.getElementById('cart-amount')
    
    cart.textContent = (basket.map((product)=>product.item).reduce((acc,curr)=>acc+curr,0))
}
calculate()

