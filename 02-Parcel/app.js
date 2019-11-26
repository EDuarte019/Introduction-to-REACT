import React from 'react'
import Navbar from './components/Navbar';
​
// The App component
export default () => ( <Navbar /> )

import React from 'react'
import Navbar,{Navitem} from './components/Navbar';
​
//rfc - react functional component

/**
 * CONTENT OF APP COMPONENT
 */
export default () => {
    return(
        <Navbar title="Mango Airlines"/>
​
        // <Footer/>
    )
};
​
​
export const Welcome = ({...props}) => {
    return <>
          <h1> Hello, {props.name} </h1>
          <h1> {props.title}</h1>
          </>
  }
