<template>
  <div>
    <!-- Navbar-->
    <header class="app-header">
      <router-link class="app-header__logo" :to="{name:'admin.dashboard' }">{{ app_name }}</router-link>
      <!-- Sidebar toggle button-->
      <a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <!-- Navbar Right Menu-->
      <ul class="app-nav">
        <li class="app-search">
          <input class="app-search__input" type="search" placeholder="Search" />
          <button class="app-search__button">
            <i class="fa fa-search"></i>
          </button>
        </li>
        <!--Notification Menu-->
        <li class="dropdown">
          <a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications">
            <i class="fa fa-bell-o fa-lg"></i>
          </a>
          <ul class="app-notification dropdown-menu dropdown-menu-right">
            <li class="app-notification__title">You have 4 new notifications.</li>
            <div class="app-notification__content">
              <li>
                <a class="app-notification__item" href="javascript:;">
                  <span class="app-notification__icon">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x text-primary"></i>
                      <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                    </span>
                  </span>
                  <div>
                    <p class="app-notification__message">Lisa sent you a mail</p>
                    <p class="app-notification__meta">2 min ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="app-notification__item" href="javascript:;">
                  <span class="app-notification__icon">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x text-danger"></i>
                      <i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </span>
                  <div>
                    <p class="app-notification__message">Mail server not working</p>
                    <p class="app-notification__meta">5 min ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="app-notification__item" href="javascript:;">
                  <span class="app-notification__icon">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x text-success"></i>
                      <i class="fa fa-money fa-stack-1x fa-inverse"></i>
                    </span>
                  </span>
                  <div>
                    <p class="app-notification__message">Transaction complete</p>
                    <p class="app-notification__meta">2 days ago</p>
                  </div>
                </a>
              </li>
              <div class="app-notification__content">
                <li>
                  <a class="app-notification__item" href="javascript:;">
                    <span class="app-notification__icon">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                        <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>
                    </span>
                    <div>
                      <p class="app-notification__message">Lisa sent you a mail</p>
                      <p class="app-notification__meta">2 min ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="app-notification__item" href="javascript:;">
                    <span class="app-notification__icon">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x text-danger"></i>
                        <i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i>
                      </span>
                    </span>
                    <div>
                      <p class="app-notification__message">Mail server not working</p>
                      <p class="app-notification__meta">5 min ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="app-notification__item" href="javascript:;">
                    <span class="app-notification__icon">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x text-success"></i>
                        <i class="fa fa-money fa-stack-1x fa-inverse"></i>
                      </span>
                    </span>
                    <div>
                      <p class="app-notification__message">Transaction complete</p>
                      <p class="app-notification__meta">2 days ago</p>
                    </div>
                  </a>
                </li>
              </div>
            </div>
            <li class="app-notification__footer">
              <a href="#">See all notifications.</a>
            </li>
          </ul>
        </li>
        <!-- User Menu-->
        <li class="dropdown">
          <a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu">
            <i class="fa fa-user fa-lg"></i>
          </a>
          <ul class="dropdown-menu settings-menu dropdown-menu-right">
            <li>
              <a class="dropdown-item" href="page-user.html">
                <i class="fa fa-cog fa-lg"></i> Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="page-user.html">
                <i class="fa fa-user fa-lg"></i> Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="logout">
                <i class="fa fa-sign-out fa-lg"></i> Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user">
        <img
          class="app-sidebar__user-avatar"
          src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"
          alt="User Image"
        />
        <div>
          <p class="app-sidebar__user-name">John Doe</p>
          <p class="app-sidebar__user-designation">Frontend Developer</p>
        </div>
      </div>
      <ul class="app-menu">
        <li>
          <router-link class="app-menu__item active" :to="{ name: 'admin.dashboard' }">
            <i class="app-menu__icon fa fa-dashboard"></i>
            <span class="app-menu__label">Dashboard</span>
          </router-link>
        </li>
        <li class="treeview">
          <a class="app-menu__item" href="#" data-toggle="treeview">
            <i class="app-menu__icon fa fa-product-hunt"></i>
            <span class="app-menu__label">Products</span>
            <i class="treeview-indicator fa fa-angle-right"></i>
          </a>
          <ul class="treeview-menu">
            <li>
              <a class="treeview-item" href="bootstrap-components.html">
                <i class="icon fa fa-circle-o"></i> Bootstrap Elements
              </a>
            </li>
            <li>
              <a
                class="treeview-item"
                href="https://fontawesome.com/v4.7.0/icons/"
                target="_blank"
                rel="noopener"
              >
                <i class="icon fa fa-circle-o"></i> Font Icons
              </a>
            </li>
            <li>
              <a class="treeview-item" href="ui-cards.html">
                <i class="icon fa fa-circle-o"></i> Cards
              </a>
            </li>
            <li>
              <a class="treeview-item" href="widgets.html">
                <i class="icon fa fa-circle-o"></i> Widgets
              </a>
            </li>
          </ul>
        </li>
        <li>
          <router-link class="app-menu__item" :to="{name:'admin.news.list'}">
            <i class="app-menu__icon fa fa-newspaper-o"></i>
            <span class="app-menu__label">News</span>
          </router-link>
        </li>
      </ul>
    </aside>
    <main class="app-content">
      <vue-snotify></vue-snotify>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  mounted() {
    // (function() {
    //   "use strict";

    var treeviewMenu = $(".app-menu");

    // Toggle Sidebar
    $('[data-toggle="sidebar"]').click(function(event) {
      event.preventDefault();
      $(".app").toggleClass("sidenav-toggled");
    });

    // Activate sidebar treeview toggle
    $("[data-toggle='treeview']").click(function(event) {
      event.preventDefault();
      if (
        !$(this)
          .parent()
          .hasClass("is-expanded")
      ) {
        treeviewMenu
          .find("[data-toggle='treeview']")
          .parent()
          .removeClass("is-expanded");
      }
      $(this)
        .parent()
        .toggleClass("is-expanded");
    });

    // Set initial active toggle
    $("[data-toggle='treeview.'].is-expanded")
      .parent()
      .toggleClass("is-expanded");

    //Activate bootstrip tooltips
    $("[data-toggle='tooltip']").tooltip();
    // })();
  },
  computed: {
    ...mapState({
      app_name: state => state.app_name
    })
  },
  methods: {
    ...mapActions("adminlogin", ["adminLogout"]),
    logout() {
      this.adminLogout().then(response => {
        this.$router.push({ name: "admin.login" });
      });
    }
  }
};
</script>
