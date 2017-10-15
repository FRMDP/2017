<template>
    <nav>
        <div class="nav-wrapper negrita">
            <a href="#!" class="brand-logo right">Noti-bolaso</a>
            <ul class="left hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/create">Create news</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'topMenu'
    }
</script>

<style>
</style>