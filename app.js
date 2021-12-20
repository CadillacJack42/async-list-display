import { getDogs, getCannabis } from './fetch-utils.js';
import { renderDogs, renderCannabis } from './render-utils.js';

// import functions and grab DOM elements



const firstListEl = document.getElementById('first-list');
const secondListEl = document.getElementById('second-list');


window.addEventListener('load', async() => {
    const allDogs = await getDogs();
    const renderedDogs = renderDogs(allDogs);
    firstListEl.append(renderedDogs);
});


window.addEventListener('load', async() => {
    const strains = await getCannabis();
    
    for (const strain of strains) {
        const newStrain = renderCannabis(strain);
        console.log(newStrain);
        secondListEl.append(newStrain);
    }
});


