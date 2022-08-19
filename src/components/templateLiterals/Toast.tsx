/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 *  "center-bottom" | "right-center" | "right-top" | "right"
 */

type Props = {
  position:
    | Exclude<`${HorizontalPositoin}-${VerticalPosition}`, "center-center">
    | "center";
};

type HorizontalPositoin = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

export default function Toast({ position }: Props) {
  return <div>Toast Notification Position - {position}</div>;
}
