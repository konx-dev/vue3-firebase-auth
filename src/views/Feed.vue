<template>
    <div class="max-w-xl mx-auto">
        <div>
            <h1 class="text-xl uppercase font-bold">Feed</h1>
            <p class="my-2">Example page accessible to any users logged in or not.</p>
        </div>
        <div>
            <li v-for="(item,index) in feedNormal" :key="index">{{ item.name }}</li>
        </div>
    </div>
</template>

<script setup>

const feedNormal = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'cherry' },
    { name: 'date' },
    { name: 'elderberries' },
    { name: 'figs' },
    { name: 'grapes' }
]

</script>