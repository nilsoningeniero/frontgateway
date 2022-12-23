<template>
    <div class="container">
        <form class="form-horizontal">
            <div class="form-group col-sm-6 left">
                <label for="placa">Placa</label>
                <input type="text" class="form-control" id="placa" name="placa" required
                    placeholder="Ingrese # placa..." v-model="vehiculos.placa">
            </div>
            <div class="form-group col-sm-6 left">
                <label for="marca">Marca</label><br>
                <select v-model="vehiculos.marca_id" id="marca_id" name="marca_id" required
                    @change="cargarModeloSiMarca(vehiculos.marca_id)">
                    <option v-for="option in optionsMarcas" :key="option.id" v-bind:value="option.id">
                        {{ option.nom_marca }}
                    </option>
                </select>
                <span>Selected: {{ vehiculos.marca_id }}</span>
            </div>
            <div class="form-group col-sm-6 left">
                <label for="modelo">Modelo</label><br>
                <select v-model="vehiculos.modelo_id" id="modelo_id" name="modelo_id" required>
                    <option v-for="option in optionsModelos" :key="option.id" v-bind:value="option.id">
                        {{ option.nom_modelo }}
                    </option>
                </select>
                <span>Selected: {{ vehiculos.modelo_id }}</span>
            </div>
            <div class="form-group col-sm-6 left">
                <label for="ano">Año</label>
                <input type="text" class="form-control" id="ano" name="ano" required
                    placeholder="Ingrese el año..." v-model="vehiculos.ano">
            </div>
            <div class="form-group col-sm-6 left">
                <label for="color">Color</label>
                <input type="text" class="form-control" id="color" name="color" required
                    placeholder="Ingrese el color..." v-model="vehiculos.color">
            </div>
            <div class="form-group col-sm-6 left">
                <label for="propietario">Propietario</label><br>
                <select v-model="vehiculos.propietario_id" id="propietario_id" name="propietario_id" required>
                    <option v-for="option in optionsPropietarios" :key="option.id" v-bind:value="option.id">
                        {{ option.nombres }} {{ option.apellidos }}
                    </option>
                </select>
                <span>Selected: {{ vehiculos.propietario_id }}</span>
            </div>
            <div class="form-group col-sm-6 left">
                <label for="observaciones">Observaciones</label>
                <textarea class="form-control" v-model="vehiculos.observaciones" id="observaciones" 
                    name="observaciones" required rows="3"></textarea>
            </div>
            <div class="form-group col-sm-6 left">
                <label for="fecha_registro">Fecha registro</label>
                <input type="date" class="form-control" id="fecha_registro" name="fecha_registro" 
                    required v-model="vehiculos.fecha_registro">
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
    name: 'NuevoVehiculo',
    data() {
        return {
            vehiculos: {
                id: 0,
                placa: '',
                nom_marca: '',
                nom_modelo: '',
                ano: '',
                color: '',
                propietario: '',
                observaciones: '',
                fecha_registro: ''
            },
            optionsMarcas: [
                {  }
            ],
            optionsModelos: [
                {  }
            ],
            optionsPropietarios: [
                {  }
            ],
            modelos: [{}],
            marca_id: 0
        }
        
    },
    mounted() {
    },
    methods: {
        guardar() {
            axios.post("/api/vehiculos", this.vehiculos)
                .then( resp => {
                    console.log(resp)
                })
                .catch( error => {
                    console.log(error)
                })
            this.$router.replace("/vehiculo");
        },
        salir() {
            this.$router.replace("/vehiculo");
        },
        cargarMarcas() {
            axios.get("/api/marcas")
                .then( data => {
                    this.optionsMarcas = data.data
                    console.log(this.optionsMarcas)
                })
                .catch( error => {
                    console.log(error)
                })
        },
        cargarModeloSiMarca(id) {
            axios.get("/api/modelos")
                .then( data => {
                    this.modelos = data.data
                    this.optionsModelos = this.modelos.filter((modelo) => modelo.marca_id == id);
                    console.log(this.optionsModelos)
                })
                .catch( error => {
                    console.log(error)
                })
        },
        cargarPropietarios() {
            axios.get("/api/propietarios")
                .then( data => {
                    this.optionsPropietarios = data.data
                    console.log(this.optionsPropietarios)
                })
                .catch( error => {
                    console.log(error)
                })
        },
    },
    created () {
        this.cargarMarcas();
        this.cargarPropietarios();
    }
}
</script>

<style scoped>
    .left {
        text-align: left;
    }
</style>