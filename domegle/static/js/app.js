const startChatBtn = document.querySelector('.start-chat-btn');
const chatWindow = document.querySelector('.chat-window');
const messages = document.querySelector('.messages');
const inputBox = document.querySelector('.input-box input');
const sendBtn = document.querySelector('.send-btn');

let ws;

startChatBtn.addEventListener('click', () => {
  startChatBtn.style.display = 'none';
  chatWindow.style.display = 'block';
  connectWebSocket();
});

function connectWebSocket() {
  ws = new WebSocket('ws://localhost:3000');

  ws.addEventListener('open', () => {
    console.log('WebSocket connected');
  });

  ws.addEventListener('message', (event) => {
    const message = event.data;
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messages.appendChild(messageElement);
  });

  ws.addEventListener('close', () => {
    console.log('WebSocket disconnected');
  });
}

sendBtn.addEventListener('click', () => {
  const message = inputBox.value.trim();

  if (message) {
    ws.send(message);
    inputBox.value = '';
  }
});

inputBox.addEventListener('keydown', (event) => {
  const message = inputBox.value.trim();

  if (message && event.key === 'Enter') {
    ws.send(message);
    inputBox.value = '';
  }
});

