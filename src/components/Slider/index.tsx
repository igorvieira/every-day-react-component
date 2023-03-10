import { useState } from 'react'
import './styles.css'

const Slider = () => {
  const [value, setValue] = useState(0)

  const getBackgroundSize = () => {
    return { backgroundSize: `${value}%` };
  };

  return  (
    <div className='content-slider'>
      <input
        type="range"
        min="0"
        onChange={
          (event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(Number(event.target.value)
        )}
        style={getBackgroundSize()}
        value={value}
      />
      <div>
        🔊 {value}%
      </div>
    </div>
  )
}

export default Slider