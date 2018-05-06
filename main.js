const planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9],
];
//below reverses the order of the array, therefore reversing the order the planets appear in the UI dropdown list. A bonus item for the project.
planets.reverse();

const sel = document.getElementById('planets');
const fragment = document.createDocumentFragment();

planets.forEach(function(planet, index) {
    let opt = document.createElement('option');
    opt.innerHTML = planet[0];
    opt.value = planet[0];
    fragment.appendChild(opt);
});

sel.appendChild(fragment);

function calculateWeight(weight, planetName) {
    weight = document.getElementById('user-weight').value;
    planetName = document.getElementById('planets').value;
    let newWeight = 0;
    for (let i = 0; i < planets.length; i++) {
        if (planets[i][0] === planetName) {
            newWeight = planets[i][1] * weight;
        }
    }
    return newWeight;
};

function handleClickEvent(e) {
    let userWeight = document.getElementById('user-weight').value;
    let planetName = document.getElementById('planets').value;
    let result = calculateWeight();
    document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
};

document.getElementById('calculate-button').addEventListener('click', function(){handleClickEvent()});
 