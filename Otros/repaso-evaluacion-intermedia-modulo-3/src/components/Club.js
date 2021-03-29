import React from 'react';

const Club = (props) => {
  const itemMembers = props.clubProp.members.map((member, i) => {
    return (
      <li className="itemLi" id={i + 1} key={i}>
        {member}
      </li>
    );
  });
  return (
    <article>
      <i className={props.clubProp.fa}></i>
      <h2 className="itemLi">{props.clubProp.name}</h2>
      <h4>
        <i className="fas fa-pepper-hot icon-2"></i>
        Members<i className="fas fa-pepper-hot icon-2"></i>
      </h4>
      <ul className="ulMembers">{itemMembers}</ul>
    </article>
  );
};

export default Club;
