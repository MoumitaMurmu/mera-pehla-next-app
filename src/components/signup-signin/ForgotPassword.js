import "./style.css";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter new password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
