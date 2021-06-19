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

/* import JSON */
import DATA from '../data/DATA.json';

/* Event Handler -> menu toggle nav */
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-list').classList.toggle('nav-list-block');
});

/* Fungsi menampilkan data JSON */
// eslint-disable-next-line require-jsdoc
function getData(data) {
  let renderHTML = '';

  data.restaurants.forEach((data) => {
    renderHTML += `
            <article tabindex="0" class="card">
                <img tabindex="0" class="card-image" 
                    src="${data.pictureId}" 
                    alt="${data.alt}" 
                    height="250">
                <span tabindex="-1" class="card-rating">
                    <i title="icon rating" class="fa fa-star"></i>
                    <span>${data.rating}</span>
                </span>
                <div class="card-text-section">
                    <a href="${data.website}">
                        <h2 tabindex="0" class="card-title">${data.name}</h2>
                    </a>
                    <p tabindex="0" class="card-city">${data.city}</p>
                    <p tabindex="0" class="card-description truncate">
                        ${data.description}
                    </p>
                </div>
            </article>
        `;
  });

  // Append to DOM
  document.getElementById('restaurant-list').innerHTML = renderHTML;
}

getData(DATA);
