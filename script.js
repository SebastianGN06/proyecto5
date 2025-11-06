const botonesMas = document.querySelectorAll('.mas');
const botonesMenos = document.querySelectorAll('.menos');
const valores = document.querySelectorAll('.valor');

botonesMas.forEach((boton, i) => {
  boton.addEventListener('click', () => {
    let num = parseInt(valores[i].textContent);
    valores[i].textContent = num + 1;
  });
});

botonesMenos.forEach((boton, i) => {
  boton.addEventListener('click', () => {
    let num = parseInt(valores[i].textContent);
    if (num > 0) valores[i].textContent = num - 1;
  });
});
