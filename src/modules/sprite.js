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
import g_2k_sun from "../resources/2k_sun.jpeg";

export function add(SCENE) {

  const vertices = [];
  const spriteCount = globalConfig.spriteCount
  for (let i = 0; i < spriteCount; i++) {

    const x = THREE.MathUtils.randFloatSpread(6000);
    const y = THREE.MathUtils.randFloatSpread(6000);
    const z = THREE.MathUtils.randFloatSpread(6000);
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