<script setup>
import './index'
import { reactive, ref } from 'vue'
import { ElButton, ElRadio, ElRadioGroup, ElSwitch, ElDrawer, ElDivider, ElInputNumber } from 'element-plus'
import { setGolbalConfig } from './globalConfig'
const drawer = ref(false)

const formData = reactive({
    controlMode: '1',
    orbitalMode: '1',
    showPlanet: true,
    starTurn: true,
    showHelper: false,
    showLighting: true,
    showTrack: true,
    showSprite: true,
    spriteCount: 5000
})

const change = () => {
    localStorage.setItem('__universe_config_data__', JSON.stringify(formData))
}

const applySetter = () => {
    window.location.reload()
}

function initConfig() {
    let universeConfigData = localStorage.getItem('__universe_config_data__')
    if (universeConfigData) {
        universeConfigData = JSON.parse(universeConfigData)
        for (const k in universeConfigData) {
            if (Object.hasOwnProperty.call(universeConfigData, k)) {
                const val = universeConfigData[k];
                setGolbalConfig(k, val)
                formData[k] = val
            }
        }
    }
}

initConfig()

</script>

<template>
    <el-button class="setter-btn" type="primary" plain @click="drawer = true">设置器</el-button>
    <el-drawer size="300" v-model="drawer" title="I am the title" :with-header="false" @close="drawerClose()">
        <div class="mb-2 flex items-center text-sm">
            <div>控制模式</div>
            <el-radio-group v-model="formData.controlMode" class="ml-4" @change="change()">
                <el-radio label="1">轨迹球模式</el-radio>
                <el-radio label="2">飞行模式(WASD+上下左右按键控制)</el-radio>
            </el-radio-group>
        </div>
        <div class="mb-2 flex items-center text-sm">
            <div>轨道模式</div>
            <el-radio-group v-model="formData.orbitalMode" class="ml-4" @change="change()">
                <el-radio label="1">平行轨道</el-radio>
                <el-radio label="2">空间轨道</el-radio>
            </el-radio-group>
        </div>
        <div class="mb-2 flex items-center text-sm">
            <div>是否显示行星</div>
            <el-switch v-model="formData.showPlanet" @change="change()"></el-switch>
        </div>
        <div class="mb-2 flex items-center text-sm">
            <div>是否星球转动</div>
            <el-switch v-model="formData.starTurn" @change="change()"></el-switch>
        </div>
        <div class="mb-2 flex items-center text-sm">
            <div>是否显示灯光</div>
            <el-switch v-model="formData.showLighting" @change="change()"></el-switch>
        </div>
        <div class="mb-2 flex items-center text-sm">
            <div>是否显示轨道</div>
            <el-switch v-model="formData.showTrack" @change="change()"></el-switch>
        </div>
        <div class="mb-2 flex items-center text-sm">
            <div>是否显示满天星</div>
            <el-switch v-model="formData.showSprite" @change="change()"></el-switch>
        </div>
        <div class="mb-2 flex items-center text-sm">
            <div>满天星数量(0-100万)</div>
            <el-input-number v-model="formData.spriteCount" :min="0" :max="100000" :step="1000" @change="change" />
        </div>
        <div class="mb-2 flex items-center text-sm">
            <div>是否显示辅助线</div>
            <el-switch v-model="formData.showHelper" @change="change()"></el-switch>
        </div>
        <el-divider />
        <div class="mb-2 flex items-center text-sm">
            <el-button type="primary" plain @click="applySetter()">应用设置</el-button>
        </div>
    </el-drawer>
</template>