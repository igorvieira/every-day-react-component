
import './styles.css'

export type CardProps = {
  imageURL?: string
  title?: string
  content?: React.ReactNode
}


export function Card({ imageURL, title,  content}:CardProps) {
  return (
    <div className="card">
      <img className="card-image"  src={imageURL} alt={title}/>
      <div className="card-actions">
        <div className="card-title">{title}</div>
        <div className="card-content">{content}</div>
      </div>
    </div>
  )
}