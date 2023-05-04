import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShowContext from '../Context';
import './show.css'

const Show = ({}) => {
    
  const {movies} = useContext(ShowContext);

  let {id} = useParams();

  console.log(movies[parseInt(id)]);

  return (
    <>
    <Link to = '/'>
        <button>Go Back</button>
    </Link>

    <div>

        <div class="card">
            <img src={movies[id].show.image?.medium} alt="Avatar" /> 
            <div class="container">
                <h4><b>{movies[id].show.name}</b></h4>
                <p>{movies[id].show.language}</p>

                <p>{movies[id].show.summary.slice(3,-4)}</p>

                <p>{movies[id].score} <span class="fa fa-star checked"></span> </p>

                <Link to={`/form/${id}`}>
                    <button>Book Ticket</button>
                </Link>

            </div>
        </div>

        



    </div>
    
    
    </>
  )
}

export default Show