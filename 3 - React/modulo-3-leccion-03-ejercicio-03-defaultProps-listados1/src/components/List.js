import React from 'react';

class List extends React.Component {
  render() {
    const students = [
      {
        promo: 'A',
        name: 'Sofía',
        age: 20,
      },
      {
        promo: 'B',
        name: 'María',
        age: 21,
      },
      {
        promo: 'A',
        name: 'Lucía',
        age: 22,
      },
    ];
    return (
      <ul>
        {students.map((student) => {
          if (student.promo === 'A') {
            return (
              <li>
                <h3>Nombre: {student.name}</h3>
                <p>Edad: {student.age}</p>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default List;
