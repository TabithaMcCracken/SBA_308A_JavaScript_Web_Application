// List of dog names
export const dogNames = [
    "Buddy", "Max", "Charlie", "Bailey", "Cooper", "Daisy", "Sadie", "Luna", "Bella", "Lucy",
    "Molly", "Maggie", "Sophie", "Chloe", "Lola", "Zoe", "Roxy", "Stella", "Penny", "Lily",
    "Zoey", "Duke", "Rocky", "Jack", "Toby", "Sam", "Bear", "Jake", "Zeus", "Oscar",
    "Apollo", "Bandit", "Bruno", "Chester", "Cody", "Gizmo", "Gunner", "Harley", "Hunter", "Leo",
    "Milo", "Murphy", "Oliver", "Rusty", "Rex", "Shadow", "Simba", "Tank", "Teddy", "Winston",
    "Ace", "Archie", "Benji", "Blue", "Buster", "Cash", "Coco", "Copper", "Dexter", "Diesel",
    "Finn", "Frankie", "Hank", "Hudson", "Jasper", "Joey", "Kobe", "Louie", "Marley", "Maximus",
    "Nico", "Ollie", "Peanut", "Rocco", "Romeo", "Scooter", "Scout", "Spike", "Thor", "Titan",
    "Tyson", "Walter", "Wrigley", "Wyatt", "Yogi", "Zeke", "Ziggy", "Ace", "Archie", "Axel",
    "Benny", "Boomer", "Brady", "Buster", "Clyde", "Diesel", "Duke", "Gus", "Hendrix", "Koda"
];

export function getRandomDogName() {
    const randomIndex = Math.floor(Math.random() * dogNames.length);
    return dogNames[randomIndex];
}