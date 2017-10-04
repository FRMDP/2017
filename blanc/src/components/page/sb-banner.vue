<template>
    <div id="index-banner" class="default-primary-color sb-clickable-area" @click="changeView('home')">
        <div class="section">
            <div class="container">
                <br><br>
                <h1 class="header center white-text">AgendAPP</h1>
                <div class="row center">
                <h5 class="header col m12 light white-text">Your Web Address Book by excellence! Light, fast and convenient!</h5>
                </div>
                <br><br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sbBanner',
        methods: {
            changeView(view) {
                this.$emit('changeView', view);
            }
        }
    }
</script>
