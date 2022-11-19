import './styles.css'

export type Item = {
  href: string
  label: string
}

export type NavbarProps = {
  logo: string
  items: Item[]
}

const Navbar = ({logo, items}: NavbarProps) => (
  <nav className='nav'>
    <input type="checkbox" id="nav-check"/>
    <div className='nav-header'>
      <div className='nav-logo'>
        {logo}
      </div>
    </div>
    <div className='nav-btn'>
      <label htmlFor='nav-check'>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div className='nav-links'>
      {
        items.map(( item: Item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))
      }
    </div>
  </nav>
)

export default Navbar