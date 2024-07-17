<script setup lang="ts">

import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
    modelValue: {
        required: true
    },
    componentData: {
        type: Object,
        default: () => {
            return {
                type: 'text',
                id: 'id',
                name: 'name',
                placeholder: "Placeholder",
                errorMessage: null,
                minLength: null
            }
        }
    }
})

const localError = ref('')

const emit = defineEmits(['update:modelValue', 'form-validate'])

const onInput = (value) => {
    emit('update:modelValue', value.target.value)
}

const validate = (event) => {
    const isValid = props.componentData.minLength && event.target.value.length >= props.componentData.minLength;
    
    localError.value = !isValid 
        ? `Пароль повинен мати мінімум ${props.componentData.minLength} символа` 
        : '';

    emit('form-validate', !!isValid)
}

</script>

<template>
  
  <input 
        class="form_element form_element_input" 
        :type="props.componentData.type" 
        :id="props.componentData.id" 
        :name="props.componentData.name" 
        :placeholder="props.componentData.placeholder"
        @input="onInput"
        @blur="validate" 
    />
    <span class="form_element_error" v-if="props.componentData.errorMessage || localError">
        {{ props.componentData.errorMessage || localError }}
    </span>
                
</template>