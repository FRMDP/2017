<template>
    <transition name="fade">
        <div class="sb-card-alert card-panel dark-primary-color" v-if="showAlert">
            <span class="center white-text">
                <p>{{ alertMsg }}</p>
            </span>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'sbPopAlert',
        props: ['showAlert', 'alertMsg']
    }
</script>
