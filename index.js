fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {

        const asianCountries = data.filter(country => country.region === 'Asia');
        console.log('Asian Countries:', asianCountries.map(country => country.name.common));


        const lowPopulationCountries = data.filter(country => country.population < 200000);
        console.log('Countries with population < 200,000:', lowPopulationCountries.map(country => country.name.common));


        console.log('Details of countries:');
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.svg}`);
        });


        const totalPopulation = data.reduce((total, country) => total + country.population, 0);
        console.log('Total Population of Countries:', totalPopulation);


        const usdCountries = data.filter(country => 
            country.currencies && Object.values(country.currencies).some(currency => currency.name === 'United States Dollar')
        );
        console.log('Countries using US Dollar as currency:', usdCountries.map(country => country.name.common));
    })
    .catch(error => console.error('Error fetching data:', error));
