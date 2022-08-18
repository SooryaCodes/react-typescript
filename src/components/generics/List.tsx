import "./List.css"

type Props<T> = {
    title: string,
    items: T[],
    onClick: (value: T) => void
}

const generateHyphen = (text: string): string => '-'.repeat(text.length + (text.length / 5))

export default function List<T extends string | number>({ title, items, onClick }: Props<T>) {
    return (
        <div className="list_wrapper">
            <h3 className="title">{title}</h3>
            {generateHyphen(title)}
            {items.map((item, index) => {
                return (
                    <li key={index} onClick={() => onClick(item)}>
                        {item}
                    </li>
                )
            })}
        </div>
    )
}