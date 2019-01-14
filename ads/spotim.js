
import {loadScript, validateData} from '../3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function spotim(global, data) {
  validateData(data, ['spotId', 'postId']);
  loadScript(global, 'https://recirculation.spot.im/amp-ad-launcher/');
  global.__SPOTIM_AMP__ = {spotId: data.spotId, postId: data.postId};
}
