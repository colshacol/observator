import { isString } from './isString'

export const ifString = (target, cb) => {
  return isString(target) && cb();
};