import React from 'react'
import {Link,Outlet,useParams} from 'react-router-dom'

export const Users = () => {
  return (
    <>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Link to='/users/1'>User 1</Link>
      <Link to='/users/2'>User 2</Link>
      <Link to='/users/3'>User 3</Link>
      <Outlet/>
    </>
  )
}
