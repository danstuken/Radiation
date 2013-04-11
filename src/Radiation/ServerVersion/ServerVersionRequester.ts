/// <reference path="../Requesters/Requester.ts" />
class ServerVersionRequester{
    private _requester: Requester;

    FetchVersionFor(serverName: string) {
        this._requester.Fetch(serverName + '/BuildNumber.xml');
    }

    constructor(requester: Requester) {
        this._requester = requester;
    }
}