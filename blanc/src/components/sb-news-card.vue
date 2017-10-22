<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ article.title }}
            </p>
            <a :href="'/#/categories/' + article.category.id" class="card-header-icon">
              <span class="text">
                  <p class="has-text-weight-light">
                      {{ this.$stringHelper.firstCharToUpper(article.category.name) }}
                  </p>
              </span>
            </a>
        </header>

        <div v-if="shortVersion">
            <div class="card-content">
                <div class="content">
                    <p class="body-text">
                        {{ article.body.slice(0, 200) + ' ...' }}
                    </p>
                    <p class="has-text-right has-text-weight-light">Written on {{article.date | formatDate}} by {{article.reporter.name}}</p>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item" :href="'/#/news/' + article.id">Read More</a>
            </footer>
        </div>
        <div v-else>
            <div class="card-content">
                <div class="content">
                    <p class="body-text">
                        {{ article.body }}
                    </p>
                    <p class="has-text-right has-text-weight-light">Written on {{article.date | formatDate}} by {{article.reporter.name}}</p>
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item" href="/#/news">Back to All News</a>
                <a class="card-footer-item"  :href="'/#/categories/' + article.category.id">More Articles like this</a>
                <a class="card-footer-item" href="/#/categories">Back to All Categories</a>
            </footer>
        </div>
        <hr class="dropdown-divider">
    </div>
</template>

<script>
    export default {
        name: 'sbNewsCards',
        props: ['article', 'shortVersion'],
    }
</script>
