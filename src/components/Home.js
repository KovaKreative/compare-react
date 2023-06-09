import './Home.sass'

export default function Home() {

  const heading = 'KovaKreative';
  const subheading = 'Full Stack Web Developer experienced in education and game design. A passionate designer and developer, driven to create efficient applications that provide an engaging and intuitive user experience.';

  return (
    <div className="Home">
      <section className="hero is-medium is-warning has-text-left">
        <div className="hero-body">
          <h1 className="title">
            {heading}
          </h1>
          <div className="is-three-quarters column is-paddingless">
            <h2 className="subtitle is-4">
              {subheading}
            </h2>
          </div>
          <a className="button is-large is-dark" id="learn">Learn More</a>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns pd is-desktop">
            <div className="column is-1 has-text-centered">
              <i className="fa fa-cog is-link"></i>
            </div>
            <div className="column is-one-third-desktop">
              <p className="title"><strong>Full Stack Web Developer experienced in education and game design.</strong></p>
            </div>
            <div className="column">
              <p>A passionate designer and developer, driven to create efficient applications that provide an engaging and intuitive user experience.</p>
            </div>
          </div>
        </div>
        <div className="columns pd">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">I have always been a creative person with a particular affinity for computer technology and expressing myself through it.</p>
                <p className="subtitle">-Eric Kovalevskyy</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">I have a particular passion for video games, which marry storytelling, cinematography, visual arts, and music, and deliver engaging, interactive experiences. </p>
                <p className="subtitle">-Eric Kovalevskyy</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">I have always aspired to leverage these principles to deliver user experiences that allow for expression and creativity in engaging and intuitive ways.</p>
                <p className="subtitle">-Eric Kovalevskyy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}