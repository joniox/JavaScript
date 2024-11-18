// Develop the app even further. Optional chaining is not the best way to
// handle missing image. Use ternary operator or if/else to add a default
// image if TV-show is missing image property. (2p)
// Use https://via.placeholder.com/210x295?text=Not%20Found as the default image.


document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const showName = document.getElementById("query").value;

  if (!showName.trim()) {
    console.log("Please enter a show name.");
    return;
  }

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(showName)}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        console.log("No results found.");
        resultsContainer.innerHTML = "<p>No results found.</p>";
      } else {
        data.forEach(item => {
          const article = document.createElement("article");

          const showNameElement = document.createElement("h2");
          showNameElement.textContent = item.show.name;
          article.appendChild(showNameElement);

          const linkElement = document.createElement("a");
          linkElement.href = item.show.url;
          linkElement.target = "_blank";
          linkElement.textContent = "More Details";
          article.appendChild(linkElement);

          const imageUrl = item.show.image?.medium
            ? item.show.image.medium
            : "https://via.placeholder.com/210x295?text=Not%20Found";
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageElement.alt = item.show.name;
          article.appendChild(imageElement);

          const summaryElement = document.createElement("div");
          summaryElement.innerHTML = item.show.summary || "No summary available.";
          article.appendChild(summaryElement);

          resultsContainer.appendChild(article);
        });
      }
    })
    .catch(error => console.error("Error fetching data:", error));
});
