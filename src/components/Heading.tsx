import { ReactNode } from "react"

type Props = { children: ReactNode }

export default function Heading({ children }: Props) {
    return (
        <span>{children}</span>
    )
}