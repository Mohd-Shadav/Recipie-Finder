import React from 'react'
import 'ldrs/ring'
import { cardio } from 'ldrs'

cardio.register()


export const Loader = () => {
  return (
    <div className='d-flex justify-content-center align-item-center m-3'>
<l-cardio
  size="50"
  stroke="4"
  speed="2" 
  color="black" 
></l-cardio>
    </div>
  )
}
