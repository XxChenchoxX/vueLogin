<template>
    <!-- Buscador y perfil de GitHub aquí -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        userProfile: null,
        errorMessage: '',
      };
    },
    methods: {
      async searchProfile() {
        try {
          // Realiza una solicitud GET a la API de GitHub para obtener el perfil del usuario
          const response = await this.$axios.get(`https://api.github.com/users/${this.username}`);
  
          // Verificar si el usuario existe
          if (response.status === 200) {
            this.userProfile = response.data;
            this.errorMessage = ''; // Borra cualquier mensaje de error previo
          } else {
            // El usuario no existe, muestra un mensaje de error
            this.errorMessage = 'El usuario de GitHub no existe.';
            this.userProfile = null; // Borra el perfil si existe
          }
        } catch (error) {
          // Manejar errores de la solicitud
          console.error('Error al buscar el perfil de GitHub:', error);
          this.errorMessage = 'Hubo un problema al buscar el perfil. Inténtalo más tarde.';
          this.userProfile = null;
        }
      },
    },
  };
  </script>
  