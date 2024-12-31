import React from "react";
import Header from "../../Header.jsx";

function Login() {
   
  return (
    <section> <Header/>
    
    <div  className="login-container">
        
      <div className="login-card">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="login-footer">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        
        </div>
        
      </div>
     
    </div>
    </section>
  );
}

export default Login;
