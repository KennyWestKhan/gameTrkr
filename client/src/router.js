import Vue from 'vue';
import Router from 'vue-router'
import Search from './components/search.vue'
import Profile from './components/profile.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'search',
        component: Search
    },
    {
        path: '/profile/:platform/:gamertag/:game',
        name: 'profile',
        component: Profile
    },
    {
        path: '*',
        component: () =>
          import(/* webpackChunkName: "bundle.404page" */ './components/page-not-found.vue'),
      },
    ]
})
