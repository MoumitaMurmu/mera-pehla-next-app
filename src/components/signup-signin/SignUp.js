import './style.css'

const SignUp = () =>{
    return(
        <div className="container">
            <h1>Sign Up</h1>
         <form>
          <label>Username:</label>
          <input type="text" name="username" required/>
          <br/>
          <label>Password:</label>
          <input type="password" name="pasword" required/>
          <br/>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" required/>
          <br/>
          <button type="submit">Sign Up</button>
         </form>
        </div>
    )
}

export default SignUp;