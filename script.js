/* ============================
   Adivina la Canción - script (completo y corregido)
   ============================
*/

///////// helpers ///////////
function norm(s){
  if (!s) return "";
  return s.toString().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
}

///////// datos: las 26 canciones ///////////
const canciones = [
  {
    nombre: "November Rain",
    fecha_publicacion: "1992-02-18",
    grupo: true,
    grupo_nombre: "Guns N' Roses",
    cantante: null,
    espanol: false,
    ingles: true,
    es_de_Espana: false,
    genero: "Rock",
    album: "Use Your Illusion I",
    duracion: "8:57",
    pais_origen: "Estados Unidos",
    colabora: false
  },
  {
    nombre: "Aviones Plateados",
    fecha_publicacion: "1987-01-01",
    grupo: true,
    grupo_nombre: "El ultimo de la fila",
    cantante: null,
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Pop Rock",
    album: "El Grito del Tiempo",
    duracion: "3:50",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Lejos",
    fecha_publicacion: "2020-04-16",
    grupo: false,
    grupo_nombre: null,
    cantante: "Delaossa",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Rap / Hip Hop",
    album: "Lejos (Single)",
    duracion: "3:28",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Mi Nena",
    fecha_publicacion: "2025-05-23",
    grupo: false,
    grupo_nombre: null,
    cantante: "Walls",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Pop/Rock",
    album: "Mi Nena (Single)",
    duracion: "2:44",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "En aquel hotel jamaicano",
    fecha_publicacion: "2001-01-01",
    grupo: true,
    grupo_nombre: "Café Quijano",
    cantante: null,
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Pop/Rock Latin",
    album: "La taberna del Buda",
    duracion: "3:52",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Bulería",
    fecha_publicacion: "2004-01-05",
    grupo: false,
    grupo_nombre: null,
    cantante: "David Bisbal",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Pop Latino / Rumba",
    album: "Bulería",
    duracion: "4:13",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "No pide tanto idiota",
    fecha_publicacion: "2015-01-01",
    grupo: true,
    grupo_nombre: "Maldita Nerea",
    cantante: null,
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Pop Rock",
    album: "No pide tanto idiota (Single)",
    duracion: "3:45",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Luces Azules",
    fecha_publicacion: "2024-03-19",
    grupo: false,
    grupo_nombre: null,
    cantante: "Foyone",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Rap / HipHop",
    album: "DEMONI2024",
    duracion: "3:33",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Still Loving You",
    fecha_publicacion: "1984-04-29",
    grupo: true,
    grupo_nombre: "Scorpions",
    cantante: null,
    espanol: false,
    ingles: true,
    es_de_Espana: false,
    genero: "Rock Ballad",
    album: "Love at First Sting",
    duracion: "6:12",
    pais_origen: "Alemania",
    colabora: false
  },
  {
    nombre: "Triple Six",
    fecha_publicacion: "2019-01-01",
    grupo: false,
    grupo_nombre: null,
    cantante: "Hoke",
    espanol: false,
    ingles: true,
    es_de_Espana: false,
    genero: "Hip Hop / Trap",
    album: "Triple Six (Single)",
    duracion: "3:00",
    pais_origen: "USA",
    colabora: false
  },
  {
    nombre: "Nothing Else Matters",
    fecha_publicacion: "1992-04-20",
    grupo: true,
    grupo_nombre: "Metallica",
    cantante: null,
    espanol: false,
    ingles: true,
    es_de_Espana: false,
    genero: "Heavy Metal / Ballad",
    album: "Metallica (The Black Album)",
    duracion: "6:28",
    pais_origen: "Estados Unidos",
    colabora: false
  },
  {
    nombre: "The Show Must Go On",
    fecha_publicacion: "1991-10-14",
    grupo: true,
    grupo_nombre: "Queen",
    cantante: null,
    espanol: false,
    ingles: true,
    es_de_Espana: false,
    genero: "Hard Rock",
    album: "Innuendo",
    duracion: "4:31",
    pais_origen: "Reino Unido",
    colabora: false
  },
  {
    nombre: "Aquí estoy",
    fecha_publicacion: "2023-09-15",
    grupo: false,
    grupo_nombre: null,
    cantante: "Lucho",
    espanol: true,
    ingles: false,
    es_de_Espana: false,
    genero: "Pop Latino",
    album: "Aquí estoy (Single)",
    duracion: "3:05",
    pais_origen: "Islas Canarias",
    colabora: false
  },
  {
    nombre: "Napoles",
    fecha_publicacion: "2021-11-12",
    grupo: false,
    grupo_nombre: null,
    cantante: "Walls",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Pop / Rap melódico",
    album: "Single",
    duracion: "2:58",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Here Comes The Sun",
    fecha_publicacion: "1969-09-26",
    grupo: true,
    grupo_nombre: "The Beatles",
    cantante: null,
    espanol: false,
    ingles: true,
    es_de_Espana: false,
    genero: "Rock / Folk Pop",
    album: "Abbey Road",
    duracion: "3:06",
    pais_origen: "Reino Unido",
    colabora: false
  },
  {
    nombre: "A tu lao",
    fecha_publicacion: "2020-05-01",
    grupo: false,
    grupo_nombre: null,
    cantante: "Recycled J",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Pop Urbano",
    album: "A tu lao (Single)",
    duracion: "2:50",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Turista",
    fecha_publicacion: "2022-06-10",
    grupo: false,
    grupo_nombre: null,
    cantante: "Enry K",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Trap / Pop Urbano",
    album: "Turista (Single)",
    duracion: "3:12",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Yesterday",
    fecha_publicacion: "1965-08-06",
    grupo: true,
    grupo_nombre: "The Beatles",
    cantante: null,
    espanol: false,
    ingles: true,
    es_de_Espana: false,
    genero: "Pop / Balada",
    album: "Help!",
    duracion: "2:05",
    pais_origen: "Reino Unido",
    colabora: false
  },
  {
    nombre: "Ojos verdes",
    fecha_publicacion: "2023-04-20",
    grupo: false,
    grupo_nombre: null,
    cantante: "Delaossa",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Rap / Hip Hop",
    album: "Single",
    duracion: "3:30",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Rosas",
    fecha_publicacion: "2003-03-10",
    grupo: true,
    grupo_nombre: "La Oreja de Van Gogh",
    cantante: null,
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Pop Rock",
    album: "Lo que te conté mientras te hacías la dormida",
    duracion: "3:28",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "20 de abril",
    fecha_publicacion: "1991-03-01",
    grupo: true,
    grupo_nombre: "Celtas Cortos",
    cantante: null,
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Folk Rock",
    album: "Cuéntame un cuento",
    duracion: "4:33",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Con los dos en la cabeza",
    fecha_publicacion: "2023-06-16",
    grupo: false,
    grupo_nombre: null,
    cantante: "Cruz Cafuné",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Rap / Hip Hop",
    album: "Single",
    duracion: "3:37",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Nueva Season",
    fecha_publicacion: "2022-02-18",
    grupo: false,
    grupo_nombre: null,
    cantante: "Delaossa",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Rap / Hip Hop",
    album: "La Madrugá",
    duracion: "3:20",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "El Burrito Sabanero",
    fecha_publicacion: "2020-12-15",
    grupo: false,
    grupo_nombre: null,
    cantante: "David Bisbal",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Villancico / Pop Latino",
    album: "El Burrito Sabanero (Single)",
    duracion: "3:10",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Santo",
    fecha_publicacion: "2022-03-11",
    grupo: false,
    grupo_nombre: null,
    cantante: "Delaossa",
    espanol: true,
    ingles: false,
    es_de_Espana: true,
    genero: "Rap / Hip Hop",
    album: "Santo (Single)",
    duracion: "3:00",
    pais_origen: "España",
    colabora: false
  },
  {
    nombre: "Colgando en tus manos",
    fecha_publicacion: "2008-08-15",
    grupo: false,
    grupo_nombre: null,
    cantante: "Carlos Baute y Marta Sánchez",
    espanol: true,
    ingles: false,
    es_de_Espana: false,
    genero: "Pop Latino",
    album: "De mi puño y letra",
    duracion: "3:52",
    pais_origen: "Venezuela / España",
    colabora: true
  },
  {
  nombre: "Iris",
  fecha_publicacion: "1998-04-01",
  grupo: true,
  grupo_nombre: "The Goo Goo Dolls",
  cantante: null,
  espanol: false,
  ingles: true,
  es_de_Espana: false,
  genero: "Rock Alternativo / Balada",
  album: "Dizzy Up the Girl",
  duracion: "4:49",
  pais_origen: "Estados Unidos",
  colabora: false
},
{
  nombre: "Suerte",
  fecha_publicacion: "2024-09-01",
  grupo: false,
  grupo_nombre: null,
  cantante: "Eazyboy",
  espanol: true,
  ingles: false,
  es_de_Espana: true,
  genero: "Pop Urbano",
  album: "Suerte (Single)",
  duracion: "3:05",
  pais_origen: "España",
  colabora: false
},
{
  nombre: "Under Pressure",
  fecha_publicacion: "1981-10-26",
  grupo: true,
  grupo_nombre: "Queen",
  cantante: null,
  espanol: false,
  ingles: true,
  es_de_Espana: false,
  genero: "Rock",
  album: "Hot Space",
  duracion: "4:08",
  pais_origen: "Reino Unido",
  colabora: true
},
{
  nombre: "Tan Frío",
  fecha_publicacion: "2017-03-10",
  grupo: false,
  grupo_nombre: null,
  cantante: "Recycled J",
  espanol: true,
  ingles: false,
  es_de_Espana: true,
  genero: "Pop Urbano / Rap Melódico",
  album: "San Jorge",
  duracion: "3:27",
  pais_origen: "España",
  colabora: false
},
{
  nombre: "One",
  fecha_publicacion: "1991-02-24",
  grupo: true,
  grupo_nombre: "U2",
  cantante: null,
  espanol: false,
  ingles: true,
  es_de_Espana: false,
  genero: "Rock Alternativo",
  album: "Achtung Baby",
  duracion: "4:36",
  pais_origen: "Irlanda",
  colabora: false
},
{
  nombre: "Stand by",
  fecha_publicacion: "2002-05-20",
  grupo: true,
  grupo_nombre: "Extremoduro",
  cantante: null,
  espanol: true,
  ingles: false,
  es_de_Espana: true,
  genero: "Rock",
  album: "Yo, minoría absoluta",
  duracion: "4:30",
  pais_origen: "España",
  colabora: false
},
{
  nombre: "Las llaves de Raquel",
  fecha_publicacion: "2001-01-01",
  grupo: true,
  grupo_nombre: "Café Quijano",
  cantante: null,
  espanol: true,
  ingles: false,
  es_de_Espana: true,
  genero: "Pop Latino",
  album: "La taberna del Buda",
  duracion: "3:42",
  pais_origen: "España",
  colabora: false
},
{
  nombre: "Whatever You Want",
  fecha_publicacion: "1979-08-12",
  grupo: true,
  grupo_nombre: "Status Quo",
  cantante: null,
  espanol: false,
  ingles: true,
  es_de_Espana: false,
  genero: "Rock / Hard Rock",
  album: "Whatever You Want",
  duracion: "4:03",
  pais_origen: "Reino Unido",
  colabora: false
},
{
  nombre: "Harry y su varita",
  fecha_publicacion: "2023-02-14",
  grupo: false,
  grupo_nombre: null,
  cantante: "John Pollon",
  espanol: true,
  ingles: false,
  es_de_Espana: true,
  genero: "Rap / Humor",
  album: "Single",
  duracion: "2:57",
  pais_origen: "España",
  colabora: false
},
{
  nombre: "Eye of the Tiger",
  fecha_publicacion: "1982-05-29",
  grupo: true,
  grupo_nombre: "Survivor",
  cantante: null,
  espanol: false,
  ingles: true,
  es_de_Espana: false,
  genero: "Rock / Hard Rock",
  album: "Eye of the Tiger",
  duracion: "4:05",
  pais_origen: "Estados Unidos",
  colabora: false
},
{
  nombre: "9472",
  fecha_publicacion: "2021-11-12",
  grupo: false,
  grupo_nombre: null,
  cantante: "Walls",
  espanol: true,
  ingles: false,
  es_de_Espana: true,
  genero: "Pop / Rap melódico",
  album: "Luna18",
  duracion: "3:00",
  pais_origen: "España",
  colabora: false
},
{
  nombre: "Disturbia",
  fecha_publicacion: "2008-07-04",
  grupo: false,
  grupo_nombre: null,
  cantante: "Rihanna",
  espanol: false,
  ingles: true,
  es_de_Espana: false,
  genero: "Pop / Dance",
  album: "Good Girl Gone Bad: Reloaded",
  duracion: "3:59",
  pais_origen: "Barbados",
  colabora: false
},
{
  nombre: "Pintao",
  fecha_publicacion: "2021-08-19",
  grupo: false,
  grupo_nombre: null,
  cantante: "Duki",
  espanol: true,
  ingles: false,
  es_de_Espana: false,
  genero: "Trap / Hip Hop",
  album: "Desde el fin del mundo",
  duracion: "3:02",
  pais_origen: "Argentina",
  colabora: false
}

];

