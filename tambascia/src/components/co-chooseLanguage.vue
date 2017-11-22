<template>
    <div>
        <div class="row marginTopCustom">
            <div class="mx-auto">
                <h1 class="changeFont">Please select your preferred language</h1>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row marginTopFlags">
                <div class="mx-auto">
                    <router-link :to="{ name: 'ppalEn' }"><img src="../../static/us.png" alt="Flag of USA"></router-link>
                </div>
                <div class="mx-auto">
                    <router-link :to="{ name: 'ppalEn' }"><img src="../../static/german.png" alt="Flag of Germany"></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'chooseLanguage',
        data() {
            return {}
        },
        methods: {
        }
    }
</script>

<style lang="scss">
.marginTopCustom {
    margin-top: 100px;
}
.marginTopFlags {
    margin-top : 50px;
}
.changeFont{
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
}
</style>
