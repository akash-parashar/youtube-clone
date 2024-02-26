import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list =["All","gaming","cricket","anime","song","live","soccer","football","cricket","cooking","Music","nigga","cartoons"]
  return (
    <div className='flex ml-10'>{list.map((list,index)=><Button key={index} name={list}></Button>)}</div>
  )
}

export default ButtonList