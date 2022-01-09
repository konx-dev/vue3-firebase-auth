<template>
    <div class="container mx-auto flex justify-end">
        <template v-if="!isLoggedIn">
            <router-link class="mx-4 underline" to="/register">Register</router-link>|
            <router-link class="mx-4 underline" to="/login">Login</router-link>
        </template>
        <button class="mx-4 underline" @click="handleSignOut" v-else>Sign out</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
let auth;
const router = useRouter();

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
});

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/login');
        alert("Signed out successfully");
    });
}

</script>