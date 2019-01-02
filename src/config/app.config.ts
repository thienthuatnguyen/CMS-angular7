import { environment } from 'src/environments/environment';

export class Config {
    static hostUrl = environment.host;
    private static baseUrl = Config.hostUrl + '/api/TCApp';
    
    // All API response will be transformed. Please checkout HttpClientConfig.transformResponseBody()
    static api = {
        Login: `${Config.baseUrl}/User/Login`,
        Logout: `${Config.baseUrl}/User/Logout`
    };    
}


