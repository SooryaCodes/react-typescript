import { useState } from "react";

type Props = {};

type AuthUser = {
  name: string;
  email: string;
};

export default function User({}: Props) {
  const [user, setUser] = useState<AuthUser | null>(null);

  /**
   * Handle login function
   */
  const handleLogin = () =>
    setUser({ name: "Soorya", email: "soorya@gmail.com" });

  /**
   * Handle logout function
   */
  const handleLogout = () => setUser(null);
  return (
    <div>
      <button onClick={handleLogin}>Login</button> &nbsp;
      <button onClick={handleLogout}>Logout</button>
      <br />
      <span>
        Welcome{" "}
        {user
          ? `${user?.name}, your email is ${user?.email}`
          : "Guest, please login"}
        .
      </span>
    </div>
  );
}
