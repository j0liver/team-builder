import React from "react";

const List = props => {
  console.log("This is from notes", props);
  return (
    <div>
      {props.memberList.map((form, index) => {
        return (
          <div className="note" key={index}>
            <h2>{form.name}</h2>
            <p>{form.job}</p>
            <p>{form.email}</p>
          </div>
        );
      })}
    </div>
  );
};
export default List;
