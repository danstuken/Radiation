/// <reference path="../Requesters/Requester.ts" />
var ServerVersionRequester = (function () {
    function ServerVersionRequester(requester) {
        this._requester = requester;
    }
    ServerVersionRequester.prototype.FetchVersionFor = function (serverName) {
        this._requester.Fetch(serverName + '/BuildNumber.xml');
    };
    return ServerVersionRequester;
})();
//@ sourceMappingURL=ServerVersionRequester.js.map
