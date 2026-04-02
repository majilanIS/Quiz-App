const easyQuestions = [
  { question: "What is the capital of Ethiopia?", options: shuffle(["Nairobi", "Addis Ababa", "Lagos", "Cairo"]), answer: "Addis Ababa", category: "1" },
  { question: "Which continent is Egypt located in?", options: shuffle(["Europe", "Asia", "Africa", "America"]), answer: "Africa", category: "1" },
  { question: "What is 2 + 2?", options: shuffle(["3", "4", "5", "6"]), answer: "4", category: "3" },
  { question: "What is H2O commonly known as?", options: shuffle(["Water", "Oxygen", "Hydrogen", "Salt"]), answer: "Water", category: "2" },
  { question: "Which is the national animal of Ethiopia?", options: shuffle(["Leopard", "Elephant", "Lion", "Camel"]), answer: "Lion", category: "1" },
  { question: "Which river runs through Egypt?", options: shuffle(["Nile", "Amazon", "Yangtze", "Mississippi"]), answer: "Nile", category: "5" },
  { question: "What is the official language of Ethiopia?", options: shuffle(["Amharic", "Swahili", "Arabic", "French"]), answer: "Amharic", category: "9" },
  { question: "What is the largest desert in Africa?", options: shuffle(["Sahara", "Kalahari", "Namib", "Gobi"]), answer: "Sahara", category: "5" },
  { question: "What planet is closest to the Sun?", options: shuffle(["Mercury", "Venus", "Earth", "Mars"]), answer: "Mercury", category: "2" },
  { question: "What is 5 × 6?", options: shuffle(["30", "25", "20", "35"]), answer: "30", category: "3" },
  { question: "Who discovered gravity?", options: shuffle(["Isaac Newton", "Albert Einstein", "Galileo", "Copernicus"]), answer: "Isaac Newton", category: "2" },
  { question: "Which country is known as the 'Land of the Pharaohs'?", options: shuffle(["Egypt", "Greece", "Italy", "Morocco"]), answer: "Egypt", category: "5" },
  { question: "Which is the tallest mountain in Africa?", options: shuffle(["Kilimanjaro", "Atlas", "Rwenzori", "Mount Kenya"]), answer: "Kilimanjaro", category: "5" },
  { question: "Which ocean is on the east coast of Africa?", options: shuffle(["Indian", "Atlantic", "Pacific", "Arctic"]), answer: "Indian", category: "5" },
  { question: "What gas do plants produce during photosynthesis?", options: shuffle(["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"]), answer: "Oxygen", category: "2" },
  { question: "Who is the founder of Ethiopia's modern education system?", options: shuffle(["Haile Selassie", "Menelik II", "Meles Zenawi", "Abiy Ahmed"]), answer: "Haile Selassie", category: "6" },
  { question: "Which of these is a programming language?", options: shuffle(["Python", "Snake", "Cobra", "Viper"]), answer: "Python", category: "4" },
  { question: "What is 10 ÷ 2?", options: shuffle(["5", "2", "10", "8"]), answer: "5", category: "3" },
  { question: "Which African country has the largest population?", options: shuffle(["Nigeria", "Ethiopia", "Egypt", "South Africa"]), answer: "Nigeria", category: "5" },
  { question: "What is the capital of Kenya?", options: shuffle(["Nairobi", "Kigali", "Addis Ababa", "Dar es Salaam"]), answer: "Nairobi", category: "5" },
  { question: "Which element is represented by 'O'?", options: shuffle(["Oxygen", "Gold", "Osmium", "Hydrogen"]), answer: "Oxygen", category: "2" },
  { question: "What is 12 - 5?", options: shuffle(["7", "8", "5", "6"]), answer: "7", category: "3" },
  { question: "Who was the first president of South Africa?", options: shuffle(["Nelson Mandela", "Cyril Ramaphosa", "Thabo Mbeki", "Jacob Zuma"]), answer: "Nelson Mandela", category: "6" },
  { question: "Which country is known as the 'Rainbow Nation'?", options: shuffle(["South Africa", "Nigeria", "Egypt", "Kenya"]), answer: "South Africa", category: "5" },
  { question: "Which city is Ethiopia’s capital?", options: shuffle(["Addis Ababa", "Asmara", "Kampala", "Khartoum"]), answer: "Addis Ababa", category: "5" },
  { question: "Which instrument measures temperature?", options: shuffle(["Thermometer", "Barometer", "Altimeter", "Hygrometer"]), answer: "Thermometer", category: "2" },
  { question: "What is 15 ÷ 3?", options: shuffle(["5", "4", "6", "3"]), answer: "5", category: "3" },
  { question: "Who painted the Mona Lisa?", options: shuffle(["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"]), answer: "Leonardo da Vinci", category: "7" },
  { question: "Which African country is known for pyramids?", options: shuffle(["Egypt", "Nigeria", "Ethiopia", "Ghana"]), answer: "Egypt", category: "5" },
  { question: "Which sport is played at the FIFA World Cup?", options: shuffle(["Football", "Basketball", "Cricket", "Rugby"]), answer: "Football", category: "8" },
  { question: "What is 9 × 9?", options: shuffle(["81", "72", "99", "79"]), answer: "81", category: "3" },
  { question: "Which continent is Ethiopia in?", options: shuffle(["Asia", "Africa", "Europe", "South America"]), answer: "Africa", category: "5" },
  { question: "What is the national language of Kenya?", options: shuffle(["Swahili", "English", "French", "Amharic"]), answer: "Swahili", category: "9" },
  { question: "What is 6 + 7?", options: shuffle(["13", "12", "14", "15"]), answer: "13", category: "3" },
  { question: "Who invented the telephone?", options: shuffle(["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"]), answer: "Alexander Graham Bell", category: "2" },
  { question: "Which country is famous for coffee?", options: shuffle(["Ethiopia", "Brazil", "Kenya", "Colombia"]), answer: "Ethiopia", category: "1" },
  { question: "Which planet is known as the Blue Planet?", options: shuffle(["Earth", "Mars", "Venus", "Jupiter"]), answer: "Earth", category: "2" },
  { question: "What is 8 × 7?", options: shuffle(["56", "48", "54", "49"]), answer: "56", category: "3" },
  { question: "Which animal is known as the King of the Jungle?", options: shuffle(["Lion", "Elephant", "Tiger", "Leopard"]), answer: "Lion", category: "1" },
  { question: "Which country hosted the 2010 FIFA World Cup?", options: shuffle(["South Africa", "Brazil", "Germany", "Italy"]), answer: "South Africa", category: "8" },
  { question: "Which gas do humans breathe in?", options: shuffle(["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"]), answer: "Oxygen", category: "2" },
  { question: "What is 7 + 6?", options: shuffle(["13", "12", "14", "15"]), answer: "13", category: "3" },
  { question: "Which African country is called the Horn of Africa?", options: shuffle(["Ethiopia", "Somalia", "Kenya", "Djibouti"]), answer: "Ethiopia", category: "5" },
  { question: "What is the national fruit of Ethiopia?", options: shuffle(["Banana", "Mango", "Papaya", "Apple"]), answer: "Banana", category: "1" },
  { question: "Who wrote 'Romeo and Juliet'?", options: shuffle(["Shakespeare", "Dickens", "Austen", "Orwell"]), answer: "Shakespeare", category: "7" },
  { question: "Which country is known for the Nile River?", options: shuffle(["Egypt", "Sudan", "Ethiopia", "Uganda"]), answer: "Egypt", category: "5" },
  { question: "Which continent has the most countries?", options: shuffle(["Africa", "Asia", "Europe", "South America"]), answer: "Africa", category: "5" },
  { question: "What is 10 × 10?", options: shuffle(["100", "90", "110", "120"]), answer: "100", category: "3" },
  { question: "Which country is home to the Maasai people?", options: shuffle(["Kenya", "Tanzania", "Uganda", "Ethiopia"]), answer: "Kenya", category: "1" },
  { question: "Which city is the capital of Nigeria?", options: shuffle(["Abuja", "Lagos", "Kano", "Port Harcourt"]), answer: "Abuja", category: "5" },
  { question: "Which is the smallest country in Africa?", options: shuffle(["Seychelles", "Gambia", "Malawi", "Lesotho"]), answer: "Seychelles", category: "5" },
  { question: "Which is the hottest desert in the world?", options: shuffle(["Sahara", "Kalahari", "Atacama", "Gobi"]), answer: "Sahara", category: "5" },
  { question: "Which country has the largest population in Africa?", options: shuffle(["Nigeria", "Ethiopia", "Egypt", "DR Congo"]), answer: "Nigeria", category: "5" },
  { question: "Which African country is known for chocolate?", options: shuffle(["Ghana", "Nigeria", "Ethiopia", "Cameroon"]), answer: "Ghana", category: "1" }
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default easyQuestions;