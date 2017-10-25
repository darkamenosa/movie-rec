import React from 'react';
import 'images/bg_2.svg';

const ExampleBody = () =>
  <section
    className="fdb-block"
    style={{ backgroundImage: 'url(images/bg_2.svg)' }}
  >
    <div className="container">
      <div className="fdb-box">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <h2>Join us!</h2>
            <p className="text-h3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.{' '}
            </p>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <div className="input-group mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
              />
              <span className="input-group-btn">
                <button className="btn" type="button">
                  Submit
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;

export default ExampleBody;
