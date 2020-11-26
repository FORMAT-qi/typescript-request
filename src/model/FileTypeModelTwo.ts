enum FileTypeStatus {
	draft = 0, //草稿
	published = 1, //已发布
	revoked = 2 //已撤回
}

function formatFileTypeStatus(status: FileTypeStatus) {
	const statusTextMap = {
		[FileTypeStatus.draft]: '草稿',
		[FileTypeStatus.published]: "已发布",
		[FileTypeStatus.revoked]: "已撤回"
	};
	return statusTextMap[status] || "";
}

interface FileTypeModel {
	id: number;
	createTime: string;
	updateTime: string;
	typeName: string;
	level: number;
	parentId: number;
	source: number;
	materialTypeDTOList: FileTypeModelEx[];
}
export interface FileTypeModelEx extends FileTypeModel {
	selected: boolean,
	status: number,
	statusText: string
}
export function getFileTypeModel(model: FileTypeModelEx): FileTypeModelEx {
	const statusText = formatFileTypeStatus(model.status);
	const materialTypeDTOList = model.materialTypeDTOList?.map(getFileTypeModel);
	return Object.assign(model, { statusText, materialTypeDTOList });
}

