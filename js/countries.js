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
            <p>Capital: ${country.capital ? country.capital[0]:'No Capital'}</p>
        `;
        cuntriesContainer.appendChild(countryDiv);
    });
}

loadCountries()