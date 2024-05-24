<template>
    <span>
        <div >
        <b-modal :active.sync="isModalActive">
           
            <Day
                :date="date" 
                @close="closeModal" 
            />
        </b-modal>
        </div>
        
        <h1> Gehen Sie auf einen Tag um zu Starten </h1>
       
        <div >
         <b-datepicker
           inline 
            v-model="date">
        </b-datepicker>
        </div>
    </span>
</template>

<script>
import Day from '../day'

export default {
    // Komponente der Tageseinträge namens day implementieren
    components: {
        Day
    },
    data () {
        return {
            isModalActive: false,
            date: new Date()
        }
    },
    
    //Beobachte datum sich ändert( wenn man draufklickt ändert sich date) dann graue hintergurnd, während modal auf true gesetzt wird
    watch: {
        date () {
            this.isModalActive = true  
        }
    },
    
    methods: {
        closeModal () {
            this.isModalActive = false
        }
    }
}
</script>

<style scoped>

 div{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: lighter;
  margin-bottom: 4em;
  text-align: center;
  color: #7957D5;
}
h1{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  margin-bottom: 1em;
  text-align: center;
  color: #7957D5;
  margin-top: 60px;
}


</style>
