import React from 'react'

const Navbar = ({handleClick}) => {
  return (
    <div>
        <div style={{
            background : 'skyblue',
            display : 'flex',
            justifyContent : 'center'
        }}>
            <h1>GitStar</h1>
        </div>
        <div style={{
            display : 'flex',
            justifyContent:'center',
            gap:'20px',
            margin : '20px 0px'
        }}>
            <button onClick={()=>handleClick("all")}>All</button>
            <button onClick={()=>handleClick("html")}>HTML</button>
            <button onClick={()=>handleClick("css")}>CSS</button>
            <button onClick={()=>handleClick("javascript")}>JavaScript</button>
        </div>
    </div>
  )
}

export default Navbar