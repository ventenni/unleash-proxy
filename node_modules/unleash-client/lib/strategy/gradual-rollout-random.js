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
var GradualRolloutRandomStrategy = /** @class */ (function (_super) {
    __extends(GradualRolloutRandomStrategy, _super);
    function GradualRolloutRandomStrategy(randomGenerator) {
        var _this = _super.call(this, 'gradualRolloutRandom') || this;
        _this.randomGenerator = function () { return Math.floor(Math.random() * 100) + 1; };
        _this.randomGenerator = randomGenerator || _this.randomGenerator;
        return _this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    GradualRolloutRandomStrategy.prototype.isEnabled = function (parameters, context) {
        var percentage = Number(parameters.percentage);
        var random = this.randomGenerator();
        return percentage >= random;
    };
    return GradualRolloutRandomStrategy;
}(strategy_1.Strategy));
exports.default = GradualRolloutRandomStrategy;
//# sourceMappingURL=gradual-rollout-random.js.map