<template>
	<transition name="fade">
		<div class="notification notification-alert is-info" v-if="showAlert">
			<p>{{ alertMessage }}</p>
		</div>
	</transition>
</template>

<script>
    export default {
        name: 'icAlerts',
        props: ['showAlert', 'alertMessage']
    }
</script>
