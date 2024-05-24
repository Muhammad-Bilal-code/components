import React from 'react'

const Input = (className:any,btnInp:()=>void) => {
       
  const {backgroundColor,border,margin,padding} = className.className
  // console.log(className.btnInp)

  


  return (
      <input type="text" placeholder={className.placeholder} className={`${backgroundColor} ${border} ${padding} ${margin}`} onChange={className.btnInp} />
  )
}

export default Input