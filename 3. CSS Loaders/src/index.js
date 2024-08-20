import _ from 'lodash';
import style from './index.css';
import './clearButton';


console.log(style) // it will a object
const btn1 = document.getElementById('button1')

btn1.addEventListener('click', function () {
  const el = document.getElementById('header');
  el.innerHTML = 'Hey I have updated the code!'

  const listItems = ["Apple", 'orange', 'banana']
  const ul = document.getElementById('shoppingList');

  _.forEach(listItems, function (item) {
    const tempEl = document.createElement('li');
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  })
});

btn1.classList.add([style.button])