import { getDogs } from './fetch-utils.js';
import { renderDogs } from './render-utils.js';

// import functions and grab DOM elements



const firstListEl = document.getElementById('first-list');


window.addEventListener('load', async() => {
    const allDogs = await getDogs();
    const renderedDogs = renderDogs(allDogs);
    firstListEl.append(renderedDogs);
});


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
