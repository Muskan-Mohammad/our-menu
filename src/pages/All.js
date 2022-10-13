import React from 'react'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Shakes from './Shakes'

function All() {
  return (
    <div class="row">
    <div class="section-center  ">
        <Breakfast />
        <Lunch/>
        <Shakes/>
   
    </div>
    </div>
  )
}

export default All
