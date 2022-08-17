type Props = {
    name: {
        first_name: string,
        last_name: string
    }
}

export default function Person({ name }: Props) {
    return (
        <div>{name.first_name} {name.last_name}</div>
    )
}