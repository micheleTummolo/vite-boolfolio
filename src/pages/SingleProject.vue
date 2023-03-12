<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null,
        }
    },
    beforeMount() {
        this.store.loading = true;
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
            this.project = response.data.project;
            this.store.loading = false;
        })
    }
}
</script>
<template>
    <div class="container">
        <div v-if="store.loading" class="row d-flex justify-content-center align-items-center vh-100">
            <div class="col-12 d-flex justify-content-center align-items-center flex-column">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

                <h3 class="mt-3 fw-bold">Loading...</h3>
            </div>
        </div>
        <div v-else class="row">
            <div class="col-12">
                <div class="float-end">
                    <router-link :to="{ name: 'projectlist' }" class="btn btn-primary mt-2">
                        Lista progetti
                    </router-link>
                </div>
                <h2>{{ project.name }}</h2>
            </div>
            <div>
                <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/190'"
                    alt="" class="w-50">
            </div>
            <div class="col-6 mt-4">
                <p>{{ project.type.type }}</p>
            </div>
            <div class="col-7 mt-2">
                <p>{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>