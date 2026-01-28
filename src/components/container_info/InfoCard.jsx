// InfoCard.jsx
import React from 'react'
import style from './Container_info.module.css'

export default function InfoCard({ children }) {
  return <div className={style.card}>{children}</div>
}
