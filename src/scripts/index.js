/* for async await transpile */
import 'regenerator-runtime'

/* import CSS */
import '../styles/root.css'
import '../styles/header.css'
import '../styles/main.css'
import '../styles/footer.css'
import '../styles/responsive.css'

/* import JSON */
import DATA from '../data/DATA.json'

function getData(data) {
    let renderHTML = ''

    data.restaurants.forEach((data, i) => {
        renderHTML += `
            <article tabindex="0" class="card">
                <img tabindex="0" class="card-image" src="${data.pictureId}" alt="${data.alt}">
                <span tabindex="-1" class="card-rating">
                    <i title="icon rating" class="fa fa-star"></i>
                    <span>${data.rating}</span>
                </span>
                <div class="card-text-section">
                    <a href="${data.website}">
                        <h2 tabindex="0" class="card-title">${data.name}</h2>
                    </a>
                    <p tabindex="0" class="card-city">${data.city}</p>
                    <p tabindex="0" class="card-description truncate">${data.description}</p>
                </div>
            </article>
        `
    })

    // Append to DOM
    document.getElementById('restaurant-list').innerHTML = renderHTML
}

getData(DATA)