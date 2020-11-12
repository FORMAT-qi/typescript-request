import requset from '../utils/requset';
import {message} from 'antd'
import {getRiskFileAllTypePath } from './urls'
import FileTypeModel from '../model/FileTypeModel'

// interface FileTypeModel {
//     id: number,
//     level: number,
//     parentId: number,
//     source: number,
//     typeName: string,
//     updateTime: string,
//     createTime: string,
//     materialTypeDTOList: [],      
//   }
  
//   interface FileTypeModelList {
//     statusText: string;
//     createdDateString: string;
//     fileTypeModel: FileTypeModel;
//   }
//   function getPostInfoFromPost(fileTypeModel: FileTypeModel): FileTypeModelList {
//     const statusText = "1111";
//     const createdDateString = "2222";
//     return { statusText, createdDateString, fileTypeModel };
//   }

export function getRiskFileAllTypeList(parmas:JokeListParams):Promise<any> {
    return new Promise(((resolve, reject?) =>{
        requset(getRiskFileAllTypePath).then(res=>{
            if(res.code !== 0){
                message.error(res.msg)
                return;
            }
            res.datas = res.datas.map((item: { status: number}) =>{
                item["status"] = 1;
                return item;
            } )
        
            const list: FileTypeModel[] = res.datas.map(FileTypeModel.fromJson);
            console.log('list', list)


            // const list: FileTypeModel[] = res.datas as FileTypeModel[];
            //  console.log('list', list)
            resolve(list)
        }).catch(err=>{
            reject(err)
        })
    }))
          
};

