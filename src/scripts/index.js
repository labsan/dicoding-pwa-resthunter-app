/* for async await transpile */
import 'regenerator-runtime';

/* import elements CSS */
import '../styles/root.css';
import '../styles/elements/header.css';
import '../styles/elements/main.css';
import '../styles/elements/footer.css';

/* import responsives CSS */
import '../styles/responsives/small-devices.css';
import '../styles/responsives/medium-devices.css';
import '../styles/responsives/large-devices.css';

/* Import Custom Element */
import './components/navbar';
import './components/hero';
import './components/footer';

/* import JS */
import App from './views/app'; 

/* Init App */ 
const APP = new App({
    button: document.querySelector('.menu'),
    drawer: document.querySelector('.nav-list'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    APP.renderPage();
});

window.addEventListener('load', () => {
    APP.renderPage();
});
