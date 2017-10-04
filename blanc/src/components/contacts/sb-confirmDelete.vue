<template>
    <div class="row">
        <div class="col s12 m6">
            <div class="card default-primary-color darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Warning!</span>
                    <p>You are about to permanently delete this contact from your book!</p>
                    <p>Do you wish to continue?</p>
                </div>
                <div class="card-action">
                    <a @click="deleteContact(toDelete)" onclick="changeView('search')">Yes</a>
                    <a @click="changeView('search')">No</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sbConfirmDelete',
        props: ['toDelete','view'],
        methods: {
            changeView(view){
                this.$emit('changeView',this.view);
                this.resetToDelete();
            },
            deleteContact(toDelete){
                this.$emit('deleteContact', this.toDelete);
            },
            resetToDelete(){
                this.toDelete = {};
            }
        }
    }
</script>