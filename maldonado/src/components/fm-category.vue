<template>
    <div>
        {{ category }}
    </div>
</template>

<script>
    import categoryService from '../services/categorieService';

    export default {
        name: 'fmCategory',
        data() {
            return {
                category: {
                    id: 0,
                    name: ''
                }
            }
        },
        computed: {
            params() {
                return this.$route.params;
            },
            id() {
                return this.$route.params.id;
            }
        },
        methods: {
            getCategory() {
                return categoryService.getCategory(this.id);
            }
        },
        watch: {
            '$route.params.id': function() {
                this.Category = this.getCategory();
            }
        },
        created() {
            this.Category = this.getCategory();
        }
    }
</script>

<style>

</style>