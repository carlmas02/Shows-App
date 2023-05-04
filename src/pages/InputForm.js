import React from 'react'
import { useContext } from 'react';
import ShowContext from '../Context';
import { useNavigate, useParams } from 'react-router-dom';
import './show.css'

const InputForm = () => {

    const {movies} = useContext(ShowContext);

    let {id} = useParams();

    const navigate = useNavigate();
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        const vals = {
            showName :movies[id]?.show.name,
            name : e.target.fullname.value,
            email : e.target.email.value,
            phone : e.target.number.value,
            date : e.target.date.value
        }
        
        alert("Thanks for booking !")
        
        const userData = JSON.parse(localStorage.getItem("data"));
        
        if(userData==null){
            localStorage.setItem('data',JSON.stringify([]));

            const arr = [];
            arr.push(vals)
            localStorage.setItem('data',JSON.stringify(arr))

        }else{
            userData.push(vals)
            localStorage.setItem('data',JSON.stringify(userData))
        }



        
        navigate('/');
        
        // console.log(name,email,phone,date)
    }

  return (
    <>
        <div className='card'>
        <h4>Book Show Ticket for : <i>{movies[id]?.show.name}</i> </h4>

        <div className='flex-item'>


            <form onSubmit={handleSubmit} > 

                <div className='form-input'>
                <label>Name </label>
                <input type='text' name = 'fullname' placeholder='Enter Name...'/>

                </div>

                <div className='form-input' >
                <label>Email </label>
                <input  type='email' name = 'email' placeholder='Enter Email...' />

                </div>

                <div className='form-input' >
                <label>Phone </label>
                <input type='text' name = 'number' placeholder='Enter Number...' />

                </div>

                <div className='form-input' >
                <label>Date </label>
                <input type='date' name = 'date' placeholder='Enter Date...' />

                </div>

                <div className='form-input' >
                <input type='submit'  />

                </div>

            </form>

            <img src={movies[id]?.show.image?.medium} alt="Avatar" /> 


        </div>


            
        </div>
    
    </>

    // <div>{id}</div>
  )
}

export default InputForm