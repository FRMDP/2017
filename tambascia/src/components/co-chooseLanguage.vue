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
                    <a href="/#/en/ppal"><img src="http://simbologiadelmundo.com/wp-content/uploads/2016/06/r-estados-unidos.png" alt="Flag of USA"></a>
                </div>
                <div class="mx-auto">
                    <a href="/#/de/ppal"><img src="http://simbologiadelmundo.com/wp-content/uploads/2016/06/r-alemania.png" alt="Flag of Germany"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
        }
    }
</script>

<style>
.marginTopCustom {
    margin-top: 100px;
}
.marginTopFlags {
    margin-top : 50px;
}
.changeFont{
    font-family: 'Roboto', sans-serif;
}
</style>