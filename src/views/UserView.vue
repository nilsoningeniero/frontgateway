<template>
    <div>
        <br><br>
        <button class="btn btn-success" @click="nuevo">Nuevo usuario</button>
        <br><br>
        <div>
            <table class="table table-hover">
  ...           <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre del usuario</th>
                    <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuarios in listausuarios" :key="usuarios.id" 
                        @click="editar(usuarios.id)" data-toggle="tooltip" data-placement="right" title="Click para editar">
                        <th scope="row">{{ usuarios.id }}</th>
                        <td>{{ usuarios.name }}</td>
                        <td>{{ usuarios.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserView',
    data() {
        return {
            listausuarios: [],
        }
        
    },
    mounted() {
        this.listarUsuarios();
    },
    methods: {
        listarUsuarios() {
            axios.get("/api/users")
            .then( data => {
                this.listausuarios = data.data
            })
            .catch( error => {
                console.log(error)
            })
        },
        nuevo() {
            this.$router.replace({ name: 'nuevoUsuario' });
        },
        editar(id) {
            console.log(id)
            this.$router.replace("/usuario/" + id);
        }
    },
    created () {
        this.listarUsuarios();
    }
}
</script>

<style scoped>

</style>