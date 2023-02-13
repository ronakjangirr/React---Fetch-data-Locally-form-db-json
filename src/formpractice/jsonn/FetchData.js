import React from 'react'
import Db from "../jsonn/db.json";      // Db json file is imported to get data

function FetchData () {
  return (
    <>
    <h2>Fetch JSON Data Locally</h2>
    <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
        </tr>
        </thead>
        <tbody>
            {
                Db.map((user, index)=>(
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                </tr>
                ))                
            }

        </tbody>
    </table>
    
    </>
  )
}

export default FetchData;