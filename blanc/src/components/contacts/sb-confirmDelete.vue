<template>
    <transition name="fade">
        <div class="row">
            <div class="col s12 m6">
                <div class="sb-card-alert card dark-primary-color darken-1" id="confirmDel">
                    <div class="card-content white-text">
                        <span class="card-title">Warning!</span>
                        <p>You are about to permanently delete this contact from your book!</p>
                        <p>Do you wish to continue?</p>
                    </div>
                    <div class="card-action">
                        <a @click="deleteContact(toDelete)">Yes</a>
                        <a @click="resetToDelete()">No</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'sbConfirmDelete',
        props: ['toDelete','view'],
        methods: {
            resetToDelete(){
                this.$emit('resetToDelete');
            },
            deleteContact(toDelete){
                this.$emit('deleteContact', toDelete);
            }
        }
    }
</script>
