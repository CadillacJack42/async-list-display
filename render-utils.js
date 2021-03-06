export const renderDogs = (dogs) => {
    const dogKennel = document.createElement('div');
    for (const dog of dogs) {
        const dogContainerEl = document.createElement('div');
        dogContainerEl.classList.add('dog-item');

        const dogNameEl = document.createElement('p');
        dogNameEl.classList.add('dog-p');

        const dogAgeEl = document.createElement('span');

        const dogBreedEl = document.createElement('p');
        dogBreedEl.classList.add('dog-p');

        const isGoodDogEl = document.createElement('p');
        isGoodDogEl.classList.add('dog-p');

        dogNameEl.textContent = dog.name;
        dogAgeEl.textContent = `${dog.name} is ${dog.age} years old. `;
        dogBreedEl.textContent = `${dog.name}s breed is ${dog.breed}.`;
        isGoodDogEl.textContent = `Is ${dog.name} a good dog? : ${dog.good_dog}`;

        dogContainerEl.append(dogNameEl, dogAgeEl, dogBreedEl, isGoodDogEl);

        dogKennel.append(dogContainerEl);
    }
    return dogKennel;
};

export const renderCannabis = (strain) => {
    const straincontainer = document.createElement('div');
    straincontainer.classList.add('cannabis-item');

    const strainNameEl = document.createElement('p');
    strainNameEl.classList.add('strain');
    
    const growerEl = document.createElement('p');
    growerEl.classList.add('strain');

    const description = `${strain.strain} has ${strain.thc}% THC and ${strain.cbd}% CBD.`;
    strainNameEl.textContent = description;

    const grownBy = `${strain.strain} was grown by ${strain.grower}.`;
    growerEl.textContent = grownBy;

    straincontainer.append(growerEl, strainNameEl);

    return straincontainer;
};

export const renderArtists = (artist) => {
    const artistContainer = document.createElement('div');
    artistContainer.classList.add('artist-item');

    const artistNameEl = document.createElement('p');
    artistNameEl.classList.add('artist');
    
    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('artist');

    artistNameEl.textContent = artist.name;

    descriptionEl.textContent = `
    ${artist.name} was from ${artist.origin_country}.
    They lived from ${artist.life}.
    ${artist.name} was a part of the ${artist.style} movement.
    `;

    artistContainer.append(artistNameEl, descriptionEl);

    return artistContainer;
};

export const renderBeatles = (beatle) => {
    const beatleContainer = document.createElement('div');
    beatleContainer.classList.add('beatle-item');

    const beatleAlive = isAlive(beatle.alive);
    
    const description = document.createElement('p');

    description.textContent = `${beatle.name} (${beatle.life}) played the ${beatle.instrument}. ${beatle.name}${beatleAlive}`;

    beatleContainer.append(description);

    return beatleContainer;
};

const isAlive = (alive) => {
    if (alive) {
        return ' is alive.';
    } else {
        return ' is not alive.';
    }
};