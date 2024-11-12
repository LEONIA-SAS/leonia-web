// Requiere ejecutarse en el contexto de la página
const linkStyles = document.createElement('link');
linkStyles.rel = 'stylesheet';
linkStyles.id = 'webComponentStyles';
linkStyles.href = '/src/styles/WebComponent.css';
document.head.appendChild(linkStyles);


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