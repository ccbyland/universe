export const globalConfig = {
  /**
 * 相机位置
 */
  cameraPosition: [0, 0, 6000],

  /**
   * @param [fov=50] 摄像机视锥体垂直视野角度(眼球张开的角度，0°时相当于闭眼)
   * @param [aspect=1] 摄像机视锥体长宽比(可视区域横纵比)
   * @param [near=0.1] 摄像机视锥体近端面(眼睛能看到的最近垂直距离)
   * @param [far=2000] 摄像机视锥体远端面(眼睛能看到的最远垂直距离)
   */
  cameraOptions: {
    fov: 45,
    aspect: window.innerWidth / window.innerHeight,
    near: 0.1,
    far: 30000
  },

  /**
   * 飞船与摄像机的距离
   */
  airshipDistance: 1000,
  /**
   * 飞船半径
   */
  airshipRadius: 40,
  /**
   * 飞船速度
   */
  movementSpeed: 500,
  /**
   * 控制模式
   * 1：轨迹球模式 2：飞行模式
   */
  controlMode: 1,

  /**
   * 轨道模式
   * 1：平行轨道 2：空间轨道
   */
  orbitalMode: 1,

  /**
   * 是否显示行星
   */
  showPlanet: true,

  /**
   * 是否星球转动
   */
  starTurn: true,

  /**
   * 动画速度 默认16ms一帧，此处为16ms多少倍一帧
   */
  animateSpeed: 1,

  /**
   * 是否显示辅助
   */
  showHelper: false,

  /**
   * 是否显示灯光
   */
  showLighting: true,

  /**
   * 是否显示轨道
   */
  showTrack: true,

  /**
   * 是否显示满天星
   */
  showSprite: true,

  /**
   * 满天星数量
   */
  spriteCount: 10000,

  /**
   * 碰撞阈值
   */
  collisionThreshold: 500,
}

export const setGolbalConfig = (k, val) => {
  globalConfig[k] = val
}