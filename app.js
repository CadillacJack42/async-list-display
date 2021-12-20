import { getDogs, getCannabis } from './fetch-utils.js';
import { renderDogs } from './render-utils.js';

// import functions and grab DOM elements



const firstListEl = document.getElementById('first-list');


window.addEventListener('load', async() => {
    const allDogs = await getDogs();
    const renderedDogs = renderDogs(allDogs);
    firstListEl.append(renderedDogs);
});


window.addEventListener('load', async() => {
    const strains = await getCannabis();
    console.log(strains);
});


