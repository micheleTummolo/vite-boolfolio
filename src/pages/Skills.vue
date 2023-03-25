<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: [
                'HTML',
                'CSS',
                'SASS',
                'VueJs',
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
            <div class="col px-5 h-100 text-center pt-5">
                <h2 class="text-white">Skills list</h2>
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