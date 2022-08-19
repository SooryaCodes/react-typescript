import { ComponentProps, ReactNode } from "react";

type Props = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<ComponentProps<"button">, "children">;

export default function CustomButton({ variant, children, ...rest }: Props) {
  return (
    <button {...rest} className={`btn-${variant}`}>
      {children}
    </button>
  );
}
