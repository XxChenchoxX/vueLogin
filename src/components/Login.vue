<template>
    <!-- Tu formulario de inicio de sesión aquí -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async login() {
        try {
          // Realiza una solicitud GET a la API para autenticar al usuario
          const response = await this.$axios.get('https://mocki.io/v1/3e408794-39ed-4c75-bb6e-c49c578de293');
  
          // Verificar si la respuesta indica un inicio de sesión exitoso
          if (response.data.User === this.user && response.data.pass === md5(this.password)) {
            // Inicio de sesión exitoso, redirigir al panel de control
            localStorage.setItem('isLoggedIn', 'true');
            this.$router.push('/dashboard');
          } else {
            // Credenciales incorrectas, mostrar un mensaje de error
            this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
          }
        } catch (error) {
          // Manejar errores de la solicitud
          console.error('Error de inicio de sesión:', error);
          this.errorMessage = 'Hubo un problema al iniciar sesión. Inténtalo más tarde.';
        }
      },
    },
  };
  </script>
  