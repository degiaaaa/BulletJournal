<script>
//import sortBy from 'lodash/sortBy'
import dayjs from 'dayjs'

import ApexCharts from "apexcharts/dist/apexcharts.js";

export default {
   
    data () {
        return {
            dates: JSON.parse(localStorage.getItem('dates')) || [],
            
            
        }
        
    },

    computed: {
     
    orderedDates(){
      
    const dates =[]
    for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})
    } 
    //  dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 : -1))
  //return dates.sort()
  //
  const da = dates.sort().map(function(obj) {
    return dayjs(obj.id,'DD-MM-YYYY').format('YYYY-MM-DD')
     //dayjs( obj.id,'DD/MM/YYYY').toISOString().substring(0,10) //macht einen tag vorher, auch ohne toisostring //return obj.id 
    }) 
  
   
  return da
  //

  
  
    /*
  let dates = []
            for (const day in this.dates) {
                dates.push({
                    id: day,
                    ...this.dates[day]
                })
            } 
dates.sort(function (a,b ) {
                // '01.03.2014'.split('.')
                // gives ["01", "03", "2014"]
                a = a.id.split('.')
                b = b.id.split('.')
                return a[2] - b[2] || a[1] - b[1] || a[0] - b[0]
        });
            return dates.sort();  */
    },  

// Datum id getrennt von dates als Array
    orderedId(){
      const dates =[]
    for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})
    }
    dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 : -1))

      
      const ids = dates.sort().map(function(obj) {
    return dayjs( obj.id,'DD/MM/YYYY').toISOString().substring(0,10) })  //return obj.id 
   
  return ids
    },

    spaß(){
      const dates =[]
    for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})
    }
    dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 : -1))


         const sp = dates.sort().map(function(obj) {
    return obj.spaß})
    return sp
    },
    
    dankbarkeit(){
      const dates =[]
        for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})}
           dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 :-1))

    const  db= dates.sort().map(function(obj) {
    return obj.dankbarkeit})
    return db
    },

    produktivitaet(){
      const dates =[]
        for (const day in this.dates){
          dates.push({id: day, ...this.dates[day]}) }
           dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 :-1))


    const pr = dates.sort().map(function(obj) {
    return obj.produktivität
    })
    return pr
    },

     finanzen(){
    const dates =[]
       for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})}
   
          dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 :-1))


     const f = dates.sort().map(function(obj) {
    return obj.finanzen
    })
    return f
    },

    gesellschaft(){
    const dates =[]
    for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})
    }
    dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 :-1))

     const g = dates.sort().map(function(obj) {
    return obj.gesellschaft})
    return g},
    
    achtsamkeit(){
    const dates =[]
    for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})
    }
    dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 :-1))


      const acht = dates.sort().map(function(obj) {
        return obj.achtsamkeit })
        return acht},

    gesundheit(){
      const dates =[]
    for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})
    }
    dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 :-1))
      
      
      const ge = dates.sort().map(function(obj) {return obj.gesundheit
    })
    return acht
    },

  selbstliebe(){
    const dates =[]
    for (const day in this.dates){
        dates.push({id: day, ...this.dates[day]})
    }
    dates.sort((a,b) => (dayjs(a.id, 'DD/MM/YYYY').isAfter(dayjs(b.id, 'DD/MM/YYYY')) ? 1 :-1))


    const selbst = dates.sort().map(function(obj) {
    return obj.selbstliebe
    })
    return selbstliebe
    },

    },
    name:"StatisticsPage",
    mounted() {
    // code from Example: https://apexcharts.com/javascript-chart-demos/area-charts/spline/
    var options = {
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
          abled: true
       // enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      series: [
        {
          name: "Spaß & Freude",
          data: this.spaß
        },
        {
          name: "Dankbarkeit",
          data: this.dankbarkeit
        },
        {
          name: "Produktivität",
          data: this.produktivitaet
        },
        {
          name: "Finanzen",
          data: this.finanzen
        },
        {
          name: "Gesellschaft",
          data: this.gesellschaft
        },
        {
          name: "Achtsamkeit",
          data: this.achtsamkeit
        },
       
       /*
          {
          name: "Gesundheit",
          data: this.gesundheit
        },
        {
          name: "Selbstliebe",
          data: this.selbstliebe
        }*/
        
      ],
    
      xaxis: {
        type: "datetime",
       
       
       
        categories: this.orderedDates,
        /*
        categories: [
          "2018-09-19",
          "2018-10-19",
          "2018-11-19",
          "2018-12-19"]*/
        
          
      }, 
      tooltip: {
        x: {
          format: "dd/MM/yyyy"
        }
      }
    };

    if (this.$refs.chart) {
      // HTML element exists
      var chart = new ApexCharts(this.$refs.chart, options);
      chart.render();
    
    }
  },
}

</script>

<template>



  <div id="appchart">
   <h1>Überblick Ihrer Tagesbewertungen</h1>

    <hr />
    <div ref="chart" class="chart"></div>
    
  <div >{{orderedDates}}</div>
  </div>    

    
</template>

<style>
#appchart {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-right: 10em
 
}

.chart {
  width: 100%;
}

h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
 text-align: center;
  color: #7957D5;
  margin-top: 60px;

}
</style>
