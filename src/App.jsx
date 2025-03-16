import React,{ useState, useEffect, Suspense } from 'react'

import './App.css'
const Events = React.lazy(()=>import('./UseCase/Events'));
import {Routes,Route,Link} from 'react-router-dom';
import NavigationBar from './UseCase/NavigationBar';
import AddEvent from './UseCase/AddEvent';
import UpdateEvent from './UseCase/UpdateEvent';
import CounterZustand from './CourseComponents/zustandExemples/CounterZustand';
import useCounterStore from './Zustand/counter_store';
import Cart from './CourseComponents/zustandExemples/Cart';
import Favorites from './UseCase/Favorites';


const  EventDetails = React.lazy(()=>import('./UseCase/EventDetails'));
const NotFound = React.lazy(()=>import('./UseCase/NotFound'));

function App() {
  const count  = useCounterStore((state)=> state.count);
 console.log(count);
  return (
    <>
    <NavigationBar/>
   <Suspense fallback={<h1>Loading...</h1>} >
    <Routes >

      <Route path="/cart" element={<Cart />} />
    <Route path="/counterzustand" element={<CounterZustand />} />
    <Route path="/favorites" element={<Favorites />} />

      <Route path='/events'>
            <Route index element={<Events />} />
            <Route path=':name' element={<EventDetails />} />
            <Route path='/events/add' element={<AddEvent/>}/>
            <Route path='/events/update/:id' element={<UpdateEvent/>}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  
   </Suspense>
    </>
  )
}

export default App
