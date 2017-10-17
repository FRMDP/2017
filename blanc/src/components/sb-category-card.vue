<template>
    </div>
        <div class="column is-4-desktop">
            <a :href="linkToCategoryArticles">
                <div class="card">
                    <div class="card-content default-primary-color card-is-raised">
                        <p class="card-header-title has-text-white is-centered is-size-5">
                            {{ this.$stringHelper.firstCharToUpper(category.name) }}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sbCategoryCards',
        props: ['category'],
        computed: {
            linkToCategoryArticles(){
                return ('/#/categories/' + this.category.id);
            }
        }
    }
</script>