import React from 'react';

const AddArtist = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter box">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Username"
                  name="username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" placeholder="Email" name="email" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">
                Register Me!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddArtist;
