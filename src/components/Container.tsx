import { CSSProperties } from "react"

type Props = {
    styles: CSSProperties
}

export default function Container({ styles }: Props) {
    return (
        <div style={styles}>Hello World</div>
    )
}