///////// estado del juego ///////////
let cancionSeleccionada = null;
let vidas = 3;

///// elementos DOM /////
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const bienvenida = document.getElementById("bienvenida");
const instrucciones = document.getElementById("instrucciones");
const resultado = document.getElementById("resultado");
const zonaJuego = document.getElementById("zona-juego");
const vidasElem = document.getElementById("vidas");

const selectParametro = document.getElementById("parametro");
const btnPreguntar = document.getElementById("preguntar");
const btnSeleccionar = document.getElementById("seleccionar");
const inputNumero = document.getElementById("numero");
const btnAdivinar = document.getElementById("btn-adivinar");

const modal = document.getElementById("modal-pista");
const tipoPista = document.getElementById("tipo-pista");
const btnMostrarPista = document.getElementById("mostrar-pista");
const btnCerrarModal = document.getElementById("cerrar-modal");

// modales final
const modalGanar = document.getElementById("modal-ganar");
const modalPerder = document.getElementById("modal-perder");
const textoGanar = document.getElementById("texto-ganar");
const textoPerder = document.getElementById("texto-perder");
const preguntaPerder = document.getElementById("pregunta-perder");
const btnVolverJugarGanar = document.getElementById("btn-volver-jugar-ganar");
const btnVolverJugarPerder = document.getElementById("btn-volver-jugar-perder");
const btnIntentarPerder = document.getElementById("btn-intentar-perder");
const btnRevelarPerder = document.getElementById("btn-revelar-perder");

