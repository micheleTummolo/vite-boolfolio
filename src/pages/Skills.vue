<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: [
                'HTML',
                'CSS',
                'SASS',
                'Bootstrap',
                'VueJs',
                'JavaScript',
                'JQuery',
                'Vite',
                'PHP',
                'MySQL',
                'Laravel',
            ]
        }
    }

}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row h-100">
            <div class="col-6 px-5 text-center pt-5">
                <ul v-for="skill in skills" :key="skill.id">
                    <li>{{skill}}</li>
                </ul>
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