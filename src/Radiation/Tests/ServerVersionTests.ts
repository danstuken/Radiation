/// <reference path="../Requesters/HttpRequester.ts" />
/// <reference path="../ServerVersion/ServerVersionRequester.ts" />
/// <reference path="../d.ts/DefinitelyTyped/jasmine/jasmine.d.ts" />

describe("when ServerVersionRequester pulls a version from a server", () => {
    var mockRequester, versionRequester = null;

    beforeEach(() => {
        mockRequester = {
            Fetch: function (fetchArg: string) {
            }
        }
        versionRequester = new ServerVersionRequester(mockRequester);

        spyOn(mockRequester, "Fetch");

        versionRequester.FetchVersionFor("mock.server.local");
    });

    it("requests BuildNumber.xml from the server", () => {
        expect(mockRequester.Fetch).toHaveBeenCalledWith("mock.server.local/BuildNumber.xml");
    });
});