// import '../assets/fontawesome/scss/brands.scss'

export default function Footer() {
  return (
    <footer className="footer has-background-warning">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p>This is the footer which can give you some information.</p>
          </div>
          <div className="column has-text-right">
            <a className="icon has-text-dark" href="#"><i className="fa-brands fa-facebook"></i></a>
            <a className="icon has-text-dark" href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}