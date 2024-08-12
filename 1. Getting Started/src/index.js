function buttonClicked() {
    const el = document.getElementById('header');
    el.innerHTML = 'Hey I have updated the code!'

    const listItems = ["Apple", 'orange', 'banana']
    const ul = document.getElementById('shoppingList');

    _.forEach(listItems, function(item) {
        const tempEl = document.createElement('li');
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })

}