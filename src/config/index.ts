import localConfig from '../config/config.local';
import prodConfig from '../config/config.prod';
const config = process.env.NODE_ENV != 'production' ? localConfig :prodConfig;

export default {
    ...config,
}