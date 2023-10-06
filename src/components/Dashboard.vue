<!-- Dashboard.vue -->

<template>
    <div>
      <h1>Panel de Control</h1>
      <button @click="logout">Cerrar Sesión</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Elimina la cookie o los datos de Local Storage relacionados con la sesión
        localStorage.removeItem('isLoggedIn');
  
        // Redirige al usuario a la página de inicio de sesión
        this.$router.push('/');
      },
    },
  };
  </script>
  