import React from 'react';
import Card from './Card';
import data from './data';

function App() {
  return (
    <div className="app">
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          category={item.category}
          hobby={item.hobby}
          picture={item.picture}
        />
      ))}
    </div>
  );
}

export default App;
