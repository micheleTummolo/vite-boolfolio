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
            if (response.data.success) {
                this.project = response.data.project;
                this.store.loading = false;
            }
            else {
                this.$router.push({ name: 'not-found' })
            }
        })
    }
}
</script>
<template>
    <div class="container-fluid">
        <div v-if="store.loading" class="row d-flex justify-content-center align-items-center vh-100">
            <div class="col-12 d-flex justify-content-center align-items-center flex-column">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

                <h3 class="mt-3 fw-bold">Loading...</h3>
            </div>
        </div>
        <div v-else class="row p-5 pb-0">
            <div class="col p-0">
                <h2>Project name: {{ project.name }}</h2>
            </div>
            <div class="col p-0 text-end">
                <router-link :to="{ name: 'projectlist' }" class="main_button_sm">
                    Lista progetti
                </router-link>
            </div>
        </div>

        <div class="row p-5 pt-3">
            <div class="col-6 mt-4 col_img_button p-0">

                <!-- Button trigger modal -->
                <button type="button" class="my_button_modal p-0 m-0 w-100" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    <div class="button_img">
                        <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/190'"
                            alt="">
                    </div>
                    <div class="card_hover p-2 justify-content-center align-items-center">
                        <h3 class="text-white fw-bold">Open full image</h3>
                    </div>
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/190'"
                                alt="" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 mt-4 ps-5">
                <div class="d-flex">
                    <h3 class="m-0 me-1">Type: </h3>
                    <h3 class="m-0"> {{ project.type.type }}</h3>
                </div>
                <div class="mt-3">
                    <h3>Description:</h3>
                    <p class="description">{{ project.description }}. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laudantium,
                        ducimus temporibus delectus molestiae porro expedita eius consequatur consequuntur earum nihil nam
                        veritatis laborum quidem error architecto optio consectetur accusantium recusandae? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Eum voluptas quibusdam quam officiis! Non nostrum
                        rerum, ad doloremque fugiat autem dignissimos possimus rem, atque vero minus est. Ab, ex porro!</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.container-fluid {
    background-color: #080809;
    overflow: auto;
    height: 93vh;
    color: white;

    .col_img_button {
        max-height: 500px;

        .my_button_modal {
            height: 100%;
            border: 0;
            position: relative;

            .button_img {
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
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

    .description {
        text-align: justify;
    }
}
</style>