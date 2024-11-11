// Open t10 folder in your IDE/editor. Read the first name and last name
// values from the form and print them in the <p id="target"> (2p)
// remember to stop the default action of the form
// you can use attribute selectors in querySelector() to select the <input> elements
// example output: Your name is Luke Skywalker

const form = document.querySelector("#source");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.querySelector('[name="firstname"]').value;
    const lastName = document.querySelector('[name="lastname"]').value;

    const targetElement = document.querySelector("#target");
    targetElement.textContent = `Your name is ${firstName} ${lastName}`;
});
