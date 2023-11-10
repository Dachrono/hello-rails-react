import React from 'react';
import { useSelector } from 'react-redux';

function Greetings() {
  const randomGreeting = useSelector((state) => state.greetings.greetings);

  return (
    <>
      <p>{randomGreeting.message}</p>
    </>
  );
}

export default Greetings;