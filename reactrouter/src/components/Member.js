import React from 'react'
import {useSearchParams} from 'react-router-dom'

export const Member = () => {
    const [searchParams, setSearchParams]= useSearchParams();
    const showActiveparams =  searchParams.get('filter') === 'active'
   
  return (
    <>
    <button onClick={()=>{setSearchParams({filter:"active"})}}>Active Member</button>
    <button onClick={()=>{setSearchParams()}}>Reset Filter</button>
    {showActiveparams ? (<h2>"member is active"</h2>):(<h2>"memeber is inactive"</h2>)}
    </>
  )
}