///// inicio juego /////
document.getElementById("empezar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  if (!nombre) return alert("Introduce tu nombre antes de continuar.");
  pantallaInicio.classList.add("oculto");
  pantallaJuego.classList.remove("oculto");
  bienvenida.textContent = `¡Bienvenido/a, ${nombre}! 🎧`;
  instrucciones.textContent = `Elige un número (1-${canciones.length}) y pulsa Seleccionar.`;
});

///// seleccionar canción /////
btnSeleccionar.addEventListener("click", () => {
  const num = parseInt(inputNumero.value, 10);
  if (!Number.isInteger(num) || num < 1 || num > canciones.length) {
    return alert(`Número no válido. Introduce un número entre 1 y ${canciones.length}.`);
  }
  cancionSeleccionada = canciones[num - 1];
  vidas = 3;
  actualizarVidas();
  resultado.textContent = `Canción seleccionada (#${num}). Puedes usar el menú y pulsar "Preguntar" o intentar "Adivinar".`;
  zonaJuego.classList.remove("oculto");
});

///// preguntar parámetro /////
btnPreguntar.addEventListener("click", () => {
  if (!cancionSeleccionada) return alert("Primero selecciona una canción.");
  const campo = selectParametro.value;
  let respuesta = "No disponible.";

  if (campo === "fecha_publicacion") respuesta = cancionSeleccionada.fecha_publicacion || "N/D";
  else if (campo === "genero") respuesta = cancionSeleccionada.genero || "N/D";
  else if (campo === "duracion") respuesta = cancionSeleccionada.duracion || "N/D";
  else if (campo === "pais_origen") respuesta = cancionSeleccionada.pais_origen || "N/D";
  else if (campo === "espanol") respuesta = cancionSeleccionada.espanol ? "Sí" : "No";
  else if (campo === "ingles") respuesta = cancionSeleccionada.ingles ? "Sí" : "No";
  else if (campo === "grupo") respuesta = cancionSeleccionada.grupo ? "Sí (es grupo)" : "No (es cantante)";

  resultado.textContent = `📀 ${respuesta}`;
});

