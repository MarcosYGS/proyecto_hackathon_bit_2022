
<template>


  <div class="q-pa-md navv primeroo">
    <q-toolbar class=" text-white shadow-2 rounded-borders primeroo">
      <q-btn flat label="Homepage" class="primeroo" />
      <q-space class="primeroo" />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs shrink class="primeroo">
        <q-route-tab  to="/registro" label="Ingresa" />
      </q-tabs>
    </q-toolbar>
  </div>
<!-- cabecera -->
    <div class="contenidoHeader">
<div class="textos-h">
            <h1>Titulo del proyecto</h1>
            <p>subtitulo o eslogan</p>
             <q-tabs>
              <q-route-tab class="primeroo" to="/registro" label="Ingresa" />
             </q-tabs>

        </div>
    </div>

  <div class="svg" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #ffff;"></path>
            </svg></div>

  <!-- informacion -->
<div class=" row contenido justify-center greyy">
    <div class="col-6 self-center">
<img src="../assets/telefono.svg" class="ima" alt="">
    </div>
    <div class="col-6 ">
      <h2>Titulo del apartado</h2>
      <div class="q-pa-md" style="max-width: 350px">
    <q-expansion-item
      class="shadow-1 overflow-hidden text-h5 tarjeta-2"
      style="border-radius: 30px"
      icon="explore"
      label="Counter"
      @show="startCounting"
      @hide="stopCounting"
      header-class="bg-primary text-white "
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          Counting: <q-badge color="secondary">dfgdfg</q-badge>.
          Will only count when opened, using the show/hide events to control count timer.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
  <div class="q-pa-md" style="max-width: 350px">
    <q-expansion-item
      class="shadow-1 overflow-hidden text-h5 tarjeta-2"
      style="border-radius: 30px"
      icon="explore"
      label="Counter"
      @show="startCounting"
      @hide="stopCounting"
      header-class="bg-primary text-white "
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          Counting: <q-badge color="secondary">dfgdfg</q-badge>.
          Will only count when opened, using the show/hide events to control count timer.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
  <div class="q-pa-md" style="max-width: 350px">
    <q-expansion-item
      class="shadow-1 overflow-hidden text-h5 tarjeta-2"
      style="border-radius: 30px"
      icon="explore"
      label="Counter"
      @show="startCounting"
      @hide="stopCounting"
      header-class="bg-primary text-white "
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          Counting: <q-badge color="secondary">dfgdfg</q-badge>.
          Will only count when opened, using the show/hide events to control count timer.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
  <div class="q-pa-md" style="max-width: 350px">
    <q-expansion-item
      class="shadow-1 overflow-hidden text-h5 tarjeta-2"
      style="border-radius: 30px"
      icon="explore"
      label="Counter"
      @show="startCounting"
      @hide="stopCounting"
      header-class="bg-primary text-white "
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          Counting: <q-badge color="secondary">dfgdfg</q-badge>.
          Will only count when opened, using the show/hide events to control count timer.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>



    </div>


  </div>
  <!-- division -->
<div class="contenido_4 row justify-center">
  <div class="col-8 self-center text-white">
    <h2 >Juntos podemos apoyar</h2>
    <h4 >Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
</div>
</div>

<!-- tarjetas -->
<div class=" row gris justify-evenly contenido_3">
  <div class="col-10 self-center">
    <h3>nuestros servicios</h3>
  </div>
    <div class="col-3 self-center">
<q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, autem quisquam. Voluptatibus fuga nostrum omnis illum iure laborum eius temporibus quae ducimus sequi, placeat architecto dolore ea, ut, tenetur ipsum?
      </q-card-section>
    </q-card>
    </div>
    <div class="col-3 self-center">
<q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, autem quisquam. Voluptatibus fuga nostrum omnis illum iure laborum eius temporibus quae ducimus sequi, placeat architecto dolore ea, ut, tenetur ipsum?
        <q-btn label="Card" color="primary" @click="card = true" />
      </q-card-section>





    </q-card>
    </div>
    <div class="col-3 self-center">
<div class="q-pa-md">
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe <q-btn label="Card" color="primary" @click="card = true" /></div>
      </q-card-section>
      <q-dialog v-model="card">
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Cafe Basilico
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            $・Italian, Cafe
          </div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Reserve" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </q-card>
  </div>
    </div>
  </div>

  <!-- tercera seccion -->
<div class=" row justify-evenly">
  <div class="col-6 self-center">
     <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        Timeline heading
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        icon="delete"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>
        November, 2017
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="done_all"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
  </div>
  </div>

<!-- footer -->



</template>

<script setup>
import { ref } from 'vue'

const card = ref(false);

</script>

<style scoped>
.contenidoHeader{
 height: 100vh;
 background-image: linear-gradient(120deg, #1b66a38a 0%, #1b66a38a 100%), url(../assets/mockou.jpg);

}

.navv{
    padding: 0px;
    margin: 5px;
    position: absolute;
    top: 3vh;
    width: 98%;
    background-color: #092245;

}

.primeroo{
  background-color: #092245;
}
.svg{
    padding: 0px;
    margin: 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.textos-h{
    height: 500px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
}

.ima{
  display:block;
margin:auto;
}

.contenido{
 height: 100vh;
}

.contenido_3{
 height: 80vh;
}

.contenido_4{
 height: 50vh;
 background-color: #092245;
 margin: 0;
 padding: 0;
}

.tarjeta-2{
  width: 40vw;
}

.primero{
  background-color: red;
}

.greyy{
background-color: #ffff
}

.gris{
background-color: #B9B9B9
}
.segundo{
  background-color: blue
}

.footer{
  height: 100vh
}


</style>

