import config from '../config/index'

const riskPrefix = config.riskPrefix;
const newRiskFix = config.newRiskFix;

/**
 * 获取全部文件类型
 */
export const getRiskFileAllTypePath = riskPrefix +'/api/evidence/v1/materialType/listMaterialTypeTree';

// 风控举证材料 - 获取材料详情
export const risk_control_get_material_detail = newRiskFix + "/api/v1/material/detail";