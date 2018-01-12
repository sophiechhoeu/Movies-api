import React from 'react'
import MovieList from '../components/MovieList'
import {Route, Switch} from 'react-router-dom'
import Movie from '../components/Movie'


export default ({movies}) => {
return (

  movies ? (

    <Switch>
      <Route path='/movies/:id' render={
        ({match}) => {
          const id = match.params.id
          const movie = movies.find((movie) => movie._id === id)
          return(<Movie {...movie} />)
        }
      }/>
      <Route path='/movies' render={
        () => (
          <div>
              <MovieList movies={ movies } />
          </div>
        )
      }/>
  </Switch>

) : ("loading..")
)}
