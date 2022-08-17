import React from 'react'

type Props = { name: string, msgCount?: number, isAuthenticated: boolean }

export default function Greet({ name, msgCount = 0, isAuthenticated }: Props) {
    return (
        <div>Welcome {isAuthenticated ? `${name}! You have ${msgCount} unread messages` : 'Guest'}.</div>
    )
}