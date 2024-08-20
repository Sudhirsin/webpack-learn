// import style from './clearButton.css';

const el = document.createElement('button');
el.innerHTML = 'Clear';
// el.classList.add([style.button])
el.classList.add(['button'])
el.onclick = function () {
  alert('Clear List')
}
document.body.appendChild(el);