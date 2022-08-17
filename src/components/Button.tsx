import { MouseEvent } from 'react'

type Props = {
    handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

export default function Button({ handleClick }: Props) {
    return (
        <button onClick={(event) => handleClick(event, 1)}>Click</button>
    )
}