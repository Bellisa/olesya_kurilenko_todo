import React from 'react';

const GetNumMass = (start, end, step) => {
  const mass = [];
  let startNum = start;
  for (startNum; startNum <= end; startNum += step) {
    mass.push(startNum);
  }
  return mass;
};

export const ComNumList = ({
  from, to, odd, even
}) => {
  let step = 1;
  let start = Number(from || 1);
  const end = Number(to || 1);
  if (odd || even) {
    step = 2;
  }
  if ((odd && start % 2 === 0) || (even && start % 2 !== 0)) {
    start++;
  }
  const items = (GetNumMass(start, end, step)).map(el => <li key={el}>{el}</li>);
  return <ul>{items}</ul>;
};

