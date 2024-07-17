<script setup lang="ts">

import { ref } from "vue";
import { useNotification } from "@kyvg/vue3-notification";
import { useRouter } from 'vue-router'; 

import TextField from './../components/TextField.vue'
import Flash from './../components/Flash.vue';

const router = useRouter()
const { notify }  = useNotification()

const auth = ref({
    password: '',
    passwordConfirm: ''
})

const passwordComponent = ref({
    type: 'password',
    id: 'password',
    name: 'password',
    placeholder: "Пароль",
    errorMessage: null,
    minLength: 4
})

const confirmPasswordComponent = ref({
    type: 'password',
    id: 'password_confirm',
    name: 'password_confirm',
    placeholder: "Підтвердження паролю",
    errorMessage: null,
    minLength: 4
})

const isFormValid = ref(true)

const submit = () => {
    if (!isFormValid.value) {
        notify({ type: "error", text: "Перевірте правильність даних"});
    } else {
        sessionStorage.setItem("role", auth.value.password);
        router.push('/home')
    }
}

const validateForm = (isValid) => {
    const isPasswordsMatch = auth.value.password === auth.value.passwordConfirm;

    isFormValid.value = isValid && isPasswordsMatch;
}

</script>

<template>
    <div class="container">
        <Flash />

        <div class="container_box container_box_authorization">
            <form class="form">
                <text-field 
                    v-model="auth.password"
                    :component-data="passwordComponent"
                    @form-validate="validateForm"
                />
                <text-field 
                    v-model="auth.passwordConfirm"
                    :component-data="confirmPasswordComponent"
                    @form-validate="validateForm"
                />
                <button 
                    class="form_element form_element_button" 
                    type="button" 
                    @click="submit">
                    {{ $t('message.authBtnTitle') }}
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.container_box_authorization {
    background-color: transparent;
}
</style>
  