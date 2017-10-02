<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper">
                <a class="brand-logo right"><img src="img/logo.png"></a>
                <ul id="nav-mobile" class="left hide-on-med-and-down over">
                    <li>
                        <button @click="toggleMenu" class="close marginLeft" data-dismiss="alert">
                        <i class="material-icons left">menu</i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
    	name: 'zpMenu',
        data() {
    		return {
    		}
    	},
        methods: {
    		toggleMenu() {
    			this.$emit('toggleMenu');
    		}
    	}
    }
</script>