// const body = document.querySelector('body'),
//   sidebar = body.querySelector('nav'),
//   toggle = body.querySelector('.toggle'),
//   searchBtn = body.querySelector('.search-box'),
//   modeSwitch = body.querySelector('.toggle-swicth'),
//   modeText = body.querySelector('.mode-text');


// toggle.addEventListener('Click', () => {
//      sidebar.classList.toggle('sidebar-close');
// })

// searchBtn.addEventListener('Click', () => {
//      sidebar.classList.remove('sidebar-close');
// })

// modeSwitch.addEventListener('Click', () => {
//      body.classList.toggle('dark');

//      if (body.classList.contains('dark')) {
//          modeText.innerText = 'Light mode';
//      } else {
//          modeText.innerText = 'Dark mode';
//      }
// });

// const boton = document.getElementById('barra');
// // const nav = document.getElementById('barra');

// boton.addEventListener('Click', function (){
//     document.header.style.backgroundColor = '#212121';
//     console.log('Hola Mundo')
// })


const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('cookies-aviso');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

avisoCookies.classList.add('activo');
fondoAvisoCookies.classList.add('activo');

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);
} );