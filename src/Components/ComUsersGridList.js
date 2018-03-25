import React from 'react';

const UserRowHeader = () => (
  <div className="row border-bottom border-gray pb-2 mb-0">
    <div className="col-md-4"><strong className="text-gray-dark">First Name</strong></div>
    <div className="col-md-4"><strong className="text-gray-dark">Last Name</strong></div>
    <div className="col-md-4"><strong className="text-gray-dark">Age</strong></div>
  </div>);
const UserRow = ({
  firstName = 'Ivan',
  lastName = 'Ivanov',
  age = 0
}) => (
  <div className="row border-bottom border-gray pb-2 mb-0">
    <div className="col-md-4">{firstName}</div>
    <div className="col-md-4">{lastName}</div>
    <div className="col-md-4">{age}</div>
  </div>);


export const ComUsersGridList = props => (
  <div>
    <UserRowHeader />
    {
      ((props.users || []).map(el => <UserRow {...el} key={`${el.age}${el.lastName}`} />))
    }
  </div>);

