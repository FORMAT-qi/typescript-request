import requset from '../utils/requset';
import {message} from 'antd'
import {
    getRiskFileAllTypePath,
    risk_control_get_material_detail 
} from './urls'
import FileTypeModel from '../model/FileTypeModel'

import { FileTypeModelEx, getFileTypeModel } from '../model/FileTypeModelTwo';
import { MaterialDetailModel} from '../model/MaterialDetailModel';

export function getRiskFileAllTypeList(parmas:JokeListParams):Promise<any> {
    return new Promise((async (resolve, reject?) =>{
        let res = await requset(getRiskFileAllTypePath)
        if(res.code !== 0){
            message.error(res.msg)
            return;
        }
        // 自定义操作 增加字段
        res.datas = res.datas.map((item:FileTypeModelEx) =>{
            item.selected = false;
            item.status = 1;
            return item;
        })
        res.datas = [{id:1,dsdss:"asdasd",dsadasd:"asdasd"}];
        // 转model
        // const list: FileTypeModel[] = res.datas.map(FileTypeModel.fromJson);
        // console.log('list', list)
        // resolve(list)
        
        const list2:FileTypeModelEx[] = res.datas.map(getFileTypeModel);
        console.log('list2', list2);
        resolve(list2)        
    }))       
};


/**
 * 获取风控举证材料 - 获取材料详情
 * @param materialId 材料id
 */
export async function getRistCoustomerMaterialDetail(
    materialId: number
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let res = await requset(risk_control_get_material_detail,{
          method:"post",
          data:{
            materialId:materialId
          }
      })
      if (res.code !== 0) {
        message.error(res.message);
        return;
      }
     const dic:MaterialDetailModel = Object.assign(res.data as MaterialDetailModel);
      resolve(dic);
    });
  }
