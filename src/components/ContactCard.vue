<script setup lang="ts">

import { defineProps } from 'vue';
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()

const props = defineProps<{
    name: string
    is_copy_available: boolean
}>()


const copy = (name: string, text: string) => {
    navigator.clipboard.writeText(name);

    notify({
        type: "success", text: text
    });
}

</script>

<template>
  
    <div class="container_box container_box_contact">
        <div class="contact">
            <img class="contact_logo" src="./../assets/no_image.png" /> 
            <span class="contact_text">{{props.name}}</span>
            <img 
                v-if="props.is_copy_available" 
                class="contact_copy" 
                src="./../assets/copy.png" 
                @click="copy(props.name, $t('message.copyNameMsg'))"
            /> 
        </div>
    </div>
  
</template>
  
<style scoped>
.container_box_contact {
    height: 97px;
    justify-content: left;
    align-items: start;
    padding: 15px;
    color: #000000;
    font-weight: 700;
    font-size: 20px;
}

.contact {
    display: flex;
    align-items: center;
}

.contact .contact_logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
}

.contact .contact_copy {
    cursor: pointer;
    width: 25px;
    height: 25px;
    position: absolute;
    right: 0;
    margin-right: 15px;
}

</style>
  