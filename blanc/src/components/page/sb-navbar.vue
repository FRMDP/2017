<template>
    <!--Navbar-->
    <nav class="dark-primary-color" role="navigation">
        <div class="nav-wrapper">
            <a @click="changeView('home')" class="right brand-logo sb-clickable-area">AgendAPP</a>
            <ul class="left hide-on-med-and-down" id="nav-mobile">
                <li><a @click="changeView('new')" class="white-text col s12 m2">Add Contact</a></li>
                <li><a @click="changeView('search')" class="white-text col s12 m2">Contact List</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'sbNavbar',
        methods: {
            changeView(view) {
                this.$emit('changeView', view);
            }
        }
    }
</script>
