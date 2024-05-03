import React, { useState, useEffect } from 'react';

const RouteComponent = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [routeCities, setRouteCities] = useState([]);
  const [showRoute, setShowRoute] = useState(false);

  useEffect(() => {
    if (showRoute) {
      fetchRouteCities(start, end);
    }
  }, [showRoute, start, end]);

  const fetchRouteCities = (start, end) => {
    // Логіка для витягування списку міст через які проходить маршрут по порядку
    // Замість цього коду вставте вашу логіку отримання даних з API для побудови маршрутів
    const routeCities = ['City1', 'City2', 'City3']; // Приклад даних
    setRouteCities(routeCities);
  };

  const handleShowRoute = () => {
    setShowRoute(true);
  };

  return (
    <div>
      <input
        type="text"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Початкове місто"
      />
      <input
        type="text"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="Кінцеве місто"
      />
      <button onClick={handleShowRoute}>Показати маршрут</button>
      <ul>
        {routeCities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default RouteComponent;