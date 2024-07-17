<script setup lang="ts">

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'; 

import Icon from '../components/Icon.vue';
import Loader from '../components/Loader.vue';
import Language from '../components/Language.vue';
import Flash from '../components/Flash.vue';
import ContactCard from '../components/ContactCard.vue';

const store = useStore()

const router = useRouter()

const contacts = ref(null)

const role = sessionStorage.getItem("role");


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => contacts.value = data)


function contactHandler(id) {
    if (role !== 'admin') {
        return;
    }
    router.push(`/contacts/${id}`)
}
</script>

<template>
  <div class="container container_home">

        <Flash />

        <div class="container_box container_box_pocket">
            <span class="total_info">{{ store.getters.getTotal }}</span>
            <Language />
        </div>

        <div class="container_box  container_box_icons">
            <Icon :icon="'arrow_up_right'" :text="$t('message.moneyGet')" />
            <Icon :icon="'arrow_down_left'" :text="$t('message.moneySet')" />
            <Icon :icon="'arrows_cross'" :text="$t('message.moneySwap')" />
        </div>

        <div class="container_box container_box_contacts">
            <div class="contacts_title">{{ $t('message.contactsTitle') }}</div>
        </div>

        <div v-if="contacts" class="container_box container_box_contacts slider">
            <contact-card 
                :class="{ 'clickable': (role === 'admin') }" 
                class="container_box slider_item"
                v-for="contact in contacts" :key="contact.id"  
                :name="contact.name"
                :is_copy_available="false"
                @click="contactHandler(contact.id)"
            />
        </div>

        <div v-if="!contacts" class="container_box container_box_loader">
            <Loader />
        </div>
    </div>
</template>

<style scoped>
.container_box_pocket {
    background-image: url('./../assets/pocket.png');
    background-size: cover;
    background-repeat:no-repeat;
    background-color: transparent;
    justify-content: flex-start;
    width: 100%;
}

@media (max-width:500px) {
    .container_box_pocket {
        height: 40vw;
    }
}

@media (min-width:500px) {
    .container_box_pocket {
        height: 204px;
    }
}

.contacts_title {
    flex-grow: 1;
}

.total_info {
    margin-left: 25px;
    font-size: 50px;
    font-weight: 600;
}

.container_box_icons, 
.container_box_contacts,
.container_box_loader {
    background-color: transparent;        
}

.slider {
    overflow: auto;
}
.slider_item {
    margin: 0px 10px;
    min-width: 300px;
}

.slider_item.clickable {
    cursor: pointer;
}

.slider_item_text {
    width: 400px;
}

.slider::-webkit-scrollbar { 
    /* Safari and Chrome */
    display: none;  
}

.slider {
     /* Internet Explorer 10+ */
    -ms-overflow-style: none; 
     /* Firefox */
    scrollbar-width: none; 
}

.container_box_contacts {
    color: #ffffff;
    font-size: 25px;
    text-align: left;
    justify-content: space-between; 
}

.container_home {
    flex-direction: column;
    justify-content: flex-start;
}

</style>