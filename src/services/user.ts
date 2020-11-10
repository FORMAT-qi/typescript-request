import request from '../utils/request';
import { getCurrentUserPath } from './urls'

export async function queryCurrent(): Promise<any> {
    return request(getCurrentUserPath);
}