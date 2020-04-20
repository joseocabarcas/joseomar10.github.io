import { Navbar } from '../components/Navbar'

const Index = () => {
  return (
    <main>
      <Navbar />
      <section className="home" id="home">
        <div>
          <span className="subtitle">Hello, I am</span>
          <h1 className="title">José Cabarcas</h1>
          <p className="description">I'm FrontEnd Developer and FullStack Javascript Developer</p>
          <div className="container-social">
            <button className="hireme">Hire me!</button>
            <div className="container-icons">
              <a href="#">
                <span className="ic ic-fc"></span>
              </a>
              <a href="#">
                <span className="ic ic-in"></span>
              </a>
              <a href="#">
                <span className="ic ic-tw"></span>
              </a>
              <a href="#">
                <span className="ic ic-ln"></span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img alt="Profile" src="" />
        </div>
      </section>
    </main>
  )
}

export default Index
