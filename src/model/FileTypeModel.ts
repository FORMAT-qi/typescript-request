

type JsonObject = { [key: string]: any };

class FileTypeModel {
  constructor(
      readonly id: number,
      readonly level: number,
      readonly parentId: number,
      readonly source: number,
      readonly typeName: string,
      readonly updateTime: string,
      readonly createTime: string,
      readonly age: number,
      public materialTypeDTOList: FileTypeModel[],
    ) {
      this.materialTypeDTOList = materialTypeDTOList&&materialTypeDTOList.map(FileTypeModel.fromJson)
    }

   static fromJson(json: JsonObject): FileTypeModel {
      return new FileTypeModel(
        json.id || null,
        json.level || null,
        json.parentId || null,
        json.source || null,
        json.typeName || null,
        json.updateTime || null,
        json.createTime || null,
        json.age || null,
        json.materialTypeDTOList || null,
      );
    }

  }
export default FileTypeModel