import React, { createContext, useState } from 'react'
import axios from 'axios';

const ShowContext = createContext();

export default ShowContext;

export const ShowProvider = ({children}) =>{

    const [movies,setMovies] = useState([]);
  
    const getMoviesData = async (q) =>{

        try{
            const data = await axios.get(`https://api.tvmaze.com/search/shows?q=${q}`)
            console.log(data.data);
            setMovies(data.data);

        }catch(e){
            console.log(e)
        }

    }

    const contextData = {
        movies:movies,
        setMovies:setMovies,
        getMoviesData:getMoviesData

    }

    return(
        <ShowContext.Provider value={contextData}>
            {children}
        </ShowContext.Provider>
    )



}