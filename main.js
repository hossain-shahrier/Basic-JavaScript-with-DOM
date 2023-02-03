var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

// Form Sumbmit
form.addEventListener('submit', addItem)
// Delete Event
itemList.addEventListener('click', removeItem)
// Filet Event
filter.addEventListener('keyup', filterItem)


// Add item
function addItem(e) {
    e.preventDefault();
    // get the input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item'
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create delete Button element
    var deleteButton = document.createElement('button')

    // Add classes to del button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteButton.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteButton)
    itemList.appendChild(li)

}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

// Filter item
function filterItem(e) {
    // convert text into lowercase
    var text = e.target.value.toLowerCase();
    // Get List
    var items = itemList.getElementsByTagName('li');
    // converting to Array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        // Compare
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
}