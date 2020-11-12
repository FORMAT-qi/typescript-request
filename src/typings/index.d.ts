

interface JokeListParams {
    sort: string; //类型，desc:指定时间之前发布的，asc:指定时间之后发布的
    time: string; //时间戳（10位），如：1418816972
    key: string; //api key
    page?: number; //	当前页数,默认1,最大20
    pagesize?: number; //	每次返回条数,默认1,最大20
}


