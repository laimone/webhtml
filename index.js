

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  // Tratamento de simissao de Formularios
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Registro de dados do Formulario no console
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData));
    // Limpa entrada do console
    this.reset();
  });