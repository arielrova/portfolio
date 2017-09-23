<template>
  <transition name="slide-fade">
    <div id="spotlight">
    	<div class="jumbotron">
        <div>
          <div class="col">
        		<h1>HELLO! WELCOME TO ME!</h1>
        		<p>
        			<strong>
        				These are projects:
              </strong>
            </p>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <router-link to="/spotlight/project1">Project 1</router-link>
            </div>
            <div class="col">
              <router-link to="/spotlight/project2">Project-2</router-link>
            </div>
            <div class="col">
              <router-link to="/spotlight/project3">Project-3</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
  #spotlight {
    height: 100%;
    width: 100%;
    background-color: yellow;
  }
</style>

<style scoped>
  body {
    background-color: lightblue;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }
</style>