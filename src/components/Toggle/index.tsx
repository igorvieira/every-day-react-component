import './styles.css'

export type ToggleProps = {
  checked: boolean
  onChange: () => void
}

const Toggle = ({checked, onChange}: ToggleProps) => (
  <div className='container'>
    <input
      className='toggle-input'
      type='checkbox'
      checked={checked}
      onChange={onChange}
      id='input-checkbox'
    />
    <label className='toggle-label' htmlFor='input-checkbox' />
  </div>
)

export default Toggle