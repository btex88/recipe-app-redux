import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as PP from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ PP.Login } />
    <Route exact path="/comidas" component={ PP.Foods } />
    <Route exact path="/bebidas" component={ PP.Drinks } />
    <Route exact path="/comidas/:id" component={ PP.FoodDetails } />
    <Route exact path="/bebidas/:id" component={ PP.DrinkDetails } />
    <Route exact path="/comidas/:id/in-progress" component={ PP.FoodInProgress } />
    <Route exact path="/bebidas/:id/in-progress" component={ PP.DrinkInProgress } />
    <Route exact path="/explorar" component={ PP.Explore } />
    <Route exact path="/explorar/comidas" component={ PP.ExploreFoods } />
    <Route exact path="/explorar/bebidas" component={ PP.ExploreDrinks } />
    <Route
      exact
      path="/explorar/comidas/ingredientes"
      component={ PP.ExploreFoodIngredients }
    />
    <Route
      exact
      path="/explorar/bebidas/ingredientes"
      component={ PP.ExploreDrinkIngredients }
    />
    <Route exact path="/explorar/comidas/area" component={ PP.ExploreFoodArea } />
    <Route path="/perfil" component={ PP.Profile } />
    <Route path="/receitas-feitas" component={ PP.DoneRecipes } />
    <Route path="/receitas-favoritas" component={ PP.FavoriteRecipes } />
    <Route path="*" component={ PP.NotFound } />
  </Switch>
);

export default Routes;
