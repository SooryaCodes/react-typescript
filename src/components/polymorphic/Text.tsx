import { ComponentProps, ElementType, ReactNode } from "react";

type TextOwnProps<E extends ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: ReactNode;
  as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

export default function Text<E extends ElementType = "span">({
  size,
  color,
  children,
  as,
}: TextProps<E>) {
  const Component = as || "span";
  return (
    <Component className={`class-width-${size}-${color}`}>{children}</Component>
  );
}
