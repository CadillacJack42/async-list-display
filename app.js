import { getDogs, getCannabis, getArtists, getBeatles } from './fetch-utils.js';
import { renderDogs, renderCannabis, renderArtists, renderBeatles } from './render-utils.js';

// import functions and grab DOM elements



const firstListEl = document.getElementById('first-list');
const secondListEl = document.getElementById('second-list');
const thirdListEl = document.getElementById('third-list');
const fourthListEl = document.getElementById('fourth-list');


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

window.addEventListener('load', async() => {
    const beatles = await getBeatles();

    const title = document.createElement('p');
    title.textContent = "The Beatles were a Rock 'n' roll band. The members were: ";

    fourthListEl.append(title);
    
    for (const beatle of beatles) {
        const newBeatle = renderBeatles(beatle);
        fourthListEl.append(newBeatle);
    }
});


