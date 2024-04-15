
import axios from "axios";

const API_KEY =
  "live_dfpYSW8x3YjkDraGLFAQHcYU0b9w892Tu80OLSjrAPFFSnxD6J5oINMo3AfLjI3A";

axios.defaults.baseURL = "https://api.thecatapi.com/v1/";
axios.defaults.headers.common["x-api-key"] = API_KEY;

document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the dog API using Axios
    axios.get('https://api.thedogapi.com/v1/breeds')
        .then(response => {
            // Call a function to display the featured dogs
            displayFeaturedDogs(response.data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayFeaturedDogs(data) {
    // Get the section where the featured dogs will be displayed
    const featuredDogsSection = document.getElementById('featured-dogs');

    // Loop through the data and create a card for each featured dog
    data.forEach(dog => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('dog-card');

        // Create image element
        const img = document.createElement('img');
        img.src = dog.image.url;
        img.alt = dog.name;

        // Create heading element for dog name
        const name = document.createElement('h2');
        name.textContent = dog.name;

        // Create paragraph element for dog breed
        const breed = document.createElement('p');
        breed.textContent = `Breed: ${dog.name}`;

        // Append elements to the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(breed);

        // Append the card to the featured dogs section
        featuredDogsSection.appendChild(card);
    });
}

