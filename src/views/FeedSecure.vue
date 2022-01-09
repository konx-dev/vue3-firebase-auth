<template>
    <div class="max-w-xl mx-auto">
        <div>
            <h1 class="text-xl uppercase font-bold">Feed (secure)</h1>
            <p class="my-2">Example page accessible by only users logged in.</p>
        </div>
        <div>
            <li v-for="(item,index) in feedSecure" :key="index">{{ item.name }}</li>
        </div>
    </div>
</template>

<script setup>

const feedSecure = [
    { name: 'asparagus' },
    { name: 'beetroot' },
    { name: 'carrot' },
    { name: 'dill' },
    { name: 'endive' },
    { name: 'fennel' },
    { name: 'garlic' }
]

</script>