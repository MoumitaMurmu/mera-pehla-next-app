import './style.css'

const Login = () =>{
    return(
        <div className="container">
            <h1>Login To Your Account</h1>
         <form>
          <label>Username:</label>
          <input type="text" name="username" required/>
          <br/>
          <label>Password:</label>
          <input type="password" name="pasword" required/>
          <br/>
          <button type="submit">Login</button>
          <p>New User? Click here to <a href='/signup'>Sign Up</a></p>
         </form>
        </div>
    )
}

export default Login;