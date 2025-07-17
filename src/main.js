const apiURL = 'http://localhost:3000/tareas';

const form = document.getElementById('formData');
const list = document.getElementById('tasks');
const input = document.getElementById('date');

async function getData() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    
    list.innerHTML = '';

    data.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.titulo;
      list.appendChild(li);
    });

  } catch (error) {
    console.error('error');
  }
}

//headers & body
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newObject = {
    id: Date.now(),
    titulo: input.value.trim(), 
    completada: false
  };

  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObject)
    });

    if (!response.ok) {
      throw new Error('Error al guardar la tarea');
    }
    getData(); 

  } catch (error) {
    console.error('Error en el POST:', error.message);
  }
});


//npm run dev
//json-server --watch db.json
