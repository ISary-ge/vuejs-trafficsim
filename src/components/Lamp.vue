<template>
  <div :class="lampClasses">
      <div class="lamp__counter" v-if="lampIsOn">
        {{sec}}
      </div>
  </div>
</template>

<script>
export default {
    name: 'Lamp',
    props: ['color', 'currentColorIs', 'sec'],
    computed: {
        lampIsOn: function(){
            return this.color === this.currentColorIs;
        },
        lampClasses: function(){
            return `
            lamp_${this.color}
            ${this.lampIsOn ? 'lamp_active' : ''}
            ${this.lampIsOn && this.sec < 3 ? 'lamp_blink' : ''}`;
            
        }
    }
}
</script>

<style>
@keyframes blink-animation {
to {
opacity: 0.5;
}
}
.lamp_red {
background-color: rgb(206, 0, 0);
opacity: 0.5;
}
.lamp_green {
background-color: rgb(0, 128, 0);
opacity: 0.5;
}
.lamp_yellow {
background-color: yellow;
opacity: 0.5;
}
.lamp_active {
opacity: 1;
}
.lamp__counter {
width: 30px;
height: 30px;
font-size: 1.5em;
text-align: center;
align-self: center;
font-family: Arial, Helvetica, sans-serif;
}
.lamp_blink {
animation: blink-animation 0.2s steps(10, start) infinite;
}
</style>