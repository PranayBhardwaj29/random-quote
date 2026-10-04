const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Well done is better than well said.", author: "Benjamin Franklin" },
    { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "Knowing is not enough; we must apply.", author: "Johann Wolfgang von Goethe" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Fall seven times, stand up eight.", author: "Japanese proverb" }
];


const quote = document.querySelector(".quote");
const athr = document.querySelector(".author");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    const index = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[index];

    quote.textContent = randomQuote.text;
    athr.textContent = randomQuote.author;
});