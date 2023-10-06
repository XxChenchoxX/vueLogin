<!-- src/components/Navbar.vue -->
<template>
    <nav>
      <ul>
        <li><router-link to="/">Inicio de Sesión</router-link></li>
        <li><router-link to="/dashboard">Lista de Tareas</router-link></li>
        <li><router-link to="/timer">Temporizador</router-link></li>
        <li><router-link to="/git-profile">Perfil de GitHub</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    // Lógica de la barra de navegación
  };
  </script>
  