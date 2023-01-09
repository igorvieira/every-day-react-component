import Button from '../Button'
import './styles.css'

export type Option = {
  label: string
  value: string
}

export type SelectProps = {
  options: Option[]
}

const Select = ({options}: SelectProps) => (
  <div className="select">
    <select>
    {
      options.map(({label, value}) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))
      }
    </select>
  </div>
)

export default Select