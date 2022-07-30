import React, {useEffect} from 'react'
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import './liveUpdate.scss'

export const LiveUpdate = () => { 
  const {ListByCountries } = useActions();
  const {data} = useTypedSelector((state) => state.totalCountries)

  const results: any = data


  let sortedInput = results.slice().sort((a: any, b: any) => b.cases - a.cases);
  const items = sortedInput.slice(0, 7)
  
  useEffect(() => {
    ListByCountries()
    // eslint-disable-next-line 
  },[])
  return (
    <>
    <div className='liveupdates'>
      <div className='liveupdates__title'>
        <div className='liveupdates__title__sub'>
          <h2>Live Update</h2>
        </div>
        <div className='liveupdates__title__sub'><h2>View All</h2></div>
      </div>
    <div className='liveupdates__main'>
      {items.map((value: any) => {
        return <div key={value.country}>
          <div className='liveupdates__main__span'>
            <div className='liveupdates__main__flag'><img src={value.countryInfo.flag} alt='flag png' className='FlagImage'/></div>
            <div className='liveupdates__main__country'>{value.country}</div>
            <div className='liveupdates__main__cases'>{value.cases}</div>
            </div>
        </div>
      })}
    </div>
    </div>

    </>
    
  )
}
