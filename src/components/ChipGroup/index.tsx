import { useState } from 'react'
import './styles.css'

export type Chip = {
  label: string
  value: string
}

export type ChipGroupProps = {
  group: Chip[]
}

const ChipGroup = ({group}: ChipGroupProps) => {

  const [chips, setChips] = useState<Chip[]>(group)

  const handleRemoveChip = (chip: Chip) => {
    const newChipList = chips.filter((c) => c.value !== chip.value)
    setChips(newChipList)
  }

  return (
    <div className='chip-content'>
      {
        chips.map((chip) => (
          <span  key={chip.value} className="chip">
            {chip.label}

            <button className='close-button' onClick={() => handleRemoveChip(chip)}>x</button>
          </span>
        ))
      }
    </div>
  )
}

export default ChipGroup