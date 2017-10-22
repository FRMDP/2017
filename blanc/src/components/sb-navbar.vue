<template>
    <nav class="navbar is-transparent is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <a class="navbar-item has-text-white is-size-5" href="/#/home">
              <p>
                <b-icon
                  pack="fa"
                  icon="newspaper-o"
                  size="is-medium">
                </b-icon> News Page
              </P>
          </a>
        </div>
        <span class="navbar-burger has-addons-centered" @click.prevent="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div class="navbar-end">
        <div id="navMenu" class="navbar-menu" :class="isActive ? 'is-active' : ''">
          <div class="navbar-item">
            <a class="navbar-item has-text-white" href="/#/news">
              News
            </a>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link has-text-white" href="/#/categories">
              Categories
            </a>
            <div class="navbar-dropdown is-boxed">
              <a v-for="category in categories" class="navbar-item " :href="'/#/categories/' + category.id">
                {{ $stringHelper.firstCharToUpper(category.name) }}
              </a>
            </div>
          </div>
          <div class="navbar-item">
            <a class="navbar-item has-text-white" href="/#/add">
              New Article
            </a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
    import categoriesService from "./../services/categoriesService";

    export default {
      name: 'sbNavbar',
      data() {
        return {
            categories: [],
            isActive: false
        }
      },
      methods: {
          toggleMenu() {
              this.isActive = !this.isActive;
          }
      },
      created() {
          this.categories = categoriesService.getCategories();
      }
   }
</script>
