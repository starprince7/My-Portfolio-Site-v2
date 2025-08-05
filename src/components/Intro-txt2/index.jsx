import { useEffect } from 'react';
import addParlx from '../../common/addParlx';

const IntroTxt2 = () => {
  useEffect(() => {
    setTimeout(() => addParlx());
  }, []);

  return (
    <header className="slider simpl fixed-slider bg-img valign" style={{ backgroundImage: "url(/img/slid/a2.jpg)" }} data-overlay-dark="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption center mt-50">
              <h6>Unique Business.</h6>
              <h1>Creative Digital Agency</h1>
              <p>If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.</p>
              <a href="#0" className="btn-curve btn-lit mt-40">
                <span>Get Started Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default IntroTxt2