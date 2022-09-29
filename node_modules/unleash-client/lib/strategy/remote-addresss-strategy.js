"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var strategy_1 = require("./strategy");
var ip = require('ip');
var RemoteAddressStrategy = /** @class */ (function (_super) {
    __extends(RemoteAddressStrategy, _super);
    function RemoteAddressStrategy() {
        return _super.call(this, 'remoteAddress') || this;
    }
    RemoteAddressStrategy.prototype.isEnabled = function (parameters, context) {
        if (!parameters.IPs) {
            return false;
        }
        return parameters.IPs.split(/\s*,\s*/).some(function (range) {
            if (range === context.remoteAddress) {
                return true;
            }
            if (!ip.isV6Format(range)) {
                try {
                    return ip.cidrSubnet(range).contains(context.remoteAddress);
                }
                catch (err) {
                    return false;
                }
            }
            return false;
        });
    };
    return RemoteAddressStrategy;
}(strategy_1.Strategy));
exports.default = RemoteAddressStrategy;
//# sourceMappingURL=remote-addresss-strategy.js.map