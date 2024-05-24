import React, { useState } from 'react';
// import logo from './logo.svg';
// import '../App.Css';

function Todo() {
const [todo,setTodo] = useState<any>([])  
const [inp,setInp] = useState<any>()
// console.log(todo)

      function handleAddTodo() {
        if(!inp){
        return  alert('Please Fill Input')
        }
       
        setTodo([...todo,inp])
      } 

      // console.log(inp==todo)

   function handleDel(index:number,arr:any){
    let a = arr.filter((item:any,id:number)=>  {return index !=id})
    // console.log(a)
           setTodo(a)
   }

   function handleDeleteAll() {
    setTodo([])
    
   }
  


   function handleEdit(index:number,item:any,arr:any) {
    let a =  prompt('Enter edit todo')
    let editVal = [...arr];
    editVal[index] = a
    // console.log(editVal)
    setTodo(editVal)
   }

  return (
    <>
    <div className="flex justify-center items-center  h-40 w-90   ">
      <div className="bg-slate-300 p-5 space-x-3 flex-wrap space-y-3 rounded-xl">
    <input type="text"  className='bg-blue-300 p-2 rounded-xl text-3xl' value={inp} onChange={(e)=>setInp(e.target.value)} />
    <button onClick={handleAddTodo} className='bg-blue-300 p-4 rounded-xl text-3xl'>Add</button> 
    <button onClick={handleDeleteAll} className='bg-blue-300 p-4 rounded-xl text-3xl'>Delete All</button> 
    </div>
    </div>

   {todo.map((item:any,index:any,arr:any)=>{    
    return (
      <>
      <div className="bg-slate-600 p-3 rounded-xl flex  flex-wrap items-center m-2 space-x-4 " key={index}>
    <span className='bg-white w-60 rounded-md text-2xl '>{item}</span>
    <button className="bg-white p-3 rounded-md text-1xl"  onClick={()=>handleDel(index,arr)}>delete</button>
    <button className='bg-white p-3 rounded-md text-1xl' onClick={()=>handleEdit(index,item,arr)}>edit</button>
    </div>
    </>
    )
   })}
    {/* <Data/> */}
    </>
  );
}

export default Todo;
