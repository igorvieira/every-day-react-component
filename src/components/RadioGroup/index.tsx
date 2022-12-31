import { useState } from 'react'
import Button from '../Button'
import './styles.css'

export type Options = {
  label: string
  value: string
}

export type RadioGroupProps = {
 title: string
 subtitle: string
 options: Options[]
}

const RadioGroup = ({ title, subtitle, options }: RadioGroupProps) => {
  const [ isChecked, setIsChecked] = useState('')

  const handleSubmit = () => {
    alert(`You selected ${isChecked}!`)
  }

  return (
    <div className='container-radio'>
      <div className='header'>
        <div className='title'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
      </div>
      <ul className='list'>
       {options.map((option) => (
          <li>
            <div className='option'>
              <input
                type="radio"
                name={option.label}
                id="radio1"
                checked={isChecked === option.value}
                onChange={() => setIsChecked(option.value)}
              />
              <label htmlFor="radio1">{option.label}</label>
            </div>
          </li>
        ))}
      </ul>

      <div className='action'>
        <Button onClick={handleSubmit} label='Submit' isLarge/>
      </div>
    </div>
  )
}

export default RadioGroup