import React from 'react'

function SpecialDishes(props) {


    console.log("props",props.specialMenu);

    let SpecialDishes=props.specialMenu.map((item)>={
        return(
            <li></li>
        )
    })



  return (
    <div className='SpecialDishesContainer'> 
    <div className="SpecialDishesContent">
        <h1>Our Specials</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aut suscipit beatae tempore itaque molestiae exercitationem recusandae provident?</p>
    </div>

    </div>
  )
}

export default SpecialDishes