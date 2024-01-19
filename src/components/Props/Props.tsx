// ParentComponent.js
import React from 'react';


const ParentComponent = () => {
  const data = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;


const ChildComponent = (props) => {
    const { data } = props;
    return (
      <div>
        <h2>Child Component</h2>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>City: {data.city}</p>
      </div>
    );
  };
