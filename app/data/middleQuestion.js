const mediumQuestions = [
  { question: "What is the currency of Ethiopia?", options: shuffle(["Birr", "Shilling", "Dollar", "Euro"]), answer: "Birr", category: "1" },
  { question: "Which organ pumps blood in the human body?", options: shuffle(["Heart", "Lungs", "Kidney", "Liver"]), answer: "Heart", category: "2" },
  { question: "What is 15 × 3?", options: shuffle(["45", "40", "50", "35"]), answer: "45", category: "3" },
  { question: "Which African country is called the 'Pearl of Africa'?", options: shuffle(["Uganda", "Kenya", "Ethiopia", "Ghana"]), answer: "Uganda", category: "5" },
  { question: "Which planet is known for its rings?", options: shuffle(["Saturn", "Jupiter", "Mars", "Venus"]), answer: "Saturn", category: "2" },
  { question: "What is the chemical symbol for gold?", options: shuffle(["Au", "Ag", "Go", "Gd"]), answer: "Au", category: "2" },
  { question: "Who was the first emperor of Ethiopia?", options: shuffle(["Menelik II", "Haile Selassie", "Tewodros II", "Menenelik I"]), answer: "Tewodros II", category: "6" },
  { question: "Which country hosted the 2019 Africa Cup of Nations?", options: shuffle(["Egypt", "Morocco", "Senegal", "Nigeria"]), answer: "Egypt", category: "8" },
  { question: "What is 12 ÷ 4?", options: shuffle(["3", "2", "4", "6"]), answer: "3", category: "3" },
  { question: "Which is the largest lake in Africa?", options: shuffle(["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Turkana"]), answer: "Lake Victoria", category: "5" },
  { question: "What programming language is used for web development?", options: shuffle(["JavaScript", "Python", "C++", "Ruby"]), answer: "JavaScript", category: "4" },
  { question: "Which African country has the longest coastline?", options: shuffle(["Somalia", "Egypt", "South Africa", "Morocco"]), answer: "Somalia", category: "5" },
  { question: "What is 20% of 150?", options: shuffle(["30", "25", "20", "35"]), answer: "30", category: "3" },
  { question: "Who is known as the father of modern physics?", options: shuffle(["Albert Einstein", "Isaac Newton", "Galileo", "Nikola Tesla"]), answer: "Albert Einstein", category: "2" },
  { question: "Which country is home to Mount Kilimanjaro?", options: shuffle(["Tanzania", "Kenya", "Ethiopia", "Uganda"]), answer: "Tanzania", category: "5" },
  { question: "What is the freezing point of water in Celsius?", options: shuffle(["0°C", "100°C", "-1°C", "32°C"]), answer: "0°C", category: "2" },
  { question: "Who wrote 'The Odyssey'?", options: shuffle(["Homer", "Virgil", "Shakespeare", "Plato"]), answer: "Homer", category: "6" },
  { question: "What is 14 + 9?", options: shuffle(["23", "22", "24", "21"]), answer: "23", category: "3" },
  { question: "Which country is the largest in Africa by area?", options: shuffle(["Algeria", "Sudan", "DR Congo", "Libya"]), answer: "Algeria", category: "5" },
  { question: "Which element has the atomic number 1?", options: shuffle(["Hydrogen", "Helium", "Oxygen", "Carbon"]), answer: "Hydrogen", category: "2" },
  { question: "Which African city is the capital of Morocco?", options: shuffle(["Rabat", "Casablanca", "Marrakech", "Tangier"]), answer: "Rabat", category: "5" },
  { question: "Who discovered penicillin?", options: shuffle(["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"]), answer: "Alexander Fleming", category: "2" },
  { question: "What is 50 ÷ 5?", options: shuffle(["10", "5", "12", "15"]), answer: "10", category: "3" },
  { question: "Which African country is known for its pyramids?", options: shuffle(["Egypt", "Sudan", "Ethiopia", "Nigeria"]), answer: "Egypt", category: "5" },
  { question: "Which planet is called the Morning Star?", options: shuffle(["Venus", "Mars", "Mercury", "Jupiter"]), answer: "Venus", category: "2" },
  { question: "What is the capital of Nigeria?", options: shuffle(["Abuja", "Lagos", "Kano", "Port Harcourt"]), answer: "Abuja", category: "5" },
  { question: "Which African river is the longest?", options: shuffle(["Nile", "Congo", "Niger", "Zambezi"]), answer: "Nile", category: "5" },
  { question: "Who invented the light bulb?", options: shuffle(["Thomas Edison", "Nikola Tesla", "Alexander Bell", "Benjamin Franklin"]), answer: "Thomas Edison", category: "2" },
  { question: "What is 18 × 2?", options: shuffle(["36", "32", "34", "30"]), answer: "36", category: "3" },
  { question: "Which Ethiopian festival marks the end of fasting?", options: shuffle(["Timkat", "Meskel", "Enkutatash", "Genna"]), answer: "Genna", category: "6" },
  { question: "Which country is the largest producer of coffee in Africa?", options: shuffle(["Ethiopia", "Uganda", "Ivory Coast", "Kenya"]), answer: "Ethiopia", category: "1" },
  { question: "What is the square root of 64?", options: shuffle(["8", "6", "7", "9"]), answer: "8", category: "3" },
  { question: "Which African country is known as the Land of a Thousand Hills?", options: shuffle(["Rwanda", "Kenya", "Ethiopia", "Uganda"]), answer: "Rwanda", category: "5" },
  { question: "Which chemical element has the symbol 'Na'?", options: shuffle(["Sodium", "Nitrogen", "Neon", "Nickel"]), answer: "Sodium", category: "2" },
  { question: "Who wrote 'A Tale of Two Cities'?", options: shuffle(["Charles Dickens", "Jane Austen", "Shakespeare", "Mark Twain"]), answer: "Charles Dickens", category: "7" },
  { question: "What is 7 × 8?", options: shuffle(["56", "54", "48", "49"]), answer: "56", category: "3" },
  { question: "Which African country has Addis Ababa as its capital?", options: shuffle(["Ethiopia", "Kenya", "Egypt", "Sudan"]), answer: "Ethiopia", category: "5" },
  { question: "Which is the smallest prime number?", options: shuffle(["2", "3", "5", "7"]), answer: "2", category: "3" },
  { question: "Who painted the Starry Night?", options: shuffle(["Vincent van Gogh", "Leonardo da Vinci", "Claude Monet", "Pablo Picasso"]), answer: "Vincent van Gogh", category: "7" },
  { question: "Which African country is known as the Horn of Africa?", options: shuffle(["Ethiopia", "Somalia", "Djibouti", "Eritrea"]), answer: "Ethiopia", category: "5" },
  { question: "Which programming language is primarily used for iOS apps?", options: shuffle(["Swift", "Python", "Java", "C++"]), answer: "Swift", category: "4" },
  { question: "What is 21 ÷ 7?", options: shuffle(["3", "2", "4", "5"]), answer: "3", category: "3" },
  { question: "Which African country’s flag has a green, yellow, and red horizontal stripe?", options: shuffle(["Ethiopia", "Nigeria", "South Africa", "Ghana"]), answer: "Ethiopia", category: "5" },
  { question: "Who is considered the father of modern computing?", options: shuffle(["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"]), answer: "Charles Babbage", category: "4" },
  { question: "Which African capital city is located on the Nile River?", options: shuffle(["Khartoum", "Cairo", "Kampala", "Addis Ababa"]), answer: "Khartoum", category: "5" },
  { question: "What is 11 + 12?", options: shuffle(["23", "22", "24", "21"]), answer: "23", category: "3" },
  { question: "Which African country is famous for its pyramids and ancient civilization?", options: shuffle(["Egypt", "Nigeria", "Ghana", "Ethiopia"]), answer: "Egypt", category: "5" },
  { question: "Which planet is known as the Red Planet?", options: shuffle(["Mars", "Venus", "Jupiter", "Saturn"]), answer: "Mars", category: "2" },
  { question: "Which African country has the Serengeti National Park?", options: shuffle(["Tanzania", "Kenya", "Ethiopia", "Uganda"]), answer: "Tanzania", category: "5" },
  { question: "Who developed the theory of relativity?", options: shuffle(["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"]), answer: "Albert Einstein", category: "2" },
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default mediumQuestions;