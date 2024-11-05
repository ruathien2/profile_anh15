import React from 'react'
import Image from './Image'
import { list_shirt } from '../data/Data'

export default function Images() {
  return (
    <div><Image title={'Mockup T-shirt'} data={list_shirt}/></div>
  )
}
