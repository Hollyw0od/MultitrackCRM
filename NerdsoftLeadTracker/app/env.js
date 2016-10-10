(function (window) {
    window.envSettings = window.envSettings || {};

    // Host url
    window.envSettings.hostUrl = 'http://localhost:46081/';

    // API url
    window.envSettings.apiServiceBaseUri = 'http://localhost:61017/';

    // SMTN API url
    window.envSettings.smtnAPIServiceBaseUri = 'http://localhost:55083/';

    // SMTN Url
    window.envSettings.smtnUrl = 'http://www.smtnleadtracker.stage/'

    // Base url
    window.envSettings.baseUrl = '/';

    // Client ID
    window.envSettings.clientId = 'nerdsoftLeadTracker';

    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.envSettings.enableDebug = true;
}(this));