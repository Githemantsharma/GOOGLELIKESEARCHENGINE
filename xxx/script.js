var suggestionsContainer = document.getElementById("suggestions-container");
var searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function() {
  var searchTerm = searchInput.value.toLowerCase();
  var filteredSuggestions = suggestions.filter(function(suggestion) {
    return suggestion.toLowerCase().indexOf(searchTerm) > -1;
  });

  renderSuggestions(filteredSuggestions);
});

searchInput.addEventListener("focus", function() {
  suggestionsContainer.style.display = "block";
});

searchInput.addEventListener("blur", function() {
  suggestionsContainer.style.display = "none";
});

function renderSuggestions(suggestions) {
  suggestionsContainer.innerHTML = "";
  suggestions.forEach(function(suggestion) {
    var suggestionElement = document.createElement("div");
    suggestionElement.classList.add("suggestion");
    suggestionElement.textContent = suggestion;
    suggestionElement.addEventListener("click", function() {
      searchInput.value = suggestion;
      suggestionsContainer.style.display = "none";
    });
    suggestionsContainer.appendChild(suggestionElement);
  });
}

var suggestions = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Mango",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to became Freelancer",
  "How to became Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];
