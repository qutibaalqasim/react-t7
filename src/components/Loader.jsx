import React from 'react'
import style from './Loader.module.css'

export default function Loader() {
  return (
   <div className={`spinner-border ${style.spinnerBorder} text-primary`} role="status">
  <span className="visually-hidden">Loading...</span>
</div>

  )
}
