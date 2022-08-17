import { Name } from "./Person.types"

type Props = {
    name: Name
}

export default function Person({ name }: Props) {
    return (
        <div>{name.first_name} {name.last_name}</div>
    )
}