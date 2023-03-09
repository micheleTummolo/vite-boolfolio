<script>
import axios from 'axios';

export default {
    name: "ProjectMain",
    data() {
        return {
            projects: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.projects;
                this.loading = false;
                console.log(this.projects);
            })
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container">
        <div v-if="loading" class="row d-flex justify-content-center align-items-center mt-5">
            <div class="col-12 d-flex justify-content-center align-items-center flex-column">
                <div class="loader"></div>
                <h3 class="mt-3 fw-bold">Loading...</h3>
            </div>
        </div>
        <div v-else class="row">
            <div class="col-12 col-md-3 p-0" v-for="project in projects" :key="project.id">
                <div class="card m-2">
                    <div class="card_img_container">
                        <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/190'"
                            class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card_body_content">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                        </div>
                        <a href="#" class="btn btn-primary mt-2">Continua a leggere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_img_container {
    height: 200px;
}

.card_body_content {
    height: 200px;
    overflow: hidden;
}

.loader {
    border: 8px solid #f3f3f3;
    /* Light grey */
    border-top: 8px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
