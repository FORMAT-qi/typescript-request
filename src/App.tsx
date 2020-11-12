import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getRiskFileAllTypeList } from "./services/ToolService";
import FileTypeModel from "model/FileTypeModel";

function App() {
  const [dataList, setDataListData] = useState<FileTypeModel[]>([]);
  return (
    <div className="App">
      <button
        onClick={async () => {
          setDataListData(
            await getRiskFileAllTypeList({ sort: "", time: "", key: "" })
          );
        }
      }>点击</button>

      {dataList.map((item) => (
        <div key={item.id} style={{ color: "red" }}>
          {item.typeName}
          <div>
            {item.materialTypeDTOList.map((child) => (
              <span
                key={child.id}
              >{` ${child.typeName} `}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
