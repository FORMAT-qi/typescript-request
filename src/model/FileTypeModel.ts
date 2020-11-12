

type JsonObject = { [key: string]: any };

enum FileTypeStatus {
  draft = 0, //草稿
  published = 1, //已发布
  revoked = 2 //已撤回
}

function formatFileTypeStatus(status: FileTypeStatus) {
  const statusTextMap = {
    [FileTypeStatus.draft]: "草稿",
    [FileTypeStatus.published]: "已发布",
    [FileTypeStatus.revoked]: "已撤回"
  };
  return statusTextMap[status] || "";
}

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
      public status: number,
      public statusText: string,
    ) {
      this.materialTypeDTOList = materialTypeDTOList&&materialTypeDTOList.map(FileTypeModel.fromJson);
      this.statusText =  formatFileTypeStatus(status);
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
        json.status || null,
        json.statusText || null,
      );
    }

  }
export default FileTypeModel