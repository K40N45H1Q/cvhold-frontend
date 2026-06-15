<template>
  <div v-if="state.isLoading" class="spinner-overlay">
    <div class="spinner"></div>
  </div>
</template>

<script setup>
import { state } from '../globalState.js';
</script>

<style scoped>
.spinner-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 9999;
}

.spinner {
  width: 100px;
  height: 100px;
  border: 6px solid #e5e5e5;
  border-top: 6px solid #19785A;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>