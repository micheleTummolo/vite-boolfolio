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
                    label: 'Projects',
                    routeName: 'projectlist'
                },
                {
                    label: 'Skills',
                    routeName: 'skills'
                },
            ]
        }
    }
}
</script>
<template lang="">
    <header>
        <nav class="d-flex align-items-center w-100 h-100 px-5 pt-2">
            <ul class="d-flex m-0 p-0">
                <li class="me-4" v-for="(item, index) in menuItems" :key="index">
                    <router-link :to="{ name: item.routeName }" class="text-decoration-none">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style lang="scss" scoped>
header {
    background-color: #080809;
    height: 7vh;

    ul {
        list-style: none;

        li {
            font-size: 1rem;

            a {
                color: white;

                &:hover {
                    color: gray;
                }
            }

        }
    }
}
</style>