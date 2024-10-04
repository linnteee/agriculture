const items = [
    'Apple - $1',
    'Banana - $0.5',
    'Cherry - $2',
    'Date - $3',
    'Elderberry - $4',
    'Fig - $2.5',
    'Grape - $1.5',
    'Honeydew - $3.5'
];

const itemList = document.getElementById('item-list');
const searchInput = document.getElementById('search');

function displayItems(filter = '') {
    itemList.innerHTML = '';
    const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}

searchInput.addEventListener('input', () => {
    displayItems(searchInput.value);
});

// Initial display
displayItems();
