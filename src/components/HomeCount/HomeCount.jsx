import React, { useState, useEffect } from 'react';
import './H-count.css';
const data = [
  { title: 'Teacher', initialValue: 0, targetValue: 23 },
  { title: 'Students', initialValue: 0, targetValue: 500 },
  { title: 'Courses', initialValue: 0, targetValue: 100 },
  { title: 'National Awards', initialValue: 0, targetValue: 300 },
];

const HomeCount = () => {
  const [values, setValues] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prevValues) =>
        prevValues.map((item) => {
          const increment = Math.ceil(item.targetValue / 20); // Increase per step to reach target in 2 seconds
          const newValue = item.initialValue + increment;
          return {
            ...item,
            initialValue:
              newValue > item.targetValue ? item.targetValue : newValue,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="row H-count pt-3 pt-md-4 ">
      {values.map((item, index) => (
        <div className="col-6 col-lg-3 text-center " key={index}>
          <div className="box p-2">
            <h1 className="display-3">{item.initialValue}</h1>
            <h6>{item.title}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCount;
