<template>
    <input type="text"
           v-model="value"
           @input="$emit('input')"
           @blur="$emit('blur')"
           @focus="$emit('focus')"
    >
</template>