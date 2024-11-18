// Develop the app further (4p).
// Now add a form where you can enter a search term like in assignments 1-3
// Send the search term to
//  using fetch()
// Print each joke in this format:
// <article>
//     <p>Joke here<p>
// </article>


document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const inputField = document.getElementById("query");
  const query = inputField.value;
  if (!query) {
    console.log("Search query is empty.");
    return;
  }

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      if (data.result.length === 0) {
        console.log("No results found.");
        resultsContainer.innerHTML = "<p>No results found.</p>";
      } else {
        data.result.forEach(item => {
          const article = document.createElement("article");

          const jokeParagraph = document.createElement("p");
          jokeParagraph.textContent = item.value;

          article.appendChild(jokeParagraph);

          resultsContainer.appendChild(article);
        });
      }
    })
    .catch(error => console.error("Error fetching data:", error));
});









