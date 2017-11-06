<template>
  <transition name="slide-fade">
    <div id="project">
    	<div class="jumbotron">
      	<h1>
          {{ project.title }}	
        </h1>
        <p>
          {{ project.image }}
        </p>
        <p>
          {{ project.description }} 
        </p>
      </div>
    </div>
  </transition>
</template>

<style>
  #project {
    height: 100%;
    width: 100%;
    background-color: yellow;
  }
</style>

<style scoped>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active, .slide-fade-leave-active { 
    transition: all .5s ease;
  }
  
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }
</style>

<script>
  console.log(this)
  var projects = {
    project1: {
      title: 'Ariels projekt',
      image: 'image',
      description: 'I did shit'
    },
    project2: {
      title: 'Ariels andra projekt',
      image: 'image2',
      description: 'Lorem ipsum in sed nulla.'
    },
    project3: {
      title: 'Ariels tredje projekt',
      image: 'image3',
      description: 'Veniam consectetur velit quis.'
    }
  }
export default {

    data () {
      var chosenProject = this.$route.params.project
      return {
        project: {
          title: projects[chosenProject].title,
          image: projects[chosenProject].image,
          description: projects[chosenProject].description
        }
      }
    }
}
</script>