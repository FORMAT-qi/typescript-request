import React, { useState } from "react";
import "./App.css";
import { getRiskFileAllTypeList,getRistCoustomerMaterialDetail } from "./services/ToolService";
// import FileTypeModel from "model/FileTypeModel";
import {MaterialDetailModel} from 'model/MaterialDetailModel'
import {FileTypeModelEx} from 'model/FileTypeModelTwo'

function App() {
  // const [dataList, setDataList] = useState<FileTypeModel[]>([]);
   const [dataList, setDataList] = useState<FileTypeModelEx[]>();

  const [materialDetail, setMaterialDetail] = useState<MaterialDetailModel>();
  return (
    <div className="App">
      <button
        onClick={async () => {
          setDataList(
            await getRiskFileAllTypeList({ sort: "", time: "", key: "" })
          );
        }
      }>点击</button>

      {dataList?.map((item) => (
        <div key={item.id} style={{ color: "red" }}>
          {item.id}
          <div>
            {item.materialTypeDTOList?.map((child) => (
              <span
                key={child.id}
              >{` ${child.typeName} `}
              </span>
            ))}
          </div>
        </div>
      ))}


      <button
        onClick={async () => {
          setMaterialDetail(
            await getRistCoustomerMaterialDetail(4)
          );
        }
      }>详情点击</button>
      <div>{materialDetail?.data.beginDate}</div>
      <div>{materialDetail?.data.customerId}</div>
    </div>
  );
}

export default App;
