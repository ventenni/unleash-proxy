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
var GradualRolloutUserIdStrategy = /** @class */ (function (_super) {
    __extends(GradualRolloutUserIdStrategy, _super);
    function GradualRolloutUserIdStrategy() {
        return _super.call(this, 'gradualRolloutUserId') || this;
    }
    GradualRolloutUserIdStrategy.prototype.isEnabled = function (parameters, context) {
        var userId = context.userId;
        if (!userId) {
            return false;
        }
        var percentage = Number(parameters.percentage);
        var groupId = parameters.groupId || '';
        var normalizedUserId = (0, util_1.default)(userId, groupId);
        return percentage > 0 && normalizedUserId <= percentage;
    };
    return GradualRolloutUserIdStrategy;
}(strategy_1.Strategy));
exports.default = GradualRolloutUserIdStrategy;
//# sourceMappingURL=gradual-rollout-user-id.js.map