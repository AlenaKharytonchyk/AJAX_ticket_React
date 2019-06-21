import React from 'react';
import MediaCard from './Card';

function CardList(props) {
const { items } = props;
  return (
    <ul>
      {items.map( item => 
        <MediaCard key={ item.title } item = {item} />
      )}
    </ul>
  )
}
export default CardList;