

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

const cardData = [
  {
    type:"FREE",
    price:"$0",
    user:"Single User",
    upp:"false",
    support:"false",
    domain:"false",
    msr :"false"
  },
  {
    type:"PLUS",
    price:"$9",
    user:"5 Users",
    upp:"true",
    support:"true",
    domain:"true",
    msr :"false"
  },
  {
    type:"PRO",
    price:"$49",
    user:"Unlimited Users",
    upp:"true",
    support:"true",
    domain:"true",
    msr :"true"
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container bg-primary mt-3">

      {/* <Card type="FREE" price="$0"  user="Single User" upp="false" support="false"  domain="false" msr = "false"/>
      <Card type="PLUS" price="$9"  user="5 Users" upp="true" support="true"  domain="true" msr = "false"/>
      <Card type="PRO" price="$49"  user="Unlimited Users" upp="true" support="true"  domain="true" msr = "true"/>  
       */}

       {cardData.map((ele)=>(<Card{...ele}/>))}

      </div>
    </>
  )
}

export default App
