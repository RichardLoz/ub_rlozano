// Obtener elementos del DOM
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const nacimientoInput = document.getElementById('nacimiento');
const crearPersonaBtn = document.getElementById('crearPersona');
const mostrarBtn = document.getElementById('mostrar');
const ocultarBtn = document.getElementById('ocultar');
const tablaPersonas = document.getElementById('tablaPersonas');
const longitudSpan = document.getElementById('long');

// Array para almacenar personas
const personas = [
    {
        Nombre: "Cristian",
        Apellido: "De Pietro",
        "Fecha de Nacimiento": "1995-12-25"
      },
      {
        Nombre: "Gustavo",
        Apellido: "Witt",
        "Fecha de Nacimiento": "1995-12-26"
      }
];

actualizarTabla()

// Función para crear una persona y agregarla a la tabla
function crearPersona() {
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const fechaNacimiento = nacimientoInput.value;

  if (nombre && apellido && fechaNacimiento) {
    const persona = {
      Nombre: nombre,
      Apellido: apellido,
      'Fecha de Nacimiento': fechaNacimiento,
    };

    personas.push(persona);
    nombreInput.value = '';
    apellidoInput.value = '';
    nacimientoInput.value = '';

    actualizarTabla();
  } else {
    alert('Por favor, complete todos los campos.');
  }
}

// Función para actualizar la tabla con los datos de las personas
function actualizarTabla() {
  tablaPersonas.innerHTML = ''; // Limpiar la tabla

  if (personas.length > 0) {
    // Crear la cabecera de la tabla
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    for (const key in personas[0]) {
      const th = document.createElement('th');
      th.textContent = key;
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    tablaPersonas.appendChild(thead);

    // Agregar los datos de las personas
    const tbody = document.createElement('tbody');
    personas.forEach((persona) => {
      const tr = document.createElement('tr');
      for (const key in persona) {
        const td = document.createElement('td');
        td.textContent = persona[key];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
    tablaPersonas.appendChild(tbody);
  }

  // Actualizar la longitud del arreglo
  longitudSpan.textContent = personas.length;
}

// Función para mostrar la tabla
function mostrarTabla() {
    console.log("Estoy haciendo click en mostrar")
  tablaPersonas.style.display = 'block';
}

// Función para ocultar la tabla
function ocultarTabla() {
  tablaPersonas.style.display = 'none';
}

// Event listeners para los botones
crearPersonaBtn.addEventListener('click', crearPersona);
mostrarBtn.addEventListener('click', mostrarTabla);
ocultarBtn.addEventListener('click', ocultarTabla);
