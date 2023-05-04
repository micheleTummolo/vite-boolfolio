<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: [
                'html',
                'css',
                'sass',
                'bootstrap',
                'vuejs',
                'javascript',
                'jquery',
                'php',
                'mysql',
                'laravel',
            ]
        }
    }

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row row-cols-2 row-cols-sm-3 pt-4 row-cols-sm-2 row-cols-xl-5 h-100 overflow-auto">
            <div class="col p-0 mb-4 mb-md-0 d-flex justify-content-center align-items-center" v-for="skill in skills" :key="skill.id">
                <img class="w-75 animate__animated animate__flipInY" :src="`./src/assets/images/${skill}.svg`" :alt="`${skill}.svg`">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.container-fluid {
    width: 100vw;
    height: 93vh;
    background-color: #080809;
}
</style>