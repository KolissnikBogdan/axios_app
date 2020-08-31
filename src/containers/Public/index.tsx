import React from 'react'
import Header from '../../components/Header'
import { Route, Switch } from 'react-router'
import Posts from './Posts'
import Login from './Login'
import Album from './AlbumColection/PhotoAlbum/Albom'
import AlbumCollection from './AlbumColection'

export default function Public(): React.ReactElement {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Posts} />
        <Route path="/albums" component={AlbumCollection}/>
        <Route path="/album/:id" component={Album}/>
      </Switch>
    </>
  )
}