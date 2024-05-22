let quote = document.getElementById("quote");
let author = document.getElementById("author");

let api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  let res = await fetch(url);
  let data = await res.json();
  
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};

getQuote(api_url);