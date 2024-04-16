import axios from "axios";
import * as Carousel from "./Carousel.js";
import { getRandomDogName } from "./dogNames.js";

const API_KEY =
  "live_dfpYSW8x3YjkDraGLFAQHcYU0b9w892Tu80OLSjrAPFFSnxD6J5oINMo3AfLjI3A";

axios.defaults.baseURL = "https://api.thedogapi.com/v1/";
axios.defaults.headers.common["x-api-key"] = API_KEY;

const carouselInner = document.getElementById("carouselInner");
const getStartedBtn = document.getElementById("getStartedBtn");
console.log("it is", getStartedBtn);

document.addEventListener("DOMContentLoaded", function() {
async function initialLoad() {
  try {
    // Get random dogs
    const response = await axios.get(
      "https://api.thedogapi.com/v1/images/search?limit=10"
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

    if (getStartedBtn) {
        console.log("it exists");
        getStartedBtn.addEventListener("click", () => {
        window.location.href = "dogs.html";
        })
    }

  } catch (error) {
    console.error("Error:", error);
  }
}
initialLoad();

});