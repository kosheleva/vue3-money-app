<script setup lang="ts">

import { ref } from 'vue';
import { useRoute } from 'vue-router'; 

import Loader from '../components/Loader.vue';
import Flash from '../components/Flash.vue';
import ContactCard from '../components/ContactCard.vue';

const route = useRoute()

const contact = ref(null)

fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
    .then(response => response.json())
    .then(data => contact.value = data)

</script>

<template>
    <div class="container container_contact">
        <Flash />
        
        <contact-card 
            v-if="contact"
            :name="contact.name"
            :is_copy_available="true"
        />

        <div v-if="contact" class="container_box contact_info">
            <div><b>{{ $t('message.contactName') }}:</b>{{ contact.name }}</div>
            <div><b>{{ $t('message.contactSurname') }}:</b>{{ contact.username }}</div>
            <div><b>{{ $t('message.contactEmail') }}:</b>{{ contact.email }}</div>
            <div><b>{{ $t('message.contactPhone') }}:</b>{{ contact.phone }}</div>
            <div><b>{{ $t('message.contactAddress') }}:</b>
              {{ contact.address.zipcode }} / {{ contact.address.street }} / {{ contact.address.suite }}
            </div>
        </div>

        <div v-if="!contact"><Loader /></div>

    </div>
</template>

<style scoped>



.container_contact {
    flex-direction: column;
    justify-content: flex-start;
}

.contact_info {
    align-items: flex-start;
    flex-direction: column;
    padding: 30px;
    background-color: transparent;
    color: #ffffff;
    font-size: 18px;
    border: 2px solid #33CC66;
    border-radius: 20px;
}

.contact_info div {
    margin: 5px 0px; 
}

.contact_info div b {
    color: #33CC66; 
    margin-right: 10px;
}
</style>
  