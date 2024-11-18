// Develop the app further.
// Add JavaScript that gets the value entered to the form and sends a request
// with fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}.
// Print the search result to the console. (3p)


document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const showName = document.getElementById("query").value;

  if (!showName.trim()) {
    console.log("Please enter a show name.");
    return;
  }

  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(showName)}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        console.log("No results found.");
      } else {
        console.log("Search Results:");
        data.forEach((item, index) => {
          console.log(`${index + 1}. Name: ${item.show.name}`);
          console.log(`   Language: ${item.show.language}`);
          console.log(`   Genres: ${item.show.genres.join(", ")}`);
          console.log(`   Premiered: ${item.show.premiered}`);
          console.log(`   Summary: ${item.show.summary?.replace(/<[^>]+>/g, "") || "No summary available."}`);
          console.log("   -------------------");
        });
      }
    })
    .catch(error => console.error("Error fetching data:", error));
});







