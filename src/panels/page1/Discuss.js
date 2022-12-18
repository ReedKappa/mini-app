import React from 'react'
import Styles from './Discuss.module.css'

export default function Discuss() {
  return (
    <div className={Styles.discuss}>
      <div>
        <div className={Styles.linkWrapper}>
          <a href='#'>Обсудить матчи</a>
        </div>
      </div>
    </div>
  )
}
