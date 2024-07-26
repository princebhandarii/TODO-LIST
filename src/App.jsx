import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [Data, setData] = useState("");
  const [Datas, setDatas] = useState([]);
  const [isEditing, setisEditing] = useState(false);
  const [currentIndex, setcurrentIndex] = useState("");

  const handleData = () => {
    if (Data !== "") {
      if (isEditing) {
        const UpdateData = [...Datas];
        UpdateData[currentIndex] = Data;
        setDatas(UpdateData);
        setisEditing(false);
        setcurrentIndex("");
      } else {
        const NewData = [...Datas, Data];
        setDatas(NewData);
      }
      setData("");
    }
  };
  const handleDelete = (index) => {
    const Deletedata = [...Datas];
    Deletedata.splice(index, 1);
    setDatas(Deletedata);
  };
  const handleUpdate = (index) => {
    setData(Datas[index]);
    setisEditing(true);
    setcurrentIndex(index);
  };
  return (
    <div>
      <div className="text-center">
        <input
          placeholder="Enter Data"
          type="text"
          value={Data}
          onChange={(e) => setData(e.target.value)}
          className="border-4"
        />
        <button onClick={handleData} className="border-2 ml-4 ">
          {isEditing ? "Update Data" : "Add Data"}
        </button>
      </div>
      <div className="text-center pt-4">
        <h3 className="text-4xl underline">Your List</h3>
        <div className="text-center pt-4">
          <table className=" ml-96 table-zebra ">
            <tr className="text-2xl">
              <td>Iteam</td>
              <td className="pl-4">Delete</td>
              <td className="pl-4">Update</td>
            </tr>
            {Datas.map((data, index) => (
              <tr key={index} className="text-xl">
                <tr>{data}</tr>
                <td>
                  <button
                    className="border-2 ml-2 bg-red-600"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="border-2 ml-2 bg-green-500"
                    onClick={() => handleUpdate(index)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
