import React, { useState } from "react";
import "./form.css";
const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const changeData = (e) => {
    setInputValue(e.target.value); 
  };

  const addData = () => {
    if (inputValue.trim() !== "") {
      setData([...data, inputValue]);
      setInputValue("");
    }
  };
  const deleteData = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  return (
    <div className="container">
      <div className="form_area">
        <h4 className="title">FORM</h4>
        <div className="form_group">
          <input
            type="text"
            className="form_style"
            id="name"
            value={inputValue}
            onChange={changeData}
            placeholder="Enter the data"
          />
          <button className="btn" onClick={addData}>
            Add
          </button>
          </div>
          <div />
          <div className="table">
            <table>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    
                    <td className="item">{item}</td>
                    
                    
                    <td>
                      <button className= 'btn' onClick={() => updateData(index)}>Update</button>
                      <button className= 'btn' onClick={() => deleteData(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        
      </div>
    </div>
  );
};

export default Form;
