import React, { useState } from 'react'

function TodoList() {
    const [activity,setActivity]=useState("");
    const [listData,setlistdata]=useState([]);
    function addActivity(){
        //asyn loading
        // setlistdata([...listData,activity])
        // console.log(listData)

        //sync loading
        setlistdata((listData)=>{
            const updatedlist=[...listData,activity]
            console.log(updatedlist)
            setActivity('');
            return updatedlist
        })

    }

    function removeActivity(i){
        const updatedlistData = listData.filter((elem,id)=>{
            return i!=id;
        })
        setlistdata(updatedlistData)
    }
    function removeAll()
    {
        setlistdata([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type='text' placeholder='Add Activity' value={activity} 
        onChange={(e)=>setActivity(e.target.value)} />
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is you List : {")"}</p>
        {listData!=[] && listData.map((data,i) =>{
            return(
                <>
                <p key={i}>
                    <div className='list-data'>{data}</div>
                    <div className='btn-position'><button onClick={()=>removeActivity 
                    (i)}>remove(-)</button></div>
                </p>
                
                
                </>
            )
        })}
        {listData.length>= 1 && 
        <button onClick={removeAll}>Remove All</button>}

    </div>
    
    </>
  )
}

export default TodoList