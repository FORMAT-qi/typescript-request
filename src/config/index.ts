import localConfig from '../config/config.local';
import prodConfig from '../config/config.prod';
const envConfig = process.env.NODE_ENV !== 'production' ? localConfig :prodConfig;

const config = {
    ...envConfig,
}
export default config;