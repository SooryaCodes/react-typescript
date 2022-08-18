
type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}


type Props = PositiveNumber | NegativeNumber | Zero


export default function RandomNumber({ value, isPositive, isNegative, isZero }: Props) {
    return (
        <span>{value} is {isPositive ? "positive" : isNegative ? "negative" : isZero && "zero"}.</span>
    )
}