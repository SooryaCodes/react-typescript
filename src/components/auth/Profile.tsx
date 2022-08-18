import React from 'react'

 export type ProfileProps = { name: string }

export default function Profile({ name }: ProfileProps) {
    return (
        <div>Welcome {name} 🎉.</div>
    )
}