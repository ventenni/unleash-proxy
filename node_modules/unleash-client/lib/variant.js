"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectVariant = exports.getDefaultVariant = void 0;
var util_1 = require("./strategy/util");
var helpers_1 = require("./helpers");
var PayloadType;
(function (PayloadType) {
    PayloadType["STRING"] = "string";
})(PayloadType || (PayloadType = {}));
function getDefaultVariant() {
    return {
        name: 'disabled',
        enabled: false,
    };
}
exports.getDefaultVariant = getDefaultVariant;
function randomString() {
    return String(Math.round(Math.random() * 100000));
}
var stickinessSelectors = ['userId', 'sessionId', 'remoteAddress'];
function getSeed(context, stickiness) {
    if (stickiness === void 0) { stickiness = 'default'; }
    if (stickiness !== 'default') {
        var value = (0, helpers_1.resolveContextValue)(context, stickiness);
        return value ? value.toString() : randomString();
    }
    var result;
    stickinessSelectors.some(function (key) {
        var value = context[key];
        if (typeof value === 'string' && value !== '') {
            result = value;
            return true;
        }
        return false;
    });
    return result || randomString();
}
function overrideMatchesContext(context) {
    return function (o) {
        return o.values.some(function (value) { return value === (0, helpers_1.resolveContextValue)(context, o.contextName); });
    };
}
function findOverride(feature, context) {
    return feature.variants
        .filter(function (variant) { return variant.overrides; })
        .find(function (variant) { return variant.overrides.some(overrideMatchesContext(context)); });
}
function selectVariant(feature, context) {
    var totalWeight = feature.variants.reduce(function (acc, v) { return acc + v.weight; }, 0);
    if (totalWeight <= 0) {
        return null;
    }
    var variantOverride = findOverride(feature, context);
    if (variantOverride) {
        return variantOverride;
    }
    var stickiness = feature.variants[0].stickiness;
    var target = (0, util_1.default)(getSeed(context, stickiness), feature.name, totalWeight);
    var counter = 0;
    var variant = feature.variants.find(function (v) {
        if (v.weight === 0) {
            return undefined;
        }
        counter += v.weight;
        if (counter < target) {
            return undefined;
        }
        return v;
    });
    return variant || null;
}
exports.selectVariant = selectVariant;
//# sourceMappingURL=variant.js.map