<script>
export default {
    name: 'Homepage'
}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row h-100">
            <div class="col px-5 h-100 d-flex flex-column justify-content-center">
                <div>
                    <h1 class="main_title">Hi, I'm Michele.</h1>
                    <h2 class="subtitle">I'm a Full Stack Web Developer.</h2>
                </div>
                <div class="mt-3">
                    <a href="https://www.linkedin.com/in/michele-tummolo-76498926a/" class="main_button me-4">LinkedIn</a>
                    <a href="https://github.com/micheleTummolo" class="main_button">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.container-fluid {
    width: 100vw;
    height: 93vh;
    background-image: url('../assets/images/background_home.jpg');
    background-position: center;
    background-size: cover;

    .row {
        background-color: rgba(0, 0, 0, 0.324);
    }

    .main_title {
        color: white;
        font-size: 5rem;
    }

    .subtitle {
        color: gray;
        font-size: 3rem;
    }
}
</style>