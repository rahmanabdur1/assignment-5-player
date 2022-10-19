const cart = [];
// products-cart
let count=1;
function displayProduct()
{
    let totalPrice = 0;
    const totalProducts = document.getElementById("total-products");
    totalProducts.innerText = cart.length;

    const cartContainer = document.getElementById("products-cart");
    cartContainer.textContent = '';

    for(let i = 0; i < cart.length; i++)
    {
        totalPrice += cart[i].pdPrice;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${cart[i].pdName}</td>
     
        
        `;
        cartContainer.appendChild(tr);
         count= i+1;

        if (cartContainer.childNodes.length>5){
            removeLastChild('products-cart');
            button.removeLastChild('disabled');
            alert('you can not add more than 5 players');

            return;
        }
        // setTextElementById('count' );

    }
    button.setAttribute('disabled',true);
  
}

function addToCart(element) {
    const pdName = element.parentNode.parentNode.children[0].innerText;
    const pdPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const pd = {
        pdName: pdName,
        pdPrice: parseInt(pdPrice)
    }

    cart.push(pd);
    
    displayProduct();
}

