
<template>
    <div class="loader"></div>
</template>

<style scoped>
.loader {
    border: 5px dotted #33CC66;
    border-radius: 50%;
    border-top: none;
    width: 50px;
    height: 50px;
    -webkit-animation: spin-21219c47 2s linear infinite;
    animation: spin-21219c47 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

</style>
