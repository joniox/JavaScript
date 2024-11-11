// Open t1 folder in your IDE/editor. Add HTML by using innerHTML property (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-list to the element with id="target"

document.getElementById("target").innerHTML = "<ul>" +
    "<li>First item</li>" +
    "<li>Second item</li>" +
    "<li>Third item</li>" +
    "</ul>";

document.getElementById("target").classList.add("my-list");


