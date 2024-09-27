const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('Ether 12, Moroni 10, Nepphi 1');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.ariaValueMax;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);
button.addEventListener('click',function() {});
if (input.value.trim() !== '') {}
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});
input.value = '';
input.focus();