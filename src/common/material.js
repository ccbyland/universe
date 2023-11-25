/**
 * 材质
 */

import * as THREE from "three";

/**
 * 创建材质
 *
 * @export
 * @param {*} type 材质类型
 * @param {*} opt
 * @return {*} 
 */
export function getMaterial(type, opt) {
    return new THREE[`${type}Material`](opt);
}