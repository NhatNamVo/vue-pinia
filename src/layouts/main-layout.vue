<template>
    <div class="main-layout">
        <header class="layout-header">
            <header-bar></header-bar>
        </header>
        <main class="layout-mid">
            <nav class="layout-side-bar">
                <side-bar></side-bar>
            </nav>
            <section class="layout-content">
                <router-view></router-view>
            </section>
        </main>
        <footer class="layout-footer">
            <footer-bar></footer-bar>
        </footer>
    </div>
</template>

<script>

import headerBar from '../components/header/header.vue';
import sideBar from '../components/side-bar/side-bar.vue';
import footerBar from '../components/footer/footer.vue';

export default {
    name: 'main-layout',
    components: {
        'header-bar': headerBar,
        'side-bar': sideBar,
        'footer-bar': footerBar,
    }
}
</script>

<style lang="scss" scoped>

</style>