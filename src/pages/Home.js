import React, { useEffect, useState} from 'react'
import Card from '../components/Card'
import { useContext } from 'react'
import ShowContext from '../Context'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

const Home = () => {

  const {movies,setMovies,getMoviesData} = useContext(ShowContext);

  const searchdata = ()=>{
    const q = document.getElementById('search').value;
    getMoviesData(q);

  }

  useEffect(()=>{

    // getMoviesData()


  },[])

  return (
    <>


      <input id = 'search' />
      <input onClick={searchdata} type='submit' />

      <button onClick={()=>setMovies([])} >Clear Response</button>

      { movies.length ? 
        movies.map((movie,index)=>{
          return(

            <Card show = {movie} id = {index} key={index} />


          )

        }) : <h4>Search for Movies !</h4>

      }
    
    </>
  )
}

export default Home