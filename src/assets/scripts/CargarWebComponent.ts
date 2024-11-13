// Requiere ejecutarse en el contexto de la página
import '/src/styles/WebComponent.css';

var chatVisible = false;
document.getElementById('chatZoRROButton')?.addEventListener('click', () => {
  const chatZoRRO = document.querySelector('chat-zorro');
  if (!chatZoRRO) {
    return;
  }
  if (chatVisible) {
    chatZoRRO.classList.remove('visible');
  } else {
    chatZoRRO.classList.add('visible');
  }
  chatVisible = !chatVisible;
});