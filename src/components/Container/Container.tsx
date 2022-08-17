import { ContainerProps } from "./Container.types"

export default function Container({ styles }: ContainerProps) {
    return (
        <div style={styles}>Hello World</div>
    )
}