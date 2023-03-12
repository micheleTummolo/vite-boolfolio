<script>
export default {
    name: 'NotFound'
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Pagina non torvata</h2>
                <router-link :to="{ name: 'projectlist' }" class="btn btn-primary mt-2">
                        Lista progetti
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>