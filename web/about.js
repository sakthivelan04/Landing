var images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your image filenames here
var currentImage = 0;

function changeImage(step) {
    currentImage += step;
    if (currentImage >= images.length) {
        currentImage = 0;
    } else if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    document.getElementById('slider-img').src = images[currentImage];
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    }
});