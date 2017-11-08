<template>
    <ul class="nav justify-content-center">
        <li>
            <a class="nav-link active" href="/#/en/ppal"><img src="https://cdn0.iconfinder.com/data/icons/citycons/150/Citycons_newspaper-64.png" alt="Web Newspaper Icon"></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="#">Hello</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="/#/en/category/business">Buisness</a>
                <a class="dropdown-item" href="/#/en/category/entertainment">Entretainment</a>
                <a class="dropdown-item" href="/#/en/category/gaming">Gaming</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link1</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link2</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'navigation',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>

</style>