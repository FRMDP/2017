<template>
    <!--Main Menu-->
    <div class="container">
        <div class="section">

            <!--   Icon Section   -->
            <div class="row">
                <div class="col s12 m6">
                    <div class="icon-block">
                        <h1 class="center"><a @click="changeView('new')"><i class="fa fa-2x fa-user-plus secondary-text-color sb-clickable-area" aria-hidden="true"></i></a></h1>
                        <a @click="changeView('new')"><h5 class="center default-text-primary-color sb-clickable-area">Add Contact</h5></a>
                    </div>
                </div>

                <div class="col s12 m6">
                    <div class="icon-block">
                        <h1 class="center"><a @click="changeView('search')"><i class="fa fa-2x fa-address-card-o secondary-text-color sb-clickable-area" aria-hidden="true"></i></a></h1>
                        <a @click="changeView('search')"><h5 class="center default-text-primary-color sb-clickable-area">Contact Book</h5></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'sbContactsHome',
        methods: {
            changeView(view) {
                this.$emit('changeView', view);
            }
        }
    }
</script>
