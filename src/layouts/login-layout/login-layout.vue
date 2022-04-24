<template>
    <div class="login-layout">
        <div class="login-layout-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login-layout'
    }
</script>

<style lang="scss" scoped>
@import './login-layout.scss';
</style>