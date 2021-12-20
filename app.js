import { getDogs, getCannabis, getArtists } from './fetch-utils.js';
import { renderDogs, renderCannabis, renderArtists } from './render-utils.js';

// import functions and grab DOM elements



const firstListEl = document.getElementById('first-list');
const secondListEl = document.getElementById('second-list');
const thirdListEl = document.getElementById('third-list');


window.addEventListener('load', async() => {
    const allDogs = await getDogs();
    const renderedDogs = renderDogs(allDogs);
    firstListEl.append(renderedDogs);
});


window.addEventListener('load', async() => {
    const strains = await getCannabis();
    
    for (const strain of strains) {
        const newStrain = renderCannabis(strain);
        secondListEl.append(newStrain);
    }
});

window.addEventListener('load', async() => {
    const artists = await getArtists();
    
    for (const artist of artists) {
        const newArtist = renderArtists(artist);
        thirdListEl.append(newArtist);
    }
});


