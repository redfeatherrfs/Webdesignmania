import React from 'react';
import '../.././SMMProcess.css'; // Custom CSS file

const SMMProcess = () => {
  return (
    <section className="smmprocess py-5">
      <div className="container text-center">
        {/* Subheading */}
        <p className="text-uppercase text-muted mb-2">SMM</p>
        {/* Main Heading */}
        <h3 className="font-weight-bold">Ladder To Your Success        </h3>

        {/* Process Steps */}
        <div className="row d-flex align-items-center mt-4">
          <div className="col-12 position-relative">
            {/* Dotted line */}
            <div className="dotted-line"></div>

            {/* Icons with Headings */}
            <div className="row justify-content-between">
              <div className="col text-center process-step">
                <div className="icon-circle mb-2">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h5>Kick Off</h5>
              </div>
              <div className="col text-center process-step">
                <div className="icon-circle mb-2">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h5>Explore</h5>
              </div>
              <div className="col text-center process-step">
                <div className="icon-circle mb-2">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h5>Creating Your Vision</h5>
              </div>
              <div className="col text-center process-step">
                <div className="icon-circle mb-2">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h5>Executing Your Dream</h5>
              </div>
              <div className="col text-center process-step">
                <div className="icon-circle mb-2">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h5>Launch</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMMProcess;
