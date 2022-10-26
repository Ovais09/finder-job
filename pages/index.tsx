import {useState} from 'react'

export default function Home({ sortedCountryNames }: { sortedCountryNames: string[] }) {


  function changeCity(countryValue: string) {
    const citiesArray: any = []
    setCountryName(countryValue)

    fetch(`https://countriesnow.space/api/v0.1/countries/population/cities`)
      .then(response => response.json())
      .then(result => {
        result.data.forEach((item: any) => {
          if (item.country == countryValue)
            citiesArray.push([item.city])
        })
      })
    .then(() => setCities(citiesArray.sort()))
  
    
    
  }


  const [countryName, setCountryName] = useState('')
  const [cities, setCities] = useState([])
  return (
    <div>
      <label htmlFor="job">Job Position</label>
      <br/>
      <input type = "text" id = "job"></input>
      <select title = "All countries" onChange = {(event) => changeCity(event.target.value)} >
        {sortedCountryNames.map((countryName: string) => {
          return <option key = {countryName}>{countryName}</option>
        })}
      </select>
      <select title = "selected country">
        {cities.map((city: any) => {
          return <option key={city}> {city}</option>
        })}
      </select>
    </div>
  )
}

export async function getStaticProps() {
  const allCountryNames: string[] = []
  const res = await fetch('https://restcountries.com/v3.1/all').then(response => response.json()) // Get all countries

  res.forEach((item: any) => {
    allCountryNames.push(item.name.common)
  })

  const sortedCountryNames = allCountryNames.sort()

    return {
      props: {
        sortedCountryNames
      },
    }
}