///// modal pista (vivas==1) /////
function abrirModalPista(){
  if (!cancionSeleccionada || vidas !== 1) return;
  modal.setAttribute('aria-hidden','false');
  modal.classList.add('visible');
  tipoPista.focus();
}
function cerrarModalPista(){
  modal.setAttribute('aria-hidden','true');
  modal.classList.remove('visible');
}

btnCerrarModal.addEventListener('click', cerrarModalPista);
modal.addEventListener('click', (e)=>{
  if (e.target === modal) cerrarModalPista();
});

btnMostrarPista.addEventListener('click', ()=> {
  if (!cancionSeleccionada) return;
  const tipo = tipoPista.value;
  let letra = "?";
  if (tipo === "cancion") letra = cancionSeleccionada.nombre?.[0] ?? "?";
  else if (tipo === "album") letra = cancionSeleccionada.album?.[0] ?? "?";
  else if (tipo === "cantante") letra = cancionSeleccionada.cantante?.[0] ?? "?";
  else if (tipo === "grupo") letra = cancionSeleccionada.grupo_nombre?.[0] ?? "?";
  resultado.textContent = `⚡ Pista: la ${tipo} empieza por "${letra}".`;
  cerrarModalPista();
});

///// actualizar vidas /////
function actualizarVidas(){
  vidasElem.textContent = "❤️".repeat(Math.max(0,vidas));
}

