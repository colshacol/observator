import { isFunction } from './isFunction'

export const ifFunction = (target, cb) => {
  return isFunction(target) && cb();
};