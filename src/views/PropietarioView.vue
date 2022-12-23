<template>
    <div>
        <br><br>
        <button class="btn btn-success" @click="nuevo">Nuevo propietario</button>
        <br><br>
        <div>
            <table class="table table-hover">
  ...           <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Tipo documento</th>
                    <th scope="col">Documento</th>
                    <th scope="col">Nombres del propietario</th>
                    <th scope="col">Apellidos del propietario</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="propietarios in listapropietarios" :key="propietarios.id"
                         @click="editar(propietarios.id)" data-toggle="tooltip" data-placement="right" title="Click para editar">
                        <th scope="row">{{ propietarios.id }}</th>
                        <td>{{ propietarios.tipo_documento }}</td>
                        <td>{{ propietarios.documento }}</td>
                        <td>{{ propietarios.nombres }}</td>
                        <td>{{ propietarios.apellidos }}</td>
                        <td>{{ propietarios.direccion }}</td>
                        <td>{{ propietarios.telefono }}</td>
                        <td>{{ propietarios.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PropietarioView',
    data() {
        return {
            listapropietarios: [],
        }
        
    },
    mounted() {
        this.listarPropietarios();
    },
    methods: {
        listarPropietarios() {
            axios.get("/api/propietarios")
            .then( data => {
                this.listapropietarios = data.data
            })
            .catch( error => {
                console.log(error)
            })
        },
        nuevo() {
            this.$router.replace({ name: 'nuevoPropietario' });
        },
        editar(id) {
            console.log(id)
            this.$router.replace("/propietario/" + id);
        }
    },
    created () {
        this.listarPropietarios();
    }
}
</script>

<style scoped>

</style>