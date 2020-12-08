

interface Data {
	customerId: string;
	beginDate: string;
	remark: string;
	endDate: string;
	contractNo: string;
	customerName: string;
}

export interface MaterialDetailModel {
	cabinetNo: string;
	created: string;
	data: Data;
	fileName: string;
	fileUrl: string;
	id: string;
	operationUserId: string;
	operationUserName: string;
	parentTypeId: string;
	parentTypeName: string;
	previewUrl: string;
	source: number;
	typeId: string;
	typeName: string;
	updated: string;
}

