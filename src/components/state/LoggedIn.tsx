import { useState } from "react";

type Props = {};

export default function LoggedIn({}: Props) {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  /**
   * Handle login function
   */
  const handleLogin = () => setIsLoggedIn(true);

  /**
   * Handle logout function
   */
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <button onClick={handleLogin}>Login</button> &nbsp;
      <button onClick={handleLogout}>Logout</button>
      <br />
      <span>User is {isloggedIn ? "logged in" : "logged out"}</span>
    </div>
  );
}
