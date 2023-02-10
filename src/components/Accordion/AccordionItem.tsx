import { MutableRefObject, useRef } from 'react'
import './styles.css'

export type AccordionItemProps = {
  faq: {
    question: string
    answer: string
  }
  active: boolean
  onToggle: () => void
}

const AccordionItem = ({ faq, active, onToggle }: AccordionItemProps) => {
  const { question, answer } = faq

  const contentEl = useRef(null)

  const handleWithScrool = (
    contentEl: { current: { scrollHeight: string } } | MutableRefObject<null>
  ) => {
    return contentEl?.current?.scrollHeight
  }

  return (
    <li className={`accordion_item ${active ? 'active' : ''}`}>
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{active ? '—' : '+'} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active ? { height: handleWithScrool(contentEl) } : { height: '0px' }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  )
}

export default AccordionItem
