import React from 'react'

import './styles.scss'

const Login = () => {
  return (
    <div className="container">
      <div className="col-md-4" id={'login'}>
        <section id={'inner-wrapper'} className="login">
          <article>
            <form >
              <h5 className="grey-text text-darken-3 mb-4">Sign In</h5>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id={'email'}
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input
                    type="password"
                    id={'password'}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <button className="btn btn-outline-success btn-block">
                Login
              </button>
              <button
                className="btn btn-outline-warning btn-block"
                type="button"
              >
                Register
              </button>
            </form>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Login
