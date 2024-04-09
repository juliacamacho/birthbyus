<script setup>
    const props = defineProps(["postData"]);
    import users from "../data/users.json";

    function getUser(userId) {
        let results = users.filter(e => e.id == userId);
        if (results.length == 1) {
            return results[0];
        }
        else {
            throw new Error("User not found.");
        }
    }

    let user = getUser(props.postData.id);
    let username = user["username"];
</script>

<template>
    <div class="bg-white px-7 py-6 mb-5 rounded">
        <h1 class="text-xl">{{username}}</h1>
        <h2 class="text-lg">{{props.postData.date}}</h2>
        <h1 class="text-lg">{{props.postData.content}}</h1>
    </div>
</template>