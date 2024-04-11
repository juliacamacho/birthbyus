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

    function convertDate(date) {
        let postDate = new Date(date);
        return postDate.toLocaleString('en-us', {weekday:'long', year: "numeric", month: "long", day: "numeric",})
    }

    let photoPath = `/src/data/photos/${username}_propic.jpg`
    

</script>

<template>
    <div class="bg-white px-7 py-6 mb-5 rounded hover:cursor-pointer">
        <div class="mb-3 flex space-x-4">
            <img :src="photoPath" class="h-14 w-10 rounded-full" />
            <div>
                <h1 class="text-xl font-bold text-headerColor">@{{username}}</h1>
                <h2 class="text-base italic text-subheaderColor text-sm">{{convertDate(props.postData.date)}}</h2>
            </div>
        </div>
        <h1 class="text-base">{{props.postData.content}}</h1>
    </div>
</template>