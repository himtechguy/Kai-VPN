const connectBtn = document.getElementById('connectBtn');
const statusText = document.getElementById('statusText');
const message = document.getElementById('message');
const orb = document.getElementById('orb');
const serverSelect = document.getElementById('serverSelect');
const locationText = document.getElementById('locationText');

document.getElementById('year').textContent = new Date().getFullYear();

serverSelect.addEventListener('change', () => {
  locationText.textContent = serverSelect.value;
  message.textContent = `Selected ${serverSelect.value}. A real server must be configured before connecting.`;
});

connectBtn.addEventListener('click', () => {
  statusText.textContent = 'PREVIEW MODE';
  message.textContent = 'The interface is working, but no VPN tunnel is configured yet.';
  connectBtn.textContent = 'NOT CONFIGURED';
  connectBtn.disabled = true;
  connectBtn.style.opacity = '0.65';
  orb.classList.remove('active');
});
