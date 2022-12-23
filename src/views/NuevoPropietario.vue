<template>
    <div class="container">
        <form class="form-horizontal">
            <div class="form-group col-sm-6 left">
                <label for="marca">Tipo de documento</label><br>
                <select v-model="propietarios.tipo_documento" required>
                    <option v-for="option in options" :key="option.value" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <span>Selected: {{ propietarios.tipo_documento }}</span>
            </div>
            <div class="form-group col-sm-6 left">
                <label for="documento">Documento</label>
                <input type="text" class="form-control" id="documento" name="documento" required
                    placeholder="Ingrese # documento..." v-model="propietarios.documento">
            </div>
            <div class="form-group col-sm-6 left">
                <label for="nombres">Nombres</label>
                <input type="text" class="form-control" id="nombres" name="nombres" required
                    placeholder="Ingrese los nombres..." v-model="propietarios.nombres">
            </div>
            <div class="form-group col-sm-6 left">
                <label for="apellidos">Apellidos</label>
                <input type="text" class="form-control" id="apellidos" name="apellidos" required
                    placeholder="Ingrese los apellidos..." v-model="propietarios.apellidos">
            </div>
            <div class="form-group col-sm-6 left">
                <label for="direccion">Dirección</label>
                <input type="text" class="form-control" id="direccion" name="direccion" required
                    placeholder="Ingrese la dirección..." v-model="propietarios.direccion">
            </div>
            <div class="form-group col-sm-6 left">
                <label for="telefono">Teléfono</label>
                <input type="text" class="form-control" id="telefono" name="telefono" required
                    placeholder="Ingrese # teléfono..." v-model="propietarios.telefono">
            </div>
            <div class="form-group col-sm-6 left">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" id="email" name="email" required
                    placeholder="Ingrese el e-mail..." v-model="propietarios.email">
            </div>
            <br><br>
            <button class="btn btn-primary" @click="guardar()">Guardar</button>
            <button class="btn btn-danger" @click="salir()">Cancelar</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'NuevoPropietario',
    data() {
        return {
            propietarios: {
                id: 0,
                tipo_documento: '',
                documento: '',
                nombres: '',
                apellidos: '',
                direccion: '',
                telefono: '',
                email: '',
            },
            options: [
                { text: 'Cédula de ciudadania', value: 'CC' },
                { text: 'Cédula de extranjeria', value: 'CE' },
                { text: 'Pasaporte', value: 'PP' }
            ]
        }
        
    },
    methods: {
        guardar() {
            axios.post("/api/propietarios", this.propietarios)
                .then( resp => {
                    console.log(resp)
                })
                .catch( error => {
                    console.log(error)
                })
            this.$router.replace("/propietario");
        },
        salir() {
            this.$router.replace("/propietario");
        }
    }
}
</script>

<style scoped>
    .left {
        text-align: left;
    }
</style>