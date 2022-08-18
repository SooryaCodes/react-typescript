import React, { Dispatch, ReactNode, SetStateAction } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

export type UserContextProviderProps = {
  children: ReactNode;
};

export type UserContextType = {
  user: AuthUser | null;
  setUser: Dispatch<SetStateAction<AuthUser | null>>;
};
