<template>
    <!--Navbar-->
    <nav class="dark-primary-color" role="navigation">
        <div class="nav-wrapper container">
            <a id="logo-container" @click="changeView('home')" class="right brand-logo">AgendAPP</a>
            <ul class="left hide-on-med-and-down">
                <li><a class="dropdown-button" data-activates="nav-mobile">Menu <i class="fa fa-caret-down"></i></a></li>
            </ul>
            <!--Dropdown for Mobile and Standard-->
            <ul id="nav-mobile" class="dropdown-content">
                <li><a @click="changeView('new')"><p class="default-text-primary-color">Add Contact</p></a></li>
                <li class="divider"></li>
                <li><a @click="changeView('search')"><p class="default-text-primary-color">Contact List</p></a></li>
            </ul>
            <a data-activates="nav-mobile" class="button-collapse dropdown-button"><i class="fa fa-2x fa-list"></i></a>
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