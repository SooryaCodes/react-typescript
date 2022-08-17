import { stat } from 'fs'
import React from 'react'

type Props = {
  status: 'loading' | 'success' | 'error'
}

export default function Status({ status }: Props) {
  let message = status === 'loading' ? 'Loading...' : status === 'success' ? 'Data fetched successfully!' : status === 'error' && 'Error fetching data'
  return (
    <>
      <span className={status}>{message}</span>
    </>
  )
}