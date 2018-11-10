import React, {useState, useRef} from 'react';
import Row from './Row';
import './List.css'

const List = () => {

  const listRef = useRef(null);

  const onScroll = () => {
    console.log(listRef.current.scrollTop)
  }

  const rows = []
  for (let index = 0; index < 100; index++) {
    rows.push(
      <Row
        key={index}
      >
        {index}
      </Row>
    )
  }

  return (
    <ul 
      className="list" 
      ref={listRef}
      onScroll={onScroll}
    >
    {rows}
    </ul>
  )
}

export default List