///// perder (clásico) /////
function perder(){
  // mostrar mensaje resumen en pantalla antes de abrir modal
  if (!cancionSeleccionada) {
    resultado.textContent = `💀 Has perdido todas tus vidas.`;
  } else {
    let texto = `💀 Has perdido todas tus vidas. Era: "${cancionSeleccionada.nombre}".`;
    if (cancionSeleccionada.grupo) {
      texto += ` Grupo: ${cancionSeleccionada.grupo_nombre || 'N/D'}. Álbum: ${cancionSeleccionada.album || 'N/D'}.`;
    } else {
      texto += ` Cantante: ${cancionSeleccionada.cantante || 'N/D'}. Álbum: ${cancionSeleccionada.album || 'N/D'}.`;
    }
    resultado.textContent = texto;
  }
  zonaJuego.classList.add('oculto');
}

///// modales GANAR / PERDER /////
function abrirModalGanar() {
  if (!cancionSeleccionada) return;
  textoGanar.textContent = `SÍ! HAS GANADO! LA CANCIÓN ERA: ${cancionSeleccionada.nombre}`;
  modalGanar.setAttribute("aria-hidden", "false");
  modalGanar.classList.add("visible");
}

function abrirModalPerder() {
  textoPerder.textContent = "NO! HAS PERDIDO :(";
  preguntaPerder.textContent = "¿Quieres volverlo a intentar o saber ya la canción?";
  // limpiar cualquier info previa
  preguntaPerder.innerHTML = preguntaPerder.textContent;
  modalPerder.setAttribute("aria-hidden", "false");
  modalPerder.classList.add("visible");
}

function cerrarModalesFinal() {
  modalGanar.setAttribute("aria-hidden", "true");
  modalPerder.setAttribute("aria-hidden", "true");
  modalGanar.classList.remove("visible");
  modalPerder.classList.remove("visible");
}

///// botones modales finales /////
btnVolverJugarGanar.addEventListener("click", () => {
  cerrarModalesFinal();
  reiniciarJuego();
});

btnVolverJugarPerder.addEventListener("click", () => {
  cerrarModalesFinal();
  reiniciarJuego();
});

btnIntentarPerder.addEventListener("click", () => {
  cerrarModalesFinal();
  reiniciarJuego();
});

// mostrar todos los datos al pulsar "Revelar canción" en modal pérdida
btnRevelarPerder.addEventListener("click", () => {
  if (!cancionSeleccionada) return;
  // construir HTML con los campos en el orden pedido
  const idioma = cancionSeleccionada.espanol ? "Español" : (cancionSeleccionada.ingles ? "Inglés" : "Otro");
  const cantanteOGRupo = cancionSeleccionada.grupo ? (cancionSeleccionada.grupo_nombre || "N/D") : (cancionSeleccionada.cantante || "N/D");

  const html = `
    <div style="text-align:center;">
      <div><strong>Fecha:</strong> ${cancionSeleccionada.fecha_publicacion || 'N/D'}</div>
      <div><strong>País:</strong> ${cancionSeleccionada.pais_origen || 'N/D'}</div>
      <div><strong>Idioma:</strong> ${idioma}</div>
      <div><strong>Género:</strong> ${cancionSeleccionada.genero || 'N/D'}</div>
      <div><strong>${cancionSeleccionada.grupo ? 'Grupo' : 'Cantante'}:</strong> ${cantanteOGRupo}</div>
      <div><strong>Álbum:</strong> ${cancionSeleccionada.album || 'N/D'}</div>
      <h3 style="margin-top:12px; font-size:20px; color:#ffd54f;">${cancionSeleccionada.nombre}</h3>
    </div>
  `;
  preguntaPerder.innerHTML = html;
});

