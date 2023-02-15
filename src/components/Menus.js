import React from 'react'
import { useEffect, useState } from 'react'
import Hero from './Hero'
import  SpecialDishes from './SpecialDishes'


function Menus() {
  const [menu, setMenu] = useState([])

  async function fetchData() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    let Response = await fetch(API_URL)
    let data = await Response.json()
    setMenu(data.meals)



  }

  useEffect(() => {

    fetchData()

  }, [])

  console.log("the menus are", menu);


  return (
    <div>
    <Hero />
    < SpecialDishes specialMenu={menu}/>
    </div>

  )
}

export default Menus