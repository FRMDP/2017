<template>
    <transition name="fade">
        <div class="card-panel default-primary-color" v-if="showAlert">
            <span class="white-text">
                <p>{{ alertMessage }}</p>
            </span>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'sbPopAlert',
        props: ['showAlert', 'alertMessage']
    }
</script>