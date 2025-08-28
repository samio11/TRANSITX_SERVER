"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRideStatus = void 0;
var IRideStatus;
(function (IRideStatus) {
    IRideStatus["requested"] = "requested";
    IRideStatus["accepted"] = "accepted";
    IRideStatus["driver_arrived"] = "driver_arrived";
    IRideStatus["in_progress"] = "in_progress";
    IRideStatus["completed"] = "completed";
    IRideStatus["cancelled"] = "cancelled";
})(IRideStatus || (exports.IRideStatus = IRideStatus = {}));
