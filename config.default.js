const ENV = "DEV";

let NonApiServerUrl;
let ElasticSearchUrl;
let mongoDB;
let settings;
let apiUrl;



if (ENV === "PROD") {
    NonApiServerUrl = "https://www.scarlet.com";
} else if (ENV === "TEST") {
    NonApiServerUrl = "https://test.scarlet.com";
} else if (ENV === "DEV") {
    NonApiServerUrl = "http://127.0.0.1:8000";
    mongodbUrl = "mongodb://127.0.0.1:27017/scarlet";
    apiUrl = "http://localhost:6200";
    settings = {
    name: "scarlet-api",
    port: 6200,
    host: "0.0.0.0"
};
}

module.exports = {
    NonApiServerUrl,
    ServerUrl: NonApiServerUrl + "/api",
    ElasticSearchUrl,
    mongodbUrl,
    settings,
    ENV,
};
