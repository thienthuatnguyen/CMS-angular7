export class LoginModel {
    DealerID: string;
    LoginID: string;
    DistributorID: string;
    Password: string;
    LanguageCodeEnum: string;
}
export const LoginEvent = {
    Login: "user-login"
}