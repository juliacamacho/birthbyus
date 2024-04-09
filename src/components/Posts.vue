<script setup>
  import Post from "./Post.vue"
  import posts from "../data/posts.json";
  
</script>

<template>
  <div v-for="post in posts">
    <Post class="text-xl" :postData="post" />
  </div>
</template>
