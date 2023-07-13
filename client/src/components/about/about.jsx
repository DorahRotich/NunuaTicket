import "./about.css";
import image1 from './images/pic-person-01.jpg';
import image2 from './images/pic-person-02.jpg';
import image3 from './images/pic-person-03.jpg';
import image4 from './images/pic-person-04.jpg';

const about = () => {
  return (
    <section
    id="testimonial"
    className="section section-testimonial"
  >
    <div className="container">
      <header className="section-header">
        <h2 className="section-title">Meet the team</h2>
        <p className="section-tagline">
          learn more about the people who made this
        </p>
      </header>
      <div className="section-body">
        <ul className="row">
          <li className="col-1-3">
            <article className="card-testimonial">
                <img
                src={image1}
                alt="micheal avatar"
                className="card-avatar"
                width={100}
                height={100}
              />
              <blockquote className="card-quote">
                <p>
                  I am a geospatial engineer who is passionate about backend
                  development with kmowledge in Node.js, Python, c and both
                  relational and non relational databases
                  <a href="https://github.com/terermike">
                    <cite>Micheal Kiplangat</cite>
                  </a>
                </p>
              </blockquote>
            </article>
          </li>
          <li className="col-1-3">
            <article className="card-testimonial">
              <img
                src={image2}
                alt="Palvin avatar"
                className="card-avatar"
                width={100}
                height={100}
              />
              <blockquote className="card-quote">
                <p>
                  I am a physicist with a passion for software engineering. I
                  like working with servers, hardware development and frontend
                  development
                  <a href="https://github.com/palvin254">
                    <cite>Paul Mwangi</cite>
                  </a>
                </p>
              </blockquote>
            </article>
          </li>
          <li className="col-1-3">
            <article className="card-testimonial">
              <img
                src={image3}
                alt="Dorah Rotich avatar"
                className="card-avatar"
                width={100}
                height={100}
              />
              <blockquote className="card-quote">
                <p>
                  My passion is in UX,UI design, frontend development and
                  hardware design. My education background is electrical
                  engineering.
                  <a href="https://github.com/DorahRotich">
                    <cite>Dorah Rotich</cite>
                  </a>
                </p>
              </blockquote>
            </article>
          </li>
          <li className="col-1-3">
            <article className="card-testimonial">
              <img
                src={image4}
                alt="Ian Kisali avatar"
                className="card-avatar"
                width={100}
                height={100}
              />
              <blockquote className="card-quote">
                <p>
                  I am an electrical engineer with a passion for backend
                  development, I love looking at coding challanges and solving
                  them. My stack is backend development
                  <a href="https://github.com/iankisali">
                    <cite>Ian Kisali</cite>
                  </a>
                </p>
              </blockquote>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
};

export default about;