import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Biography from './Pages/Biography';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Inspirations from './Pages/Inspirations';
import Interiors from './Pages/Interiors';
import Default from './Pages/Default';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContextProvider from './components/Context/Context'

const App=()=> {
  return (
    <>
    <ContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/biography" component={Biography} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/inspirations" component={Inspirations} />
        <Route exact path="/interiors" component={Interiors} />
        <Route component={Default} />
      </Switch>
      <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
