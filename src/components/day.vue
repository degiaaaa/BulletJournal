<script>
import * as dayjs from 'dayjs'

export default {
    props: ['date'],
    data () {
        return {
            day: {
                text: '',
                spaß: 0,
                dankbarkeit: 0,
                produktivität: 0,
                finanzen: 0,
                gesellschaft: 0,
                achtsamkeit: 0,
                gesundheit: 0,
                selbstliebe: 0
            }
        }
    },
    //Speichern der Daten aus dem Local Storage
    methods: {
        save () {
            const dateId = dayjs(this.date).format('DD-MM-YYYY')
            const dates = JSON.parse(localStorage.getItem('dates'))

            dates[dateId] = this.day
            localStorage.setItem('dates', JSON.stringify(dates))

            this.$emit('close')
        }
    },
    computed: {
        formatedDate () {
            return dayjs(this.date).format('DD-MM-YYYY')
        }
    },
    //Beobachte ob sich das Dateum ändert, wenn ja, dann schreibe die Daten die gespeichert wurden in den zugehörigen Tag ein
    watch: {
        'date': {
            handler (date) {
                const dateId = dayjs(date).format('DD-MM-YYYY')
                if (JSON.parse(localStorage.getItem('dates'))[dateId]) {
                    this.day = JSON.parse(localStorage.getItem('dates'))[dateId]
                }
            },
            immediate: true,
        }
    }
}

</script>



<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header-title">Tagebuch vom {{formatedDate}}</div>
        </div>
        <div class="card-content">
            <b-field label="Sag mir wie dein Tag war">
                <b-input v-model="day.text" type="textarea" placeholder="Schreib hier..."></b-input>
            </b-field>
            <b-field label="Spaß & Freude" >
                <b-rate v-model="day.spaß" :min="0" :max="10"> </b-rate>
            </b-field>
            <b-field label="Dankbarkeit">
                <b-rate v-model="day.dankbarkeit" :min="0" :max="10" ></b-rate>
            </b-field>
            <b-field label="Neu Erlerntes & Produktivität" align =center>
                <b-rate v-model="day.produktivität" align="center" :min="0" :max="10"></b-rate>
            </b-field>
            <b-field label="Finanzen">
                <b-rate v-model="day.finanzen" :min="0" :max="10" ></b-rate>
            </b-field>
             <b-field label="Gesellschaft">
                <b-rate v-model="day.gesellschaft" :min="0" :max="10"></b-rate>
            </b-field>
             <b-field label="Achtsamkeit">
                <b-rate v-model="day.achtsamkeit" :min="0" :max="10"></b-rate>
            </b-field>
             <b-field label="Gesundheit">
                <b-rate v-model="day.gesundheit" :min="0" :max="10" ></b-rate>
            </b-field>
             <b-field label="Selbstliebe">
                <b-rate v-model="day.selbstliebe" :min="0" :max="10" class="sl"> </b-rate>
            </b-field>
            <div class="buttons">
                <b-button @click="save" type="is-success">Speichern</b-button>
            </div>
        </div>
          
    </div>
  
</template>
<style scoped>

 
.card-header-title{
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 1em;
  text-align: right;
  color: #7957D5;
  margin-top: 20px;
  font-weight: normal;
  
}




</style>