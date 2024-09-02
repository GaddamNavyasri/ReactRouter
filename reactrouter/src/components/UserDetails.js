import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const {userid} = useParams()
    // const userId = params.userId
  return <div> The user details of each member are {userid} </div>
  
}
