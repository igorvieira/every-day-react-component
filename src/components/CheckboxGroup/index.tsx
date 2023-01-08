import { useState } from 'react'
import Button from '../Button'
import './styles.css'

export type Options = {
  label: string
  value: string
}

export type CheckboxGroupProps = {
  title: string
  subtitle: string
  options: Options[]
}

const CheckboxGroup = ({ title, subtitle, options }: CheckboxGroupProps) => {
  const [selectList, setSelectList] = useState<Options[]>([])


  const handleSelect = (option: Options) => {
    if (isChecked(option)) {
      setSelectList(selectList.filter((item) => item.value !== option.value))
      return
    }

    setSelectList([...selectList, option])
  }


  const handleSubmit = () => {
    alert(`You selected ${JSON.stringify(selectList)}!`)
  }

  const isChecked = (option: Options) => {
    return selectList.some((item) => item.value === option.value)
  }

  return (
    <div className='container-checkbox'>
      <div className='header'>
        <div className='title'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
      </div>
      <ul className='list'>
       {options.map((option) => (
          <li>
            <div className='checkbox'>
              <input
                type="checkbox"
                name={option.label}
                id={option.value}
                checked={isChecked(option)}
                onChange={() => handleSelect(option)}
              />
              <label htmlFor={option.value}>{option.label}</label>
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
export default CheckboxGroup