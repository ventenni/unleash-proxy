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
var util_1 = require("./util");
var GradualRolloutSessionIdStrategy = /** @class */ (function (_super) {
    __extends(GradualRolloutSessionIdStrategy, _super);
    function GradualRolloutSessionIdStrategy() {
        return _super.call(this, 'gradualRolloutSessionId') || this;
    }
    GradualRolloutSessionIdStrategy.prototype.isEnabled = function (parameters, context) {
        var sessionId = context.sessionId;
        if (!sessionId) {
            return false;
        }
        var percentage = Number(parameters.percentage);
        var groupId = parameters.groupId || '';
        var normalizedId = (0, util_1.default)(sessionId, groupId);
        return percentage > 0 && normalizedId <= percentage;
    };
    return GradualRolloutSessionIdStrategy;
}(strategy_1.Strategy));
exports.default = GradualRolloutSessionIdStrategy;
//# sourceMappingURL=gradual-rollout-session-id.js.map