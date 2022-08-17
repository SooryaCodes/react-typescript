import React, { ChangeEvent } from 'react'

type Props = {
    value: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ value, handleChange }: Props) {
    return (
        <input type="text" value={value} onChange={handleChange} />
    )
}