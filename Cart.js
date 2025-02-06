// Function to clear the last coffee item in the basket
function clearBasket() {
    var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    
    if (basketItems.length > 0) {
        basketItems.pop();
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        updateCoffeeCartDisplay();
    } else {
        alert("Your coffee basket is already empty!");
    }
}

function clear_Subscriptiont() {
    var subscriptionItems = JSON.parse(localStorage.getItem('subscriptionItems')) || [];
    
    if (subscriptionItems.length > 0) {
        subscriptionItems.pop();
        localStorage.setItem('subscriptionItems', JSON.stringify(basketItems));
        updateSubscriptionCartDisplay();
    } else {
        alert("Your coffee basket is already empty!");
    }
}

// Function to clear all items (coffee + subscription) in the basket
function clearAll() {
    var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    var subscriptionItems = JSON.parse(localStorage.getItem('subscriptionItems')) || [];

    // Confirm the action with the user
    if (basketItems.length > 0 || subscriptionItems.length > 0) {
        if (confirm("Are you sure you want to clear all items from the basket?")) {
            // Clear the items from localStorage
            localStorage.removeItem('basketItems');
            localStorage.removeItem('subscriptionItems');
            
            // Update the basket display
            updateCoffeeCartDisplay();
            updateSubscriptionCartDisplay();
            updateTotalCartDisplay();
            alert("All items have been cleared from your basket.");
        }
    } else {
        alert("Your basket is already empty!");
    }
}

// Function to handle payment action (for demonstration)
function makePayment() {
    alert('Payment functionality has not been implemented yet. This is just a demonstration.');
}

// Function to update the coffee cart display and total price
function updateCoffeeCartDisplay() {
    var coffeeBasketItemsContainer = document.getElementById('basket-items');
    var totalCoffeePriceContainer = document.getElementById('total-coffee-price');

    // Clear the current coffee items displayed
    coffeeBasketItemsContainer.innerHTML = '';

    // Retrieve coffee items from localStorage
    var coffeeBasketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
    
    // Initialize the total price for coffee
    var totalCoffeePrice = 0;

    // Loop through each coffee item in the basket and display it
    coffeeBasketItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}">
            <div class="details">
                <p>${item.name}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
        coffeeBasketItemsContainer.appendChild(itemElement);

        // Extract the price and accumulate it for the total
        var price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
        totalCoffeePrice += price;
    });
    
    // Update the total coffee price displayed on the page
    totalCoffeePriceContainer.textContent = `₹${totalCoffeePrice.toFixed(2)}`;

    // Update the total cart display
    updateTotalCartDisplay();
}


// Function to remove the last subscription plan in the basket
function clear_Subscriptiont() {
    var subscriptionItems = JSON.parse(localStorage.getItem('subscriptionItems')) || [];
    
    if (subscriptionItems.length > 0) {
        subscriptionItems.pop();  // Remove the last subscription plan
        localStorage.setItem('subscriptionItems', JSON.stringify(subscriptionItems));
        updateSubscriptionCartDisplay();
    } else {
        alert("Your subscription basket is already empty!");
    }
}

// Function to remove a specific subscription plan by index
function removeSubscriptionPlan(index) {
    var subscriptionItems = JSON.parse(localStorage.getItem('subscriptionItems')) || [];
    
    if (index >= 0 && index < subscriptionItems.length) {
        subscriptionItems.splice(index, 1); // Remove the subscription plan at the specified index
        localStorage.setItem('subscriptionItems', JSON.stringify(subscriptionItems));
        updateSubscriptionCartDisplay();
    } else {
        alert("Invalid subscription plan index!");
    }
}


// Function to update the subscription cart display and total price
function updateSubscriptionCartDisplay() {
    var subscriptionBasketItemsContainer = document.getElementById('subscription-basket-items');
    var totalSubscriptionPriceContainer = document.getElementById('total-subscription-price');

    // Clear the current subscription items displayed
    subscriptionBasketItemsContainer.innerHTML = '';

    // Retrieve subscription items from localStorage
    var subscriptionItems = JSON.parse(localStorage.getItem('subscriptionItems')) || [];
    
    // Initialize the total price for subscriptions
    var totalSubscriptionPrice = 0;

    // Loop through each subscription item and display it
    subscriptionItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            
            <div class="details">
                <p>${item.name}</p>
                <p>${item.description}</p>
                <p>${item.feature}</p>
                <p>${item.features}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
        subscriptionBasketItemsContainer.appendChild(itemElement);

        // Extract the price and accumulate it for the total
        var price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
        totalSubscriptionPrice += price;
    });
    
    // Update the total subscription price displayed on the page
    totalSubscriptionPriceContainer.textContent = `₹${totalSubscriptionPrice.toFixed(2)}`;

    // Update the total cart display
    updateTotalCartDisplay();
}

// Function to update the overall cart display (coffee + subscription)
function updateTotalCartDisplay() {
    var totalCoffeePrice = parseFloat(document.getElementById('total-coffee-price').textContent.replace(/[^\d.-]/g, '')) || 0;
    var totalSubscriptionPrice = parseFloat(document.getElementById('total-subscription-price').textContent.replace(/[^\d.-]/g, '')) || 0;

    // Calculate total cart price
    var totalCartPrice = totalCoffeePrice + totalSubscriptionPrice;
    
    // Update the total cart price displayed on the page
    var totalCartPriceContainer = document.getElementById('total-cart-price');
    totalCartPriceContainer.textContent = `₹${totalCartPrice.toFixed(2)}`;

    // Update breakdown display
    var breakdownContainer = document.getElementById('total-price-items');
    breakdownContainer.innerHTML = `
        <p><strong>Price Breakdown:</strong></p>
        <p>Total Coffee Price: €${totalCoffeePrice.toFixed(2)}</p>
        <p>Total Subscription Price: €${totalSubscriptionPrice.toFixed(2)}</p>
    `;
}


// On window load, update the cart displays (coffee, subscription, and total)
window.onload = function() {
    updateCoffeeCartDisplay();
    updateSubscriptionCartDisplay();
    updateTotalCartDisplay();
};

function toggleMoreInfo(event) {
    const moreInfoDiv = event.target.previousElementSibling; // Get the .more-info div
    const btn = event.target;

    if (moreInfoDiv.style.display === 'none' || moreInfoDiv.style.display === '') {
        moreInfoDiv.style.display = 'block'; // Show the more info
        btn.textContent = 'Read Less'; // Change button text
    } else {
        moreInfoDiv.style.display = 'none'; // Hide the more info
        btn.textContent = 'Read More'; // Change button text back
    }
}
