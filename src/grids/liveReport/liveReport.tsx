import React, {useEffect} from 'react'
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import CovidMap from '../covidmap/CovidMap'
import Loading from '../../Loading/Loading';

import './liveReport.scss'

export const LiveReport= () => { 
  const {ListGeoCountries } = useActions();
  const {result} = useTypedSelector((state) => state.GeoCountries)

  const { data} = useTypedSelector((state) => state.totalCountries)

  const countries: any = data
  const new_result: any = result

  const CountryColor =(mapCountry: any) => {
    if (mapCountry.cases >= 20000000) {
      mapCountry.properties.color = 'red'
    } 
    // else {
    //   mapCountry.properties.color = 'rgb(255, 207, 241)'
    // }
  }

  const processCovidData = () => {
    
    const tem = []
    for (let i in new_result.features) {
      const mapCountry = new_result.features[i]
      const covidCountry = countries.find((covidCountry:any) => covidCountry.countryInfo.iso3 === mapCountry.properties.ISO_A3)
      const result = {
        ...mapCountry,
        ...covidCountry
      }
      // const topCases = 
      result.properties.confirmed = 0;
      result.properties.confirmedText = '0'

    if (covidCountry != null) {
      const confirmed = Number(result.cases)
      result.properties.confirmed =confirmed
      result.properties.confirmedText = confirmed
    }
    CountryColor(result)

      tem.push(result)
    }

    // list the 7 countries
    let sortedInput = tem.slice().sort((a: any, b: any) => b.cases - a.cases);
    const items = sortedInput.slice(0, 7)

    console.log(items)
    return tem
  }
  const test = processCovidData()

  const new_test : any = test

  // console.log(new_test)

  useEffect(() => {
    ListGeoCountries()
    processCovidData()
    // eslint-disable-next-line 
  },[])

  return (
    <>
     <div className='livereports'>
      {new_test.length === 0 ? <Loading /> : <CovidMap countries={new_test}/>}
      
</div>
    </>
   
  )
}
