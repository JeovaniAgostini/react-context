import React, { useState, createContext } from 'react'
import './App.css'
import Navigation from './components/navigation'

export const AuthContext = createContext();

export function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthContext.Provider value="HAPPY">
      <div className="App">
        <Navigation />
        <header className="App-header">
          <p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
        </header>
      </div>
    </AuthContext.Provider>
  )
}