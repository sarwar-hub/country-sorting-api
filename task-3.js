// Load by Region

const loadDataByRegion = async(region) => {
    try{
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await res.json();
        displayDataByRegion(data);
    } catch(error) {
        console.log(error);
    }
}


// display data
const displayDataByRegion = (countries) => {
    // get container
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = '';
    countries.forEach(country => {
        // create element
        const div = document.createElement('div');
        div.classList.add('p-5', 'bg-red-700/50', 'rounded');
        div.innerHTML = `
            <h1 class="text-3xl">${country.name.common}</h1>
            <p>${country.capital[0]}</p>
        `;
        countryContainer.appendChild(div);
    })
}


// change by select
document.getElementById('select-region').addEventListener('change', function(){
    const selected = document.getElementById('select-region').value;

    loadDataByRegion(selected);
})


// function called
loadDataByRegion();





























// Load by Region

const loadDataByLanguage = async(lang) => {
    try{
        const res = await fetch(`https://restcountries.com/v3.1/lang/${lang}`);
        const data = await res.json();
        displayDataByLanguage(data);
    } catch(error) {
        console.log(error);
    }
}


// display data
const displayDataByLanguage = (countries) => {
    // get container
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = '';
    countries.forEach(country => {
        // create element
        const div = document.createElement('div');
        div.classList.add('p-5', 'bg-red-700/50', 'rounded');
        div.innerHTML = `
            <h1 class="text-3xl">${country.name.common}</h1>
            <p>${country.capital[0] ? country.capital : 'No capital'}</p>
        `;
        countryContainer.appendChild(div);
    })
}


// change by select
document.getElementById('select-language').addEventListener('change', function(){
    const selected = document.getElementById('select-language').value;

    loadDataByLanguage(selected);
})


// function called
loadDataByLanguage('english');