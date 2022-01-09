<template>
    <div class="max-w-md mx-auto">
        <h1 class="text-2xl">Create an Account</h1>
        <div class="flex flex-col">
            <input class="border w-full border-b my-2 p-2" type="text" placeholder="Email" v-model="email" />
            <input class="border border-b my-2 p-2" type="password" placeholder="Password" v-model="password" />
            <p class="text-sm mt-2 px-1">Already registered? <router-link class="underline" to="/login">Log in</router-link></p>
        </div>
        <div class="mt-6">
            <button class="bg-black text-white text-sm py-2 px-6" @click="register">Submit</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            router.push('/')
            alert("Successfully registered");
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
} 

</script>