///// reinicio total /////
function reiniciarJuego() {
  pantallaInicio.classList.remove("oculto");
  pantallaJuego.classList.add("oculto");
  zonaJuego.classList.add("oculto");
  resultado.textContent = "";
  vidas = 3;
  actualizarVidas();
  inputNumero.value = "";
  document.getElementById("nombre").value = "";
  cancionSeleccionada = null;
  cerrarModalesFinal();
}

///// intentar adivinar (un solo prompt por intento) /////
btnAdivinar.addEventListener("click", () => {
  if (!cancionSeleccionada) return alert("Primero selecciona una canción.");

  // preguntar UNA VEZ qué tipo quiere adivinar
  const tipoRaw = prompt("¿Qué quieres adivinar? Escribe: cancion, grupo, cantante o album");
  if (!tipoRaw) return;
  const tipo = norm(tipoRaw);

  // intentar adivinar canción (ÚNICA QUE PUEDE GANAR Y ÚNICA QUE RESTA VIDA)
  if (["cancion","nombre","song"].includes(tipo)) {
    const intentoRaw = prompt("¿Cuál crees que es la canción?");
    if (!intentoRaw) return;

    const intento = norm(intentoRaw);

    if (intento === norm(cancionSeleccionada.nombre)) {
      // única forma de ganar
      abrirModalGanar();
      zonaJuego.classList.add("oculto");
      return;
    } else {
      // SOLO aquí se restan vidas
      vidas--;
      resultado.textContent = `❌ Incorrecto. Te quedan ${vidas} vidas.`;
      actualizarVidas();

      if (vidas === 1) abrirModalPista();
      if (vidas === 0) {
        perder();
        setTimeout(() => abrirModalPerder(), 400);
      }
      return;
    }
  }

  // ==============================
  // A partir de aquí: NO SE GANA y NO SE RESTA VIDA
  // ==============================

  // GRUPO
  if (["grupo","band","bandname"].includes(tipo)) {
    const intentoRaw = prompt("¿Cuál es el grupo?");
    if (!intentoRaw) return;

    const intento = norm(intentoRaw);
    const correcto = cancionSeleccionada.grupo ? norm(cancionSeleccionada.grupo_nombre || "") : "";

    if (intento === correcto) {
      resultado.textContent = "✔️ Acertaste el grupo, PERO SOLO SE GANA ADIVINANDO LA CANCIÓN.";
    } else {
      resultado.textContent = "❌ No es ese el grupo. (No pierdes vidas)";
    }
    return;
  }

  // CANTANTE
  if (["cantante","vocal","singer"].includes(tipo)) {
    const intentoRaw = prompt("¿Cuál es el/la cantante?");
    if (!intentoRaw) return;

    const intento = norm(intentoRaw);
    const correcto = !cancionSeleccionada.grupo ? norm(cancionSeleccionada.cantante || "") : "";

    if (intento === correcto) {
      resultado.textContent = "✔️ Acertaste el cantante, PERO SOLO SE GANA ADIVINANDO LA CANCIÓN.";
    } else {
      resultado.textContent = "❌ No es ese el/la cantante. (No pierdes vidas)";
    }
    return;
  }

  // ÁLBUM
  if (["album","disco"].includes(tipo)) {
    const intentoRaw = prompt("¿Cuál es el álbum?");
    if (!intentoRaw) return;

    const intento = norm(intentoRaw);
    const correcto = norm(cancionSeleccionada.album || "");

    if (intento === correcto) {
      resultado.textContent = "✔️ Acertaste el álbum, PERO SOLO SE GANA ADIVINANDO LA CANCIÓN.";
    } else {
      resultado.textContent = "❌ Ese no es el álbum. (No pierdes vidas)";
    }
    return;
  }

  alert("Tipo no reconocido. Usa: cancion, grupo, cantante o album.");
});

///// atajos - evita submit accidental /////
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Enter') {
    if (!pantallaInicio.classList.contains('oculto')) {
      document.getElementById('empezar').click();
    } else if (!zonaJuego.classList.contains('oculto')) {
      // no hacer nada por defecto
    }
  }
});
