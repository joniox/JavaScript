// Make an app that retrieves a random Chuck Norris joke and displays
// it in the console. (2p)
// API to use: chucknorris.io
// Send a request to https://api.chucknorris.io/jokes/random and print
// only the joke to the console (that would be the 'value' property)
// No need to add a form.

const value = '?category=dev';
fetch(`https://api.chucknorris.io/jokes/random${value}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.value);
  })
  .catch(error => console.error('Error fetching joke:', error));


