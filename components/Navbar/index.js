import { useState } from 'react'

const Navbar = () => {
  const list = ['Home', 'About', 'Tech', 'Portfolio']

  const [isOpen, setIsOpen] = useState(false)

  const handleMenuResponsive = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <div className="brand">
        <div className="brand-logo">
          <a href="/">José C</a>
        </div>
        <div className="menu">
          <button
            onClick={handleMenuResponsive}
            type="button"
            className="block"
          >
            <svg className="" viewBox="0 0 24 24">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`${isOpen ? "block" : "hidden"}`}>
        <ul>
          {
            list.map(item => (
              <li key={item}>
                <a href={`${item.toLocaleLowerCase()}`}>{item}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export { Navbar }
