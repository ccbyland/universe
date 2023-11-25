/**
 * 粒子
 */

import * as THREE from "three";
import {
  getBufferGeometry
} from "../common/geometry";
import {
  getMaterial
} from "../common/material";
import { globalConfig } from '../globalConfig';
import g_2k_sun from "/resources/2k_sun.jpeg";

export function add(SCENE) {

  const vertices = [];
  const spriteCount = globalConfig.spriteCount
  for (let i = 0; i < spriteCount; i++) {
    // 在区间 [-6000,6000] 内随机一个浮点数。
    const x = THREE.MathUtils.randFloatSpread(spriteCount / 2);
    const y = THREE.MathUtils.randFloatSpread(spriteCount / 2);
    const z = THREE.MathUtils.randFloatSpread(spriteCount / 2);
    vertices.push(x, y, z);
  }

  const geometry = getBufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const TextureLoader = new THREE.TextureLoader();
  const texture = TextureLoader.load(g_2k_sun);
  const material = getMaterial('Points', {
    size: 10,    
    // map: texture,
    // color: 0xFFFFFF * Math.random(),
    color: 0xFFFFFF
  });
  const points = new THREE.Points(geometry, material);
  points._name = '粒子';
  SCENE.add(points);
}