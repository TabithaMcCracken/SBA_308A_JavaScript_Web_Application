import axios from "axios";
import * as Carousel from "./Carousel.js";
import { getRandomDogName } from "./dogNames.js";

const API_KEY =
  "live_dfpYSW8x3YjkDraGLFAQHcYU0b9w892Tu80OLSjrAPFFSnxD6J5oINMo3AfLjI3A";

axios.defaults.baseURL = "https://api.thedogapi.com/v1/";
axios.defaults.headers.common["x-api-key"] = API_KEY;


const endpoint = "https://api.thedogapi.com/v1/images/search?limit=9"


// // Function to fetch data from the API
// async function fetchData() {
//     try {
//       const response = await axios.get(endpoint, {
//         headers: {
//           "x-api-key": API_KEY
//         }
//       });
//       return response.data; // Returns an array of dog image objects
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return []; // Return an empty array in case of error
//     }
//   }
  
//   // Function to initialize the carousel with fetched data
// async function initializeCarousel() {
//     Carousel.clear(); // Clear existing carousel items
//     const data = await fetchData(); // Fetch data from the API
  
//     // Iterate through fetched data and create carousel items
//     data.forEach((item) => {
//       const imageUrl = item.url; // Assuming 'url' is the key for image URLs in the response
//       const imgAlt = "Dog Image"; // Set alt text for the image (you can customize it)
//       const imgId = item.id; // Assuming 'id' is the key for unique identifiers for images
//       const carouselItem = createCarouselItem(imageUrl, imgAlt, imgId);
//       Carousel.appendCarousel(carouselItem); // Append created carousel item to the carousel
//     });
  
//     start(); // Start the carousel
//   }
  
//   // Event listener for 'Get Started' button click
//   document.getElementById("getStartedBtn").addEventListener("click", initializeCarousel);


// Original code
// const carouselInner = document.getElementById("carouselInner");

async function initialLoad() {
    try {
      // Get random dogs
      const response = await axios.get(
        "https://api.thedogapi.com/v1/images/search?limit=2"
      );
      const dogInfo = response.data;
  
      Carousel.clear();
  
      // Create carousel items for each dog image
      dogInfo.forEach((dog) => {
        const randomDogName = getRandomDogName();
        const carouselItem = Carousel.createCarouselItem(
          dog.url,
          randomDogName,
          dog.id
        );
        Carousel.appendCarousel(carouselItem);
      });
  
      Carousel.start();
  
  
    //   const getStartedBtn = document.getElementById("getStartedBtn");
    //   console.log(getStartedBtn);
    //   if (getStartedBtn) {
    //       console.log("it exists");
    //       getStartedBtn.addEventListener("click", handleGetStartedButtonClick);
    //     }
  
    } catch (error) {
      console.error("Error:", error);
    }
  }

document.addEventListener("DOMContentLoaded", initialLoad())

let dogData = [];
// Define a function to fetch 9 random dogs from the API and create cards for each one
async function handleGetStartedButtonClick() {
    
    try {
        // Get random dogs
        //const response = await axios.get("https://api.thedogapi.com/v1/images/search?limit=12");
        //const dogs = response.data;

        const dogImagesContainer = document.getElementById("dogImages");
        dogImagesContainer.innerHTML = ""; // Clear existing content
        
 for (let i = 0; i < 9; i++) {
            const response = await axios.get("https://api.thedogapi.com/v1/images/search");
            const dog = response.data[0]; // Extract the first dog image from the response

            // Store the name and image URL of the dog
            const randomDogName = getRandomDogName();
            dogData.push({ name: randomDogName, imageUrl: dog.url });
            
            const card = createDogCard(dog, randomDogName);
            dogImagesContainer.appendChild(card);
        }
        console.log("Populate Dogs with images: ", dogData);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to create a card for a dog
function createDogCard(dog, randomDogName) {
    //console.log(dog);
    const card = document.createElement("div");
    card.classList.add("col-sm-4", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card", "text-center");

    const img = document.createElement("img");
    img.src = dog.url;
    img.classList.add("card-img-top");
    img.alt = "Dog Image";

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    // Use getRandomDogName function to generate a random name for the dog
    // const randomDogName = getRandomDogName();
    cardTitle.textContent = randomDogName;

        // Check if breeds data is available in the response
        // if (dog.breeds && dog.breeds.length > 0) {
        //     const breedName = dog.breeds[0].name; // Get the breed name from the first breed in the array
        //     console.log(breedName);
        //     cardTitle.textContent = breedName; // Set the breed name as the card title
        // } else {
        //     cardTitle.textContent = "Unknown Breed"; // If breed data is not available, display "Unknown Breed"
        // }

    cardBody.appendChild(img);
    cardBody.appendChild(cardTitle);
    card.appendChild(cardBody);

    return card;
}

document.getElementById("getStartedBtn").addEventListener("click", handleGetStartedButtonClick);



const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", handleSearch);

// Function to handle search functionality
function handleSearch() {
    const trimmedSearchQuery = document.getElementById("searchInput").value.trim().toLowerCase(); // Get the search query entered by the user
    console.log("Trimmed Search Query: ", trimmedSearchQuery);
    
    // Filter dogData based on search query
// const filteredData = dogData.filter((dog) => {
//     // Log the dog name after trimming and converting to lowercase
//     const trimmedDogName = dog.name.trim().toLowerCase();
//     console.log("Trimmed dog name:", trimmedDogName);

//     // Log whether the dog name includes the search query
//     const includesSearchQuery = trimmedDogName.includes(trimmedSearchQuery);
//     console.log("Includes search query:", includesSearchQuery);

//     // Log whether the dog has a valid image URL
//     const hasValidImageUrl = dog.imageUrl !== undefined;
//     console.log("Has valid image URL:", hasValidImageUrl);

//     // Return true if both conditions are met
//     return includesSearchQuery && hasValidImageUrl;
// });

    // Filter dogData based on search query
    const filteredData = dogData.filter((dog) => dog.name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase()) && dog.imageUrl !== undefined);
    console.log("Filtered Data", filteredData);
    
    // Clear existing content
    const dogSelectedContainer = document.getElementById("dogSelected");
    dogSelectedContainer.innerHTML = "";

    if (filteredData.length === 0 && searchQuery !== "") {
        // If no matching dogs are found, show an alert to the user
        alert("No dogs found with that name. Please try again.");
    } else {
        console.log("We found the dog!");
        // Populate gallery with filtered search results
        filteredData.forEach(({ name, imageUrl }) => {
            const card = createDogCard(name, imageUrl);
            dogSelectedContainer.appendChild(card);
        });
    }
}