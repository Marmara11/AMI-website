
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import AppTheme from './modules/AppTheme';
import HomePage from "./HomePage";
import { Provider } from 'react-redux';
// import { store } from './store/reduxStore';
//import rootReducer from 'react-redux';
import store from 'redux';

//const rootElement = document.getElementById("root");
//const store = createStore(rootReducer);
ReactDOM.render( 
<HomePage />,
//   <Provider store={store}> 
 
//   <AppTheme title="Onepirate theme - Material-UI" description="A onepirate theme">
      
//    </AppTheme>
// </Provider>,
  
  document.getElementById('root')
  );


// import React from 'react';
// import AppTheme from './modules/AppTheme';
// import HomePage from './HomePage';

// export default function Page() {
//   return (
//     <AppTheme title="Onepirate theme - Material-UI" description="A onepirate theme">
//       <HomePage />
//     </AppTheme>
//   );
// }
