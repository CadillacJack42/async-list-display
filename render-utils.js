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