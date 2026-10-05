<template>
  <header class="sticky-top navbar-glass">
    <nav class="navbar navbar-expand-md navbar-light py-3">
      <div class="container">
        <!-- Brand Logo -->
        <a class="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#home">
          <div class="bg-primary text-warning rounded-3 p-2 d-flex align-items-center justify-content-center shadow-sm" style="width: 40px; height: 40px;">
            <i class="fa-solid fa-trophy fs-5"></i>
          </div>
          <span class="fw-bold fs-4 text-dark ms-2">
            Lomba<span class="text-primary">Zone</span>
          </span>
        </a>

        <!-- Mobile Toggler -->
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto fw-semibold">
            <li class="nav-item">
              <a class="nav-link fw-semibold px-3 text-dark" href="#home">
                Beranda
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold px-3 text-dark" href="#katalog">
                Katalog Event
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold px-3 text-dark" href="#fitur">
                Keunggulan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Tidak ada JavaScript
</script>

<style scoped>
.navbar-glass {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e2e8f0;
}
</style>