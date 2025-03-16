import React from 'react';
import Row from "react-bootstrap/Row";
import Alert from 'react-bootstrap/Alert';
import useFavoriteStore from '../ZustandStores/useFavoriteStore';
import Event from './Event';

export default function Favorites() {
  const { favorites } = useFavoriteStore();
  
  return (
    <div>
      <h2>Mes Favoris</h2>
      {favorites.length === 0 ? (
        <Alert variant="info">
          Aucun élément en favoris
        </Alert>
      ) : (
        <Row>
          {favorites.map((eventItem) => (
            <Event 
              key={eventItem.id} 
              event={eventItem} 
              fnt={() => {}}
              deleteE={() => {}}
            />
          ))}
        </Row>
      )}
    </div>
  );
}
