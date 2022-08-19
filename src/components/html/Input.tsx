import { ComponentProps } from "react";

type Props = ComponentProps<"input">;

export default function CustomInput(props: Props) {
  return <input type="text" {...props} />;
}
