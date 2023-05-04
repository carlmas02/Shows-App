import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Booking = () => {
  const [data,setData] = useState([]);
  


  useEffect(()=>{
    const val = JSON.parse(localStorage.getItem("data"));
    setData(val)

  },[])

  return (
    <>  
        <Link to={'/'}>
            
        <button>Go Back</button>
        </Link>

        <h2>All bookings</h2>

        <table>
        <tr>
            <th>Show</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
        </tr>
        
            { data &&
                data.map((value,index)=>{
                    return(
                    <tr>
                    <td>{value.showName}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.date}</td>

                    </tr>
                    )
                })  
            }

        
        </table>

    
    
    </>
  )
}

export default Booking