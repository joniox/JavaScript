// Develop the app even further. Print the following information for all
// series from the search result on the web page. (7p)
// required information: Name, link to details (url), medium image and summary
// show the name in <h2> element
// show the url in <a> element. Also add target="_blank" to the link.
// show the medium image with <img src="" alt="">. Add medium image to src
// attribute and name property to alt attribute.
// some TV-shows don't have images. This will cause an error. You can fix this
// by adding ? operator to image property. Example: tvShow.show.image?.medium;.
// This is called optional chaining.
// show summary in <div> element (not <p>). This is because the summary is
// already in <p> element, and the result will not be valid if
// <p> is inside another <p>.
// collect the elements to <article> elements and append <article>
// elements to the HTML document.
// make <div id="results"> element to the HTML document where you
// append the <article> elements.
// clear the old results with innerHTML = '' before you append the new results.


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

          if (item.show.image?.medium) {
            const imageElement = document.createElement("img");
            imageElement.src = item.show.image.medium;
            imageElement.alt = item.show.name;
            article.appendChild(imageElement);
          }

          const summaryElement = document.createElement("div");
          summaryElement.innerHTML = item.show.summary || "No summary available.";
          article.appendChild(summaryElement);

          resultsContainer.appendChild(article);
        });
      }
    })
    .catch(error => console.error("Error fetching data:", error));
});







