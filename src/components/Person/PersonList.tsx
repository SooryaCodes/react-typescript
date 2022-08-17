import { Name } from "./Person.types"

type Props = {
    nameList: Name[]
}

export default function PersonList({ nameList }: Props) {
    return (
        <>
            {nameList.map(({ first_name, last_name }, index) => {
                return <div key={first_name}>
                    <span>{index + 1}. {first_name} {last_name}</span>
                    <br />
                </div>
            })}
        </>
    )
}