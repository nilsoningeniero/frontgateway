import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'
import Marca from '../views/MarcaView.vue'
import NuevaMarca from '../views/NuevaMarca.vue'
import EditarMarca from '../views/EditarMarca.vue'
import Modelo from '../views/ModeloView.vue'
import NuevoModelo from '../views/NuevoModelo.vue'
import EditarModelo from '../views/EditarModelo.vue'
import Usuario from '../views/UserView.vue'
import NuevoUsuario from '../views/NuevoUser.vue'
import EditarUsuario from '../views/EditarUser.vue'
import Propietario from '../views/PropietarioView.vue'
import NuevoPropietario from '../views/NuevoPropietario.vue'
import EditarPropietario from '../views/EditarPropietario.vue'
import Vehiculo from '../views/VehiculoView.vue'
import NuevoVehiculo from '../views/NuevoVehiculo.vue'
import EditarVehiculo from '../views/EditarVehiculo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/', //Home
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/marca',
    name: 'marca',
    component: Marca
  },
  {
    path: '/marca',
    name: 'nuevaMarca',
    component: NuevaMarca
  },
  {
    path: '/marca/:id',
    name: 'editarMarca',
    component: EditarMarca
  },
  {
    path: '/modelo',
    name: 'modelo',
    component: Modelo
  },
  {
    path: '/modelo',
    name: 'nuevoModelo',
    component: NuevoModelo
  },
  {
    path: '/modelo/:id',
    name: 'editarModelo',
    component: EditarModelo
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario
  },
  {
    path: '/usuario',
    name: 'nuevoUsuario',
    component: NuevoUsuario
  },
  {
    path: '/usuario/:id',
    name: 'editarUsuario',
    component: EditarUsuario
  },
  {
    path: '/propietario',
    name: 'propietario',
    component: Propietario
  },
  {
    path: '/propietario/:id',
    name: 'editarPropietario',
    component: EditarPropietario
  },
  {
    path: '/propietario',
    name: 'nuevoPropietario',
    component: NuevoPropietario
  },
  {
    path: '/vehiculo',
    name: 'vehiculo',
    component: Vehiculo
  },
  {
    path: '/vehiculo',
    name: 'nuevoVehiculo',
    component: NuevoVehiculo
  },
  {
    path: '/vehiculo/:id',
    name: 'editarVehiculo',
    component: EditarVehiculo
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
