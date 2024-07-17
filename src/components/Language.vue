
<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option 
                v-for="locale in $i18n.availableLocales" 
                :key="`locale-${locale}`" 
                :value="locale">
                {{ locale.toUpperCase() }}
            </option>
        </select>
    </div>
</template>

<style scoped>

.locale-changer {
    position: absolute;
    top: 0px;
    right: 5px;
    background-color: #000000;
    width: 60px;
    height: 40px;
    border-radius: 12px;
}

.locale-changer select {
    background-color: #000000;
    width: 60px;
    height: 40px;
    color: #ffffff;
    text-align: center;
    border-radius: 12px;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}

.locale-changer select:focus {
    outline: none;
}

</style>
