import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
console.log(data)

export default function App() {
  
 // This part is just JavaScript
  const destinations = data.map(place => {
      return (
        <Card 
          key={place.id} 
          place={place}
        />
      )
  })

  
  // This is returning the JSX
  return (
    <div>
      <Navbar />
      {destinations}
    </div>
  )
}
