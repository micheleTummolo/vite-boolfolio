<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'Homepage',
                    routeName: 'homepage'
                },
                {
                    label: 'Blog',
                    routeName: 'projectlist'
                },
            ]
        }
    }
}
</script>
<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg px-5">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" class="nav-link active text-white">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
header {
    background-color: #080809;
    height: 7vh;
    /* border: 1px solid white; */
}
</style>