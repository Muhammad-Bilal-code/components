import React from 'react'
// import Todo from './Components/Todo'
import Data from './Components/Data'
import Input from './Components/Input'

const App = () => {
  const style1  = {
    backgroundColor : 'bg-blue-500',
    border: 'rounded-xl',
    margin: 'm-2',
    padding: 'p-2'
  }
  const style2  = {
    backgroundColor : 'bg-slate-500',
    border: 'rounded-xl',
    margin: 'm-2',
    padding: 'p-2'
  }
  const style3  = {
    backgroundColor : 'bg-orange-500',
    border: 'rounded-xl',
    margin: 'm-2',
    padding: 'p-2'
  }
  return (
    <>

    <Data  btnName={'Login'} btnClick={()=>{
      alert('Login')
    }} className={style1} />
    <Data  btnName={'Sign Up'} btnClick={()=>{
      alert('Sign Up')
    }} className={style2} />
    <Data  btnName={'Register'} btnClick={()=>{
      alert('Register')
    }} className={style3} />

   <Input placeholder={'Type Something'} btnInp={(e:any)=>{
    console.log(e.target.value)
   }}  className={style2} />

 </>
  )
}

export default App 