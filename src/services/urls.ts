import config from '../config/index'

const riskPrefix = config.riskPrefix;

/**
 * 获取全部文件类型
 */
export const getRiskFileAllTypePath = `${riskPrefix}/api/evidence/v1/materialType/listMaterialTypeTree`;