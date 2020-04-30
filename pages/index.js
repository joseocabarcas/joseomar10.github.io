import Head from 'next/head'

import { Navbar } from '../components/Navbar'

const Index = () => {
  return (
    <main>
      <Head>
        <title>José Cabarcas - FrontEnd Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <section className="home" id="home">
        <div className="information">
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
        <div className="multimedia">
          <div className="profile">
            <img alt="Profile" src="/images/profile.jpg" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Index
