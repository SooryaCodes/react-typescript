import { useState } from "react";

type Props = {};

type AuthUser = {
  name: string;
  email: string;
};

export default function User({}: Props) {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  /**
   * Handle login function
   */
  const handleLogin = () =>
    setUser({ name: "Soorya", email: "soorya@gmail.com" });

  return (
    <div>
      <button onClick={handleLogin}>Login</button> &nbsp;
      <br />
      <span>
        Welcome {user.name}, your email is {user.email}.
      </span>
    </div>
  );
}
