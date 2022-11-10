import * as S from './styles.css'

export type InputProps = {
  children: React.ReactNode
}

const Input = ({children}: InputProps) => (
  <div>
    <h1>{children}</h1>
  </div>
)

export default Input