
<template>
    <div class="container_blur"></div> 
</template>

<style scoped>
.container_blur {
    position: absolute;
    top: -220px;
    background-color: #660099;
    width: 100%;
    height: 300px;
    border-radius: 100%;
    filter: blur(50px);
}

@media (min-width:500px) {
    .container_blur {
        width: 420px;
    }
}

</style>
