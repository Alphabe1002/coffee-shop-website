window.onload = function() {
    // Get all elements with the class 'shop-now' (assuming each button has this class)
    var shopNowButtons = document.getElementsByClassName('shop-now');

    // Loop through all the buttons and add an event listener
    for (var i = 0; i < shopNowButtons.length; i++) {
        shopNowButtons[i].onclick = function() {
            window.location.href = './Coffee_Selection.html'; // Redirect to coffee selection page
        }
    }
}

// Function to handle subscribing to a plan
function subscribe_now(event) {
    var itemContainer = event.target.closest('.subscription'); // Change this to '.benefit' to match your structure

    var itemName = itemContainer.querySelector('h3').innerText; // Get the subscription plan name
    var itemFeature = itemContainer.querySelector('li.feature').innerText;
    var itemFeature2 = itemContainer.querySelector('li.feature2').innerText;
    var itemPrice = itemContainer.querySelector('li.Price').innerText; // Get the subscription price
    var itemDescription = itemContainer.querySelector('p').innerText; // Get the subscription description

    // Store subscription details separately in localStorage
    if (typeof(Storage) !== "undefined") {
        var subscriptionItems = JSON.parse(localStorage.getItem('subscriptionItems')) || []; // Fetch subscription items from localStorage
        subscriptionItems.push({name: itemName, feature: itemFeature, features: itemFeature2,  price: itemPrice, description: itemDescription}); // Add the new subscription plan
        localStorage.setItem('subscriptionItems', JSON.stringify(subscriptionItems)); // Store back to localStorage

        showSuccessMessage("Subscription plan added to basket!");

        window.location.href = "./ShoppingCart.html";
        
    } else {
        showErrorMessage("Subscription plan could not be added to basket.");
        alert("Subscription plan could not be added to basket.");
    }

    // Redirect to the cart page or update cart display
    
}
