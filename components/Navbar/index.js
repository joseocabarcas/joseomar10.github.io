const Navbar = () => {
  const list = ['Home', 'About', 'Tech', 'Portfolio']
  return (
    <header>
      <a href="#">José C</a>
      <nav>
        <ul>
          {
            list.map(item => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export { Navbar }
