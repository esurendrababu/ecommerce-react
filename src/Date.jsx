import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every second

    return () => clearInterval(timerId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default CurrentTime;
