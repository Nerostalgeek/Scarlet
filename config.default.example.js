const ENV = "DEV";

let NonApiServerUrl;
let mongodbUrl;
let settings;
let apiUrl;
let passportSecret;
let jwtSecret;


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
}

module.exports = {
    NonApiServerUrl,
    ServerUrl: NonApiServerUrl + "/api",
    mongodbUrl,
    apiUrl,
    passportSecret,
    jwtSecret,
    settings,
    ENV,
};
