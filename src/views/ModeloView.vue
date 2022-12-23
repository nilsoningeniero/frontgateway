<template>
    <div>
        <br><br>
        <button class="btn btn-success" @click="nuevo">Nuevo modelo</button>
        <br><br>
        <div>
            <table class="table table-hover">
  ...           <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre de la marca</th>
                    <th scope="col">Nombre del modelo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="modelos in listamodelos" :key="modelos.id" 
                        @click="editar(modelos.id)" data-toggle="tooltip" data-placement="right" title="Click para editar">
                        <th scope="row">{{ modelos.id }}</th>
                        <td>{{ modelos.nom_marca}}</td>
                        <td>{{ modelos.nom_modelo}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ModeloView',
    data() {
        return {
            listamodelos: [],
        }
        
    },
    mounted() {
        this.listarModelos();
    },
    methods: {
        listarModelos() {
            axios.get("/api/modelos")
            .then( data => {
                this.listamodelos = data.data
            })
            .catch( error => {
                console.log(error)
            })
        },
        nuevo() {
            this.$router.replace({ name: 'nuevoModelo' });
        },
        editar(id) {
            console.log(id)
            this.$router.replace("/modelo/" + id);
        }
    },
    created () {
        this.listarModelos();
    }
}
</script>

<style scoped>

</style>