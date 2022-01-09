<script>
import NavMain from './components/nav.vue'
import UserActions from './components/userActions.vue'

export default {
    setup() {
    },
    components: {
        NavMain,
        UserActions
    }   
};

</script>

<template>
  <div class="p-10">
    <user-actions />
    <nav-main />
    <router-view />
  </div>
</template>

