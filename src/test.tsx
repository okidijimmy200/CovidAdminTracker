import React, {useEffect}  from 'react'
import { useTypedSelector } from './hooks/useTypeSelector';
import { useActions } from './hooks/useActions';
import { VictoryPie, VictoryLabel} from "victory"


import './totalCases.scss'

export const TotalCases = () => { 
  const {ListTotalCases } = useActions();
  const {data} = useTypedSelector((state) => state.totalCases)
  console.log(data)
  const results: any = data

  const percent = ((results.deaths / results.cases) * 100).toFixed(1)
  console.log(percent)
      useEffect(() => {
      ListTotalCases()
      // eslint-disable-next-line 
    },[])
  return (
    <>
<div className='totalcases_sub'>
<svg width={150} height={150}>
  <circle cx={90} cy={90} r={20} fill="#c43a31"/>
  <VictoryPie
    standalone={false}
    data={[
      { x: " ", y: [results.deaths]},
      { x: " ", y: [results.cases - results.deaths] }
    ]}
    colorScale={["#c43a31", "#ffcff1" ]}
    width={180} height={180}
    innerRadius={50}
  />
     <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 14, fill: '#fff' }}
          x={90} y={90}
          text={percent + '%'}/>
</svg>
</div>
    
    </>
  )
}
