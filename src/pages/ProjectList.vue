<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "ProjectList",
    data() {
        return {
            projects: [],
            store,
        }
    },
    methods: {
        getProjects() {
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.projects;
                this.store.loading = false;
            })
        }
    },
    beforeMount() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container-fluid firefox_scroll">
        <div v-if="store.loading" class="row d-flex justify-content-center align-items-center vh-100">
            <div class="col-12 d-flex justify-content-center align-items-center flex-column">
                <i class="fa-solid fa-spinner fa-spin-pulse fa-xl text-white"></i>
                <font-awesome-icons icon="HatWizard" />
                <h3 class="mt-4 fw-bold text-white">Loading</h3>
            </div>
        </div>
        <div v-else class="row pt-3 p-5">
            <div class="col-12 col-sm-4 col-md-4 col-xxl-2 p-2" v-for="project in projects" :key="project.id">
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">
                    <div class="my_card m-auto animate__animated animate__flipInX">
                        <div class="card_img_container">
                            <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/190'"
                                alt="`${store.baseUrl}/storage/${project.cover_image}`">
                        </div>
                        <div class="card_hover p-2 justify-content-center align-items-center">
                            <h3 class="text-white fw-bold">{{ project.name }}</h3>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    background-color: #080809;
    overflow: auto;
    height: 93vh;

    .my_card {
        max-width: 400px;
        max-height: 200px;
        position: relative;


        .card_img_container {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                object-position: top;
            }

        }

        &:hover .card_hover {
            display: flex;
            border: 2px solid gray;
        }

        .card_hover {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.498);
            display: none;
        }
    }
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
