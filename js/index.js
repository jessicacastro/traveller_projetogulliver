// ABRIR E FECHAR MODAL LOGIN

function openModal() {
  document.getElementById('modal').style.top = "50%";
}

function closeModal() {
  document.getElementById('modal').style.top = "-100%";
}

const goTo = (element) => {
  const el = document.querySelector(element);
  el.scrollIntoView({ behavior: 'smooth' })
}