import React, { useState } from 'react';

function Interview() {
  const countries = [
    {
      name: "India",
      value: "IN",
      city: ['delhi', 'mumbai'],
    },
    {
      name: "USA",
      value: "US",
      city: ['newyork', 'los angeles'],
    },
    {
      name: "Japan",
      value: "JP",
      city: ['tokyo', 'osaka'],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[1]); // Initialize with the first country

  const handleCountryChange = (event) => {
    const selectedCountryValue = event.target.value;
    console.log(selectedCountryValue);
    const selectedCountryObject = countries.find((country) => country.value === selectedCountryValue);
    setSelectedCountry(selectedCountryObject);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <select onChange={handleCountryChange} value={selectedCountry.value}>
        {countries.map((country) => (
          <option value={country.value}>
            {country.name}
          </option>
        ))}
      </select>

      <select>
        {selectedCountry.city.map((city,item) => (
          <option key={item} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Interview;
