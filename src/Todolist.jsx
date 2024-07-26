import React from "react";
import { useState } from "react";

function Todolist() {
  const [data, setdata] = useState("");
  const [datas, setdatas] = useState([]);
  const [isEditing, setisEditing] = useState(false);
  const [currentIndex, setcurrentIndex] = useState("");

  const handledata = () => {
    if (data !== "") {
      if (isEditing) {
        const NewDatas = [...datas];
        NewDatas[currentIndex] = data;
        setdatas(NewDatas);
        setisEditing(false);
        setcurrentIndex("");
      } else {
        const app = [...datas, data];
        setdatas(app);
      }
      setdata("");
    }
  };
  const handleDelete = (index) => {
    const deletedata = [...datas];
    deletedata.splice(index, 1);
    setdatas(deletedata);
  };
  const handleUpdate = (index) => {
    const updatedata = datas[index];
    setdata(updatedata);
    setisEditing(true);
    setcurrentIndex(index);
  };
  return (
    <div className="text-center pt-4">
      <input
        type="text"
        placeholder="Enter your data"
        onChange={(e) => setdata(e.target.value)}
        value={data}
        className="border border-zinc-900 h-10 w-44"
      />
      <button onClick={handledata} className="pl-4">
        {isEditing ? "Update Data" : "Add Data"}
      </button>
      <div className="text-center pt-4">
        <h1 className="text-2xl">Your Data</h1>
        {
          <table className="table table-fixed table-zebra-zebra">
            <thead>
              <tr className="text-3xl">
                <td>Iteams</td>
                <td>Delete</td>
                <td>Update</td>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <td key={index} className="text-2xl">
                    {data}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      className="hover:bg-red-700 rounded-full text-2xl"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleUpdate(index)}
                      className="hover:bg-green-700 rounded-full text-2xl"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default Todolist;
