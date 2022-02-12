<template>
  <div class="container">
    <Lamp class="lamp" color="red" :currentColorIs="currentColorIs" :sec="counter"/>
    <Lamp class="lamp" color="yellow" :currentColorIs="currentColorIs" :sec="counter"/>
    <Lamp class="lamp" color="green" :currentColorIs="currentColorIs" :sec="counter"/>
  </div>
</template>

<script>
import Lamp from '@/components/Lamp.vue';


export default {
    name: 'home',
    props: ['currentColorIs', 'time'],
    components: {
        Lamp,
    },
    data(){
        return{
            counter: null,
            interval: null
        };
    },
    computed: {
        getNextColor(){
            this.$store.commit('setNextColor', this.currentColorIs);
            return this.$store.state.nextColor;
        }
    },
    watch:{
        time(){
            this.setTimer();
        }
    },
    mounted(){
        this.setTimer();
    },
    methods: {
        setTimer(){
            
            const timer = this.time;

            setTimeout(()=>{this.$router.push(this.getNextColor);}, timer);
            this.counter = this.time / 1000;


            if(this.interval) clearInterval(this.interval);

            this.interval = setInterval(()=> {
                this.counter -= 1;
            }, 1000);
        }
    }
}
</script>

<style>
    .container{
        border: 1px solid black;
        border-radius: 5px;
        width: 100px;
        margin: 100px auto;
        border-radius: 20px;
        padding: 20px 10px;
        background-color: black;
    }
    .lamp{
        width: 60px;
        height: 60px;
        margin: 10px auto;
        border-radius: 50%;
        display: flex;
        justify-content: center;
    }
</style>
