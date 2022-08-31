const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (user) => {
    // const cuntriesContainer = document.getElementById('countries-container');
    // for(const use of user) {
    //     console.log(use)
    //     const newDiv = document.createElement('div');
    //     newDiv.innerHTML = `
    //         <h4>Country Name: ${use.name.common}  </h4>
    //         <span> Official Name: ${use.name.official} </span>
    //     `;
    //     cuntriesContainer.appendChild(newDiv)
    // }
    const cuntriesContainer = document.getElementById('countries-container');
    user.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common} </h3>
            <p>Capital: ${country.capital ? country.capital[0]:'No Capital '}</p>
            <button onclick = "loadCountryDetail('${country.cca2}')">Details</button>
        `;
        cuntriesContainer.appendChild(countryDiv);
    });
}

const loadCountryDetail = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail  = country =>{
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML =  `
        <h2>Details: ${country.name.common} </h2>
        <img src = "${country.flags.png}">
    `
}

loadCountries();