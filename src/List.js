import React, { useState } from 'react';
import Row from './Row';
import './List.css'

const List = () => {

  const [scrollPos, setScrollPos] = useState(0);

  const onScroll = (e) => {
    setScrollPos(e.target.scrollTop)
  }

  const rows = []
  for (let index = 0; index < 100; index++) {
    rows.push(
      <Row key={index}>
        {index}
      </Row>
    )
  }

  return (
    <React.Fragment>
      <ul
        className="list"
        onScroll={onScroll}
      >
        {rows}
      </ul>
      <dl>
        <dt>List Scroll Pos</dt>
        <dd>{scrollPos}</dd>
      </dl>
    </React.Fragment>
  )
}

export default List