<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<style ng-app-id="ng">
@charset "UTF-8";

.contactanos-flotante[_ngcontent-ng-c2531277376] {
  position: fixed;
  top: 90%;
  right: 4%;
  animation: bounce 3s 3s 5;
  transition: all 0.5s;
  z-index: 1;
}

.contactanos-flotante[_ngcontent-ng-c2531277376]:hover {
  transform: scale(1.4);
}

.avisos-importantes[_ngcontent-ng-c2531277376] {
  background-color: var(--color-primario);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 5px 30px;
}

.avisos-importantes[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376] {
  background-color: #fff;
  border-radius: 30px;
  padding: 3px 7px;
  transition: all 0.5s;
  cursor: pointer;
}

.avisos-importantes[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376] svg[_ngcontent-ng-c2531277376] {
  width: 17px;
  height: auto;
  fill: var(--color-primario);
  position: relative;
  bottom: 2px;
}

.avisos-importantes[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376]:hover {
  background-color: var(--color-naranja);
  fill: #fff;
}

.avisos-importantes[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376]:hover svg[_ngcontent-ng-c2531277376] {
  fill: #fff;
}

.menu-superior[_ngcontent-ng-c2531277376] {
  background-color: var(--color-azul-oscuro);
  padding: 10px;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.menu-superior[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376] {
  cursor: pointer;
  color: #fff;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] {
  font-weight: 500;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  animation: flipInX;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] .ruta-activa[_ngcontent-ng-c2531277376] {
  color: var(--color-naranja);
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] .ruta-activa[_ngcontent-ng-c2531277376] .svg-image[_ngcontent-ng-c2531277376] {
  fill: var(--color-naranja);
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376]:hover {
  color: var(--color-naranja);
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376]:hover .svg-image[_ngcontent-ng-c2531277376] {
  fill: var(--color-naranja);
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376] .ruta-activa[_ngcontent-ng-c2531277376] {
  fill: var(--color-naranja);
  color: var(--color-naranja);
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376] .svg-image[_ngcontent-ng-c2531277376] {
  margin: 0 auto;
  fill: var(--color-blanco);
}

@media (min-width: 768px) and (max-width: 991px) {
  .menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376] .svg-image[_ngcontent-ng-c2531277376] {
    margin-bottom: 5px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376] {
    font-size: 13px;
  }
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376]:nth-child(1) {
  animation-duration: 0.5s;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376]:nth-child(2) {
  animation-duration: 1s;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376]:nth-child(3) {
  animation-duration: 1.5s;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .svg-img-text[_ngcontent-ng-c2531277376]:nth-child(4) {
  animation-duration: 2s;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .btn-saldo[_ngcontent-ng-c2531277376] {
  animation: flipInX;
  animation-duration: 2.5s;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .btn-saldo[_ngcontent-ng-c2531277376] .saldos[_ngcontent-ng-c2531277376] {
  background-color: var(--color-primario);
  border: none;
  font-size: 13px;
  font-weight: 500;
}

.menu-superior[_ngcontent-ng-c2531277376] ul[_ngcontent-ng-c2531277376] .btn-saldo[_ngcontent-ng-c2531277376] .saldos[_ngcontent-ng-c2531277376]:hover {
  background-color: var(--color-naranja);
}

.menu-superior[_ngcontent-ng-c2531277376] .menu-icon[_ngcontent-ng-c2531277376] {
  cursor: pointer;
  animation: fadeIn;
  animation-duration: 1s;
}

.menu-superior[_ngcontent-ng-c2531277376] .menu-desplegable[_ngcontent-ng-c2531277376] {
  background-color: var(--color-azul-oscuro);
  position: absolute;
  width: 100%;
  top: 68px;
  right: 0;
  text-align: end;
  z-index: 2;
  padding: 15px;
}

.menu-superior[_ngcontent-ng-c2531277376] .menu-desplegable[_ngcontent-ng-c2531277376] .linea-horizontal[_ngcontent-ng-c2531277376] {
  color: #fff;
}

.menu-superior[_ngcontent-ng-c2531277376] .menu-desplegable[_ngcontent-ng-c2531277376] li[_ngcontent-ng-c2531277376] {
  list-style: none;
}

.menu-superior[_ngcontent-ng-c2531277376] .menu-desplegable[_ngcontent-ng-c2531277376] li[_ngcontent-ng-c2531277376] a[_ngcontent-ng-c2531277376] {
  color: #fff;
}
</style>
