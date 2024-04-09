<script setup>
  import Post from "./Post.vue"
  import posts from "../data/posts.json";

  let sortedPosts = posts.sort(function(a, b) { 
    return new Date(b.date) - new Date(a.date);
  });
  
</script>

<template>
  <div v-for="post in sortedPosts">
    <Post class="text-xl" :postData="post" />
  </div>
</template>
