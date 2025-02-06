function add_to_basket(event) {
    var itemContainer = event.target.closest('.benefit'); // Change this to '.benefit' to match your structure
    var itemName = itemContainer.querySelector('h2').innerText; // Get the coffee name
    var itemPrice = itemContainer.querySelector('.price').innerText; // Get the price
    var itemImageSrc = itemContainer.querySelector('img').src; // Get the image source
    
    if (typeof(Storage) !== "undefined") {
        var basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
        basketItems.push({name: itemName, price: itemPrice, imageSrc: itemImageSrc});
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        showSuccessMessage("Item added to basket!");
    } else {
        showErrorMessage("Item could not be added to basket.");
        alert("Item could not be added to basket.");
    }
}

function showSuccessMessage(message) {
    // Remove any existing toast messages
    var existingToast = document.querySelector('.message-box');
    if (existingToast) {
        existingToast.remove();
    }

    // Create a new toast message
    var toast = document.createElement('div');
    toast.className = 'message-box'; // Add a class for styling
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Set a timeout to remove the toast message after 3000 ms
    setTimeout(function() {
        toast.remove();
    }, 3000);
}


function showErrorMessage(message) {
    // Assuming you have a message box for errors
    var toast = document.createElement('div');
    toast.className = 'message-box2'; // Add a class for styling
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(function() {
        toast.remove();
    }, 3000);
}
