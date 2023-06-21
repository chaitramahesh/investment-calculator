import React from 'react'
import styles from './Buttons.module.css'

const Buttons = (props) => {
  return (
    <p className={styles.actions}>
          <button onClick={props.onReset} type="reset" className={styles.buttonAlt}>
            Reset
          </button>
          <button onClick={props.onSubmit} type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
  )
}

export default Buttons
