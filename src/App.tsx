import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';
import {getRiskFileAllTypeList} from './services/ToolService';
import FileTypeModel from 'model/FileTypeModel';


function App() {
  const  [dataList, setDataListData] =  useState<FileTypeModel[]>([]);
  return (
    <div className="App">
       <button onClick={ async ()=> {
          setDataListData(await getRiskFileAllTypeList({"sort":"", "time":"", "key":""}));
       }}>点击</button>
       {dataList&&dataList.map(item => (<span key={item.id} style={{color:"red"}}>{item.typeName}</span> ))}
    </div>
  );
  
}

export default App;
