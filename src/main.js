const { createElement } = require('react');

const apiURL = 'http://localhost:3000/tareas';

const form = document.getElementById('formData');
const list = document.getElementById('tasks');
const input = document.getElementById('date');

async function getData() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch {
    console.error('error');
  }
}
//headers & body
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newObject = {
    id: Date.now(),
    titulo: input.value,
    completada: false
  };

  fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObject)
  });
  getData();
});

//npm run dev
//json-server --watch db.json
