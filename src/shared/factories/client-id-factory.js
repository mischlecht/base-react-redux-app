import * as _ from 'underscore';

export function getCid(name) {
    return _.uniqueId(name);
}