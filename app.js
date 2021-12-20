import { dogs } from './fetch-utils.js';
import { renderDogs } from './render-utils.js';

// import functions and grab DOM elements



const firstListEl = document.getElementById('first-list');

const dogList = async() => {
    const list = await dogs();
    const renderedList = renderDogs(list);
    firstListEl.append(renderedList);
};
dogList();


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
