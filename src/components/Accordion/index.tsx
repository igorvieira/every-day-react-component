import { useState } from 'react'
import { faqs } from './faqs'
import AccordionItem from './AccordionItem'
import './styles.css'

const Accordion = () => {
  const [clicked, setClicked] = useState(0)

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(0)
    }

    setClicked(index)
  }

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
  )
}

export default Accordion
