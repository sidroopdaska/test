"use strict";
(function (CollectionStatus) {
    CollectionStatus[CollectionStatus["None"] = 0] = "None";
    CollectionStatus[CollectionStatus["Success"] = 1] = "Success";
    CollectionStatus[CollectionStatus["Error"] = 2] = "Error";
    CollectionStatus[CollectionStatus["Delay"] = 3] = "Delay";
})(exports.CollectionStatus || (exports.CollectionStatus = {}));
var CollectionStatus = exports.CollectionStatus;
(function (MatchStatus) {
    MatchStatus[MatchStatus["None"] = 0] = "None";
    MatchStatus[MatchStatus["Pending"] = 1] = "Pending";
    MatchStatus[MatchStatus["Confirmed"] = 2] = "Confirmed";
    MatchStatus[MatchStatus["OwnedNotSubmitted"] = 3] = "OwnedNotSubmitted";
    MatchStatus[MatchStatus["IncorrectMatching"] = 4] = "IncorrectMatching";
})(exports.MatchStatus || (exports.MatchStatus = {}));
var MatchStatus = exports.MatchStatus;
