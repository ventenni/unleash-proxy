import { Strategy } from './strategy';
import { Context } from '../context';
export default class FlexibleRolloutStrategy extends Strategy {
    private randomGenerator;
    constructor(radnomGenerator?: Function);
    resolveStickiness(stickiness: string, context: Context): any;
    isEnabled(parameters: any, context: Context): boolean;
}
//# sourceMappingURL=flexible-rollout-strategy.d.ts.map