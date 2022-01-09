<template>
    <div v-if="!loginSuccess" class="max-w-md mx-auto">
        <h1 class="text-2xl">Log in to an Account</h1>
        <div class="flex flex-col">
            <input class="border w-full border-b my-2 p-2" type="text" placeholder="Email" v-model="email" />
            <input class="border border-b my-2 p-2" type="password" placeholder="Password" v-model="password" />
            <p class="text-sm mt-2 px-1">Not registered? <router-link class="underline" to="/register">Sign up</router-link></p>
        </div>
        <div v-if="errMsg">
            {{ errMsg }}
        </div>
        <div class="mt-6 flex flex-row">
            <button class="bg-black text-white text-sm py-2 px-6" @click="register">Submit</button>
            <button class="bg-black text-white text-sm py-2 px-6 ml-4" @click="signInWithGoogle">Sign in with Google</button>
        </div>
    </div>
    <div v-else>
        success.
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();
const loginSuccess = false;

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push('/');
        })
        .catch((error) => {
            // handle error
        })
};

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully logged in")
            router.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = 'Invalid email';
                    break;
                case "auth/user-not-found":
                    errMsg.value = 'No account with that email found.';
                    break;
                case "auth/wrong-password":
                    errMsg.value = 'Incorrect password';
                    break;
                default:
                    errMsg.value = 'Email or password incorrect';
                    break;
            }
        })
}
</script>