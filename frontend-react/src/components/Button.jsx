import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>

      <Link href="" to={props.url} className={`btn ${props.class}`}>{props.text}</Link>
      
    </>
  )
}

export default Button
