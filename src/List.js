import React, { useState, useEffect, useRef } from 'react';
import Row from './Row';
import './List.css'

const List = () => {

  const [scrollPositions, setScrollPositions] = useState({ prev: 0, curr: 0 });
  const [scrollVelocty, setScrollVelocity] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const tickMs = 500;
    const tick = setTimeout(() => {
      console.log('start')
      setScrollPositions({
        prev: scrollPositions.curr,
        curr: listRef.current.scrollTop
      })
      let newScrollVelocity = (scrollPositions.curr - scrollPositions.prev) / (tickMs / 1000)
      setScrollVelocity(newScrollVelocity)
    }, tickMs)
    return () => clearTimeout(tick)
  }, [scrollPositions])

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
        ref={listRef}
      >
        {rows}
      </ul>
      <dl>
        <dt>List Scroll Pos</dt>
        <dd>{scrollPositions.curr}</dd>
        <dt>Prev List Scroll Pos</dt>
        <dd>{scrollPositions.prev}</dd>
        <dt>Scroll Velocity</dt>
        <dd>{scrollVelocty} px / s</dd>
      </dl>
    </React.Fragment>
  )
}

export default List