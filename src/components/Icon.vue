<script setup lang="ts">

const props = defineProps<{
    icon: string
    text: string
}>()

</script>

<template>
    <div class="icon_box">
        <div class="icon">
            <img v-if="props.icon === 'arrow_up_right'" src="./../assets/arrow_up_right.png" /> 
            <img v-if="props.icon === 'arrow_down_left'" src="./../assets/arrow_down_left.png" /> 
            <img v-if="props.icon === 'arrows_cross'" src="./../assets/arrows_cross.png" /> 
        </div>
        <span>{{ props.text }}</span>
    </div>
</template>

<style scoped>
.icon_box {
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}

.icon_box:hover {
    cursor: pointer;
}

.icon {
    border-radius: 30px;
    border: 3px solid #333333;
    padding: 10px;
    margin: 15px;
}

.icon:hover {
    transform: scale(1.1); 
}

.icon:active {
    background-color: #999999;
}

.icon img {
    width: 50px;
    height: 50px;
}

</style>
