
  const frases = [
    "Reparo de computadores",
    "Papelaria",
    "Gráfica e serviços de impressão",
    "Serviços de TI e suporte técnico",
  ];

  let index = 0;
  const elemento = document.getElementById("texto-rotativo");

  setInterval(() => {
    elemento.classList.add("fade");

    setTimeout(() => {
      index = (index + 1) % frases.length;
      elemento.textContent = frases[index];
      elemento.classList.remove("fade");
    }, 400); // tempo da animação do fade
  }, 2000); // troca a cada 2 segundos

