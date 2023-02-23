
let total = document.getElementById('total-amount')
let shopping_cart = document.getElementById('shopping-cart')

let basket = JSON.parse(localStorage.getItem('data')) || [];

let calculate = function () {
    let cart = document.getElementById('cart-amount')

    cart.textContent = (basket.map((product) => product.item).reduce((acc, curr) => acc + curr, 0))
}
calculate()

let generateCard = function () {
    if (basket.length !== 0) {
        return shopping_cart.innerHTML = basket.map((basketProduct) => {
            console.log(basketProduct)
            let { id, item } = basketProduct;

            let search = products.find((product) => product.id === id) || [];


            return `
            <div class="cart-item flex-con">
                    <div class="cart-image">
                        <img src="${search.img}" alt="${search.alt} width="190" height="180">
                    </div>
                    
                    <div class="cart-details">
                        <h2>${search.name}
                            <span>
                                <span class="price-amount">₹${search.price}</span>
                            </span>
                        </h2>
                        <p>${search.desc}</p>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg remove"></i>
                        <div class="buttons flex-con">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">${item}</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                        <div class="subtotal">
                            <b>
                                <span class="price-symbol">₹</span>
                                <span class="price-amount">${item * search.price}</span>
                            </b>
                        </div>
                    </div>
                    
            </div>
            
            `
        }).join('');
    }
    else {
        shopping_cart.innerHTML = ``
        total.innerHTML = `
        <div class="empty-cart text-center">
        <h1>Your Cart is empty</h1>
        <a href="index.html">
        <button class="btn homebtn">Back to Home</button>
        </a>
        </div>
        `
    }
}

generateCard()

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

    generateCard()
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
    generateCard()//render card with update data
    // console.log(basket)

    localStorage.setItem('data',JSON.stringify(basket))

}

// to update the quantity of picked items on each item card
let update = function (id) {
    let search = basket.find((product) => product.id === id)
    document.getElementById(id).textContent = search.item;

    // console.log(search.item)
    calculate()
    totalAmount()
}

let removeItem = function(id){
    let selectedItem = id;
    
    basket = basket.filter((product)=>product.id !== selectedItem.id)
    localStorage.setItem('data',JSON.stringify(basket))
    generateCard()
    totalAmount()
    calculate()
}

let totalAmount = function(){
    if(basket.length !==0){
        let amount = basket.map((basketProduct)=>{
            let {id,item} = basketProduct;
            let search = products.find((product)=>product.id === id) || [];

            return item * search.price;
        }).reduce((acc,curr)=>acc+curr,0)
        console.log(amount)

        total.innerHTML = `
        <div class="amount-details">
            <p>Total : <span>${amount}</span></p>
        </div>
        <div class="buttons">
        <a><button class="btn proceed">Proceed</button></a>
        <a><button onclick="clearCart()" class="btn clear">Clear Cart</button></a>
        </div>
        `
    }
    else{
        return
    }
}
totalAmount()

let clearCart = function(){
    basket=[];
    generateCard()
    localStorage.setItem('data',JSON.stringify(basket))
    calculate()
}