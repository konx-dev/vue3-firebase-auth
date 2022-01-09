import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../views/Home.vue') },
        { path: '/feed', component: () => import('../views/Feed.vue') },
        { 
            path: '/feed-secure', 
            component: () => import('../views/FeedSecure.vue'),
            meta: {
                requiresAuth: true,
            } 
        },
        { path: '/register', component: () => import('../views/Register.vue') },
        { path: '/register-success', component: () => import('../views/RegisterSuccess.vue') },
        { path: '/login-success', component: () => import('../views/LoginSuccess.vue') },
        { path: '/login', component: () => import('../views/Login.vue') }
    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user)
            },
            reject
        )
    });
}

router.beforeEach( async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            alert('Access denied. please login');
            next('/login');
        }
    } else {
        next();
    }
})

export default router;