import fetch from 'node-fetch';


const url = "https://swapi.dev/api/people?page=2";

async function getStarWarsData() {
    try {
        const data = await fetch(url);
        const starWarsData = await data.json();
        // console.log(starWarsData);
        manipulateArray(starWarsData.results);
    } catch (err) {
        console.log(err);
    }
}

getStarWarsData();


const massFilter = arr => arr.mass > 70
const sortByMass = (a, b) => a.mass - b.mass;
const totalMassReducer = (accumulator, current) => accumulator = accumulator + current.mass
const countByEyeColorReducer = (accumulator, current) => {
    let eyeColor = current.eyeColor;
    if(accumulator[eyeColor]) {
        accumulator[eyeColor]++;
    } else {
        accumulator[eyeColor] = 1;
    }
    return accumulator;
}

function manipulateArray(data) {
    const massfilterteddata = data.filter(massFilter);
    const mappedData = data.map(eachdata => {
        if (eachdata.mass != 'unknown') {
            return {
                name: eachdata.name,
                height: eachdata.height,
                hairColor: eachdata.hair_color,
                skinColor: eachdata.skin_color,
                eyeColor: eachdata.eye_color,
                gender: eachdata.gender,
                mass: Number(eachdata.mass.replace(',', '')),
                birthYr: eachdata.birth_year
            }
        } else {
            return {
                name: eachdata.name,
                height: eachdata.height,
                hairColor: eachdata.hair_color,
                skinColor: eachdata.skin_color,
                eyeColor: eachdata.eye_color,
                gender: eachdata.gender,
                birthYr: eachdata.birth_year
            }
        }
    });
    const massSorted = mappedData.sort(sortByMass);
    let totalMass = mappedData.reduce((acc, curr) => {
        if (curr.mass && curr.mass != NaN) {
            return acc + curr.mass
        } else {
            return acc
        }
    }, 0);    
    const countByEyeColor = mappedData.reduce(countByEyeColorReducer, {});
    
    const grpupedData = mappedData.reduce((acc, curr) => {
        acc[curr.eyeColor] = [...acc[curr.eyeColor] || [], curr];
        return acc;
    });
}