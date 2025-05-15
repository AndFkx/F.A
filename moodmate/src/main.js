import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <p id="respuesta"></p>
    <input type="text" id="estado" placeholder="¿Cómo te sientes?" />
    <button id="enviar">Enviar</button>
  </div>
`

document.addEventListener('DOMContentLoaded', () => {
  const boton = document.querySelector('#enviar')
  const input = document.querySelector('#estado')
  const respuesta = document.querySelector('#respuesta')

  boton.addEventListener('click', () => {
    const valor = input.value.toLowerCase()
    if (valor === 'feliz') {
      respuesta.textContent = '¡Me alegra saber que estás feliz! 😊'
    } else if (valor === 'triste') {
      respuesta.textContent = 'Lo siento... aquí estoy si necesitas hablar. 💙'
    } else if (valor === 'enojado') {
      respuesta.textContent = 'Es normal sentirse así a veces. ¿Qué pasó? 😡'
    } else if (valor === 'emocionado') {
      respuesta.textContent = '¡Qué bien que estés tan emocionado! 🙌'
    } else if (valor === 'estresado') {
      respuesta.textContent = 'El estrés es difícil de llevar. Respira profundo, todo pasará. 🌿'
    } else if (valor === 'aburrido') {
      respuesta.textContent = '¡A veces la rutina puede ser monótona! ¿Qué te gustaría hacer? 🤔'
    } else if (valor === 'sorprendido') {
      respuesta.textContent = '¡Me encanta cuando la vida nos sorprende! 😲'
    } else if (valor === 'agradecido') {
      respuesta.textContent = '¡Qué bonito sentirse agradecido! Apreciemos lo que tenemos. 🙏'
    } else if (valor === 'ansioso') {
      respuesta.textContent = 'La ansiedad puede ser abrumadora. Intenta relajarte y tomar un respiro. 🌸'
    } else {
      respuesta.textContent = 'Gracias por compartir cómo te sientes.'
    }
  })
})
