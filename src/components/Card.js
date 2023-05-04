import React from 'react'
import './card.css';
import { Link } from 'react-router-dom';

const Card = ({show,id}) => {
  // const show = show_.show;
  // console.log(show.show.image.medium)
  return (
    <>  
          
        <div class="card">
          
          <img src={show.show.image?.medium} alt="show-cover" />
          <div class="container">
            <h4><b>{show.show.name}</b></h4>
            <p>{show.show.language}</p>

            <p>{show.score} <span class="fa fa-star checked"></span> </p>

            <Link to={`/show/${id}`}>
            <button>Learn More</button>
            </Link>
            
          </div>
        </div>
        
    
    
    </>
  )
}

export default Card