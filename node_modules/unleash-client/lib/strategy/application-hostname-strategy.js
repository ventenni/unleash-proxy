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
var os_1 = require("os");
var strategy_1 = require("./strategy");
var ApplicationHostnameStrategy = /** @class */ (function (_super) {
    __extends(ApplicationHostnameStrategy, _super);
    function ApplicationHostnameStrategy() {
        var _this = _super.call(this, 'applicationHostname') || this;
        _this.hostname = (process.env.HOSTNAME || (0, os_1.hostname)() || 'undefined').toLowerCase();
        return _this;
    }
    ApplicationHostnameStrategy.prototype.isEnabled = function (parameters) {
        if (!parameters.hostNames) {
            return false;
        }
        return parameters.hostNames
            .toLowerCase()
            .split(/\s*,\s*/)
            .includes(this.hostname);
    };
    return ApplicationHostnameStrategy;
}(strategy_1.Strategy));
exports.default = ApplicationHostnameStrategy;
//# sourceMappingURL=application-hostname-strategy.js.map