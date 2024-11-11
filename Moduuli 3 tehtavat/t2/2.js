// Open t2 folder in your IDE/editor. Add HTML by using createElement() and
// appenChild mehtods. (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-item to the second list item

const target = document.getElementById('target');

const firstItem = document.createElement('li');
firstItem.textContent = 'First item';
target.appendChild(firstItem);

const secondItem = document.createElement('li');
secondItem.textContent = 'Second item';
secondItem.classList.add('my-item');
target.appendChild(secondItem);

const thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';
target.appendChild(thirdItem);

