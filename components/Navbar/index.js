const Navbar = () => {
  const list = ['Home', 'About', 'Tech', 'Portfolio']
  return (
    <header className="header">
      <a href="/" className="brand">José C</a>
      <nav>
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
