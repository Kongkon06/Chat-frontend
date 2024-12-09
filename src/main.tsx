import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import userReducer from './States/State.ts'
import userAuthReducer from './States/Userstore.ts'
import msgReducer from './States/MgsStore.ts'
import webReducer from './States/Websoc.ts'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
const globalReducer = combineReducers({
  user: userReducer,
  userInfo : userAuthReducer,
  msgInfo : msgReducer,
  webInfo : webReducer
})
const global = configureStore({
  reducer : globalReducer
})
createRoot(document.getElementById('root')!).render(
  
    <Provider store={global}>
      <div className='font-jetbrains'></div>
    <App />
    </Provider>
    
  
)
