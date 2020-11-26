
/**
 * 材料预警配置 - 预警项列表
 * @param sort //类型，desc:指定时间之前发布的，asc:指定时间之后发布的
 * @param time 时间戳（10位），如：1418816972
 * @param key //api key
 * @param page //	当前页数,默认1,最大20
 * @param pagesize //	每次返回条数,默认1,最大20
 */
interface JokeListParams {
    sort: string; 
    time: string; 
    key: string; 
    page?: number; 
    pagesize?: number; 
}


