import React from 'react'

 const Header = (props) => {
  return (
    <header>
        <h1>{props.title} {props.todo}</h1>
    </header>
  )
}

Header.defaultProps = {
    title : "Moath",
    todo:"go to sleep"
}

export default Header;
