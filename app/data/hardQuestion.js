const hardQuestions = [
  { question: "What is the capital of Ethiopia?", options: shuffle(["Addis Ababa", "Nairobi", "Cairo", "Khartoum"]), answer: "Addis Ababa", category: "5" },
  { question: "Who discovered gravity?", options: shuffle(["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"]), answer: "Isaac Newton", category: "2" },
  { question: "Which African country was never colonized?", options: shuffle(["Ethiopia", "Ghana", "Nigeria", "Kenya"]), answer: "Ethiopia", category: "6" },
  { question: "What is the derivative of x²?", options: shuffle(["2x", "x", "x²", "2"]), answer: "2x", category: "3" },
  { question: "Which programming language is used for Android development?", options: shuffle(["Java", "Python", "C++", "Swift"]), answer: "Java", category: "4" },
  { question: "Which is the longest river in Africa?", options: shuffle(["Nile", "Congo", "Niger", "Zambezi"]), answer: "Nile", category: "5" },
  { question: "What year did Ethiopia defeat Italy at Adwa?", options: shuffle(["1896", "1900", "1889", "1910"]), answer: "1896", category: "6" },
  { question: "Who is known as the father of computers?", options: shuffle(["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"]), answer: "Charles Babbage", category: "4" },
  { question: "Which chemical element has the symbol 'Fe'?", options: shuffle(["Iron", "Fluorine", "Francium", "Fermium"]), answer: "Iron", category: "2" },
  { question: "Which African country has the largest population?", options: shuffle(["Nigeria", "Ethiopia", "Egypt", "South Africa"]), answer: "Nigeria", category: "5" },
  { question: "Who wrote 'War and Peace'?", options: shuffle(["Leo Tolstoy", "Shakespeare", "Charles Dickens", "Victor Hugo"]), answer: "Leo Tolstoy", category: "6" },
  { question: "What is 12²?", options: shuffle(["144", "121", "132", "154"]), answer: "144", category: "3" },
  { question: "Which African city is the capital of Kenya?", options: shuffle(["Nairobi", "Mombasa", "Kampala", "Dar es Salaam"]), answer: "Nairobi", category: "5" },
  { question: "Who formulated the theory of relativity?", options: shuffle(["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"]), answer: "Albert Einstein", category: "2" },
  { question: "Which continent is called the 'Dark Continent'?", options: shuffle(["Africa", "Asia", "Europe", "South America"]), answer: "Africa", category: "5" },
  { question: "What is the integral of 2x dx?", options: shuffle(["x² + C", "2x² + C", "x + C", "2x + C"]), answer: "x² + C", category: "3" },
  { question: "Who painted the Mona Lisa?", options: shuffle(["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"]), answer: "Leonardo da Vinci", category: "7" },
  { question: "Which African country is known for its pyramids?", options: shuffle(["Egypt", "Sudan", "Ethiopia", "Morocco"]), answer: "Egypt", category: "5" },
  { question: "Which planet has the most moons?", options: shuffle(["Saturn", "Jupiter", "Mars", "Earth"]), answer: "Saturn", category: "2" },
  { question: "Which Ethiopian festival celebrates the baptism of Jesus?", options: shuffle(["Timkat", "Meskel", "Genna", "Enkutatash"]), answer: "Timkat", category: "6" },
  { question: "What is 2³ × 3²?", options: shuffle(["36", "18", "24", "12"]), answer: "36", category: "3" },
  { question: "Who discovered penicillin?", options: shuffle(["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"]), answer: "Alexander Fleming", category: "2" },
  { question: "Which African country has the Serengeti National Park?", options: shuffle(["Tanzania", "Kenya", "Uganda", "Ethiopia"]), answer: "Tanzania", category: "5" },
  { question: "What is 15% of 200?", options: shuffle(["30", "25", "20", "35"]), answer: "30", category: "3" },
  { question: "Which programming language is known as the language of the web?", options: shuffle(["JavaScript", "Python", "Java", "C#"]), answer: "JavaScript", category: "4" },
  { question: "Which African country’s flag has a green, yellow, and red horizontal stripe?", options: shuffle(["Ethiopia", "Ghana", "Cameroon", "Senegal"]), answer: "Ethiopia", category: "5" },
  { question: "Who is considered the father of modern physics?", options: shuffle(["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"]), answer: "Albert Einstein", category: "2" },
  { question: "Which is the largest desert in Africa?", options: shuffle(["Sahara", "Kalahari", "Namib", "Libyan"]), answer: "Sahara", category: "5" },
  { question: "What is the solution to 5x + 3 = 18?", options: shuffle(["x = 3", "x = 2", "x = 4", "x = 5"]), answer: "x = 3", category: "3" },
  { question: "Who was the first African to win a Nobel Peace Prize?", options: shuffle(["Albert Luthuli", "Nelson Mandela", "Desmond Tutu", "Wangari Maathai"]), answer: "Albert Luthuli", category: "6" },
  { question: "Which planet is closest to the sun?", options: shuffle(["Mercury", "Venus", "Earth", "Mars"]), answer: "Mercury", category: "2" },
  { question: "Which Ethiopian city is famous for rock-hewn churches?", options: shuffle(["Lalibela", "Axum", "Gondar", "Harar"]), answer: "Lalibela", category: "6" },
  { question: "What is 7² + 8²?", options: shuffle(["113", "110", "100", "115"]), answer: "113", category: "3" },
  { question: "Who developed the first vaccine for smallpox?", options: shuffle(["Edward Jenner", "Louis Pasteur", "Alexander Fleming", "Robert Koch"]), answer: "Edward Jenner", category: "2" },
  { question: "Which African river flows into the Mediterranean Sea?", options: shuffle(["Nile", "Congo", "Niger", "Zambezi"]), answer: "Nile", category: "5" },
  { question: "What is the derivative of sin(x)?", options: shuffle(["cos(x)", "-sin(x)", "sin(x)", "-cos(x)"]), answer: "cos(x)", category: "3" },
  { question: "Who wrote 'Hamlet'?", options: shuffle(["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Jane Austen"]), answer: "William Shakespeare", category: "6" },
  { question: "Which African country is called the 'Rainbow Nation'?", options: shuffle(["South Africa", "Nigeria", "Kenya", "Ethiopia"]), answer: "South Africa", category: "5" },
  { question: "What is 9 × 6?", options: shuffle(["54", "48", "56", "52"]), answer: "54", category: "3" },
  { question: "Which African country is known as the Land of a Thousand Hills?", options: shuffle(["Rwanda", "Uganda", "Ethiopia", "Kenya"]), answer: "Rwanda", category: "5" },
  { question: "Which element has the atomic number 8?", options: shuffle(["Oxygen", "Hydrogen", "Nitrogen", "Carbon"]), answer: "Oxygen", category: "2" },
  { question: "Who painted the Sistine Chapel ceiling?", options: shuffle(["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"]), answer: "Michelangelo", category: "7" },
  { question: "Which African country is known for the Maasai Mara?", options: shuffle(["Kenya", "Tanzania", "Uganda", "Ethiopia"]), answer: "Kenya", category: "5" },
  { question: "Which programming language is primarily used for iOS development?", options: shuffle(["Swift", "Java", "Python", "C++"]), answer: "Swift", category: "4" },
  { question: "What is 100 ÷ 4?", options: shuffle(["25", "20", "24", "22"]), answer: "25", category: "3" },
  { question: "Which African country has its capital at Accra?", options: shuffle(["Ghana", "Nigeria", "Togo", "Benin"]), answer: "Ghana", category: "5" },
  { question: "Who is the author of '1984'?", options: shuffle(["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"]), answer: "George Orwell", category: "6" },
  { question: "Which is the smallest continent?", options: shuffle(["Australia", "Europe", "Antarctica", "South America"]), answer: "Australia", category: "5" },
  { question: "What is the integral of 1/x dx?", options: shuffle(["ln|x| + C", "1/x² + C", "x + C", "e^x + C"]), answer: "ln|x| + C", category: "3" },
  { question: "Which African country is home to Victoria Falls?", options: shuffle(["Zambia/Zimbabwe", "South Africa", "Botswana", "Mozambique"]), answer: "Zambia/Zimbabwe", category: "5" },
  { question: "Who invented the telephone?", options: shuffle(["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"]), answer: "Alexander Graham Bell", category: "2" },
  { question: "Which Ethiopian emperor resisted Italian colonization?", options: shuffle(["Menelik II", "Haile Selassie", "Tewodros II", "Iyasu V"]), answer: "Menelik II", category: "6" },
  { question: "Which African country has Addis Ababa as its capital?", options: shuffle(["Ethiopia", "Kenya", "Egypt", "Sudan"]), answer: "Ethiopia", category: "5" }
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default hardQuestions;