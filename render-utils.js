export const renderDogs = (dogs) => {
    for (const dog of dogs) {
        const dogKennel = document.createElement('div');
        const dogNameEl = document.createElement('p');
        const dogAgeEl = document.createElement('span');
        const dogBreedEl = document.createElement('p');
        const isGoodDogEl = document.createElement('p');

        dogNameEl.textContent = dog.name;
        dogAgeEl.textContent = ` is ${dog.age} years old. `;
        dogBreedEl.textContent = `${dog.name}s breed is ${dog.breed}.`;
        isGoodDogEl.textContent = `Is a good dog? : ${dog.good_dog}`;

        dogKennel.append(dogNameEl, dogAgeEl, dogBreedEl, isGoodDogEl);

        return dogKennel;

    }
};