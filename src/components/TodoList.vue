<template>
    <!-- Lista de tareas aquí -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [], // Aquí almacenarás las tareas
        newTask: '',
      };
    },
    methods: {
      addTask() {
        // Lógica para agregar una nueva tarea
        if (this.newTask.trim() === '') return; // Evita agregar tareas vacías
        this.tasks.push({ id: Date.now(), title: this.newTask, done: false });
        this.newTask = ''; // Limpia el campo de entrada
      },
      deleteTask(taskId) {
        // Lógica para eliminar una tarea por su ID
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
      toggleTaskStatus(taskId) {
        // Lógica para cambiar el estado de una tarea (completada/pendiente)
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
          task.done = !task.done;
        }
      },
    },
  };
  </script>
  