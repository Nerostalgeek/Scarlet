const ENV = "DEV";

let NonApiServerUrl;
let mongodbUrl;
let settings;
let apiUrl;
let passportSecret;
let jwtSecret;
let emailSender;
let passwordEmail;
let facebookAuth;
let googleAuth;


if (ENV === "PROD") {
    NonApiServerUrl = "YOUR APP URL";
} else if (ENV === "TEST") {
    NonApiServerUrl = "YOUR TEST SERVER APP URL";
} else if (ENV === "DEV") {
    NonApiServerUrl = "YOUR DEV APP URL";
    mongodbUrl = "YOUR MONGODB URL";
    apiUrl = "YOUR API URL ACCESS ENDPOINT";
    passportSecret = "YOUR PASSPORT SECRET";
    jwtSecret = "YOUR JWT SECRET";
    settings = {
        name: "scarlet-api",
        port: 6200,
        host: "0.0.0.0"
    };
    emailSender = "Your email sender (GMAIL is used by default";
    passwordEmail = "Your email sender password";
    facebookAuth = {
        clientID: "YOUR APP ID HERE",
        clientSecret: "YOUR SECRET KEY HERE"
    };
    googleAuth = {
        clientID: "YOUR APP ID HERE",
        clientSecret: "YOUR APP ID HERE"
    };
}

module.exports = {
    NonApiServerUrl,
    ServerUrl: NonApiServerUrl + "/api",
    mongodbUrl,
    apiUrl,
    passportSecret,
    jwtSecret,
    settings,
    emailSender,
    passwordEmail,
    facebookAuth,
    googleAuth,
    ENV,
};
