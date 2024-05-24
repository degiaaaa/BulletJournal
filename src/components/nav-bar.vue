<template>
    
    <b-navbar >
        <template slot="start">
            <b-navbar-logo class=logo>
               <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="" viewBox="0 0 243.013 205.078"><g transform="translate(-353.987 -690)"><text transform="translate(466 794)" fill="#7957d5" font-size="99" font-family="Roboto" letter-spacing="-0.16em"><tspan x="0" y="0">B</tspan></text><text transform="translate(525 787)" fill="#7957d5" font-size="18" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">rain</tspan></text><text transform="translate(466.078 868.078)" fill="#7957d5" font-size="99" font-family="Roboto-Regular, Roboto" opacity="0.99"><tspan x="0" y="0">R</tspan></text><g transform="translate(337.978 726.001)"><g transform="translate(16.009 -0.001)"><path d="M93.192,25.738A15.079,15.079,0,1,1,78.113,40.819,15.076,15.076,0,0,1,93.192,25.738Z" transform="translate(-19.857 -2.815)" fill="#7957d5"/><path d="M101.1,73.074a9.694,9.694,0,1,1-9.693,9.691A9.691,9.691,0,0,1,101.1,73.074Z" transform="translate(-20.199 -7.363)" fill="#7957d5"/><path d="M51.058,142h82.874s-24.05-18.49-23.543-38.762c.3-11.3,23.543-25.674,23.428-57.059C133.745,30.394,117.742,4.156,90.572.885s-47.516,2.448-56.4,18.476-9.571,30.088-8.888,32.7,3.592,7.527,3.592,7.527S15.2,79.694,16.047,82.961C16.913,86.24,26.291,88,26.291,88s.85,2.277-.864,6.688,3.182,9.544,4.651,11.333c1.448,1.782-2.057,7.351-.865,10.464s6.84,6.859,13.331,6.047,14.837-2.283,17.732-2.785C66.814,134.468,51.058,142,51.058,142ZM112.4,82.079,109.593,86.2l-2.733-1.717a13.689,13.689,0,0,1-4.493,2.924l.675,3.074-5.029,1-.673-3.067A13.94,13.94,0,0,1,92,87.463l-1.795,2.619-4.315-2.694,1.789-2.619a12.977,12.977,0,0,1-3.049-4.291l-3.218.643L80.355,76.3l3.222-.639a12.53,12.53,0,0,1,1-5.1l-2.736-1.716L84.65,64.72l2.741,1.713a13.466,13.466,0,0,1,4.49-2.929l-.675-3.071,5.033-1.013.675,3.076a14.1,14.1,0,0,1,5.337.956l1.794-2.621,4.308,2.689-1.79,2.624a12.9,12.9,0,0,1,3.058,4.3l3.2-.638,1.059,4.814-3.207.638a12.452,12.452,0,0,1-1,5.11ZM65.337,27.933l4.973,1.1a20.028,20.028,0,0,1,4.915-6.577l-2.7-4.143L79.3,14.257,82.01,18.4a21.86,21.86,0,0,1,8.329-1.345l1.144-4.745,7.805,1.717-1.148,4.744a21.158,21.158,0,0,1,6.866,4.7l4.326-2.588,4.245,6.494-4.334,2.579a19.442,19.442,0,0,1,1.41,7.97l4.958,1.1-1.8,7.459-4.971-1.1a19.959,19.959,0,0,1-4.908,6.576l2.709,4.139-6.79,4.056-2.7-4.139a21.745,21.745,0,0,1-8.338,1.345l-1.149,4.745-7.795-1.721,1.139-4.745a20.82,20.82,0,0,1-6.857-4.7l-4.337,2.59-4.241-6.494,4.337-2.584A19.328,19.328,0,0,1,68.5,36.493l-4.967-1.1Z" transform="translate(-16.009 0.001)" fill="#7957d5"/></g></g><text transform="translate(527 863)" fill="#7957d5" font-size="18" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">eflection</tspan></text></g></svg>
                </b-navbar-logo>
            <b-navbar-item href="#">
                <router-link to="/">Home <i class="fas fa-home"></i></router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link to="/planner">Planner  <i class="far fa-calendar-alt"></i></router-link>
            </b-navbar-item>
            <b-navbar-item href="#">
                <router-link to="/statistics">Statistics <i class="fas fa-chart-line"></i></router-link>
            </b-navbar-item>
            
        </template>
    </b-navbar>
   
</template>

<style scoped>
div{
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-bottom: 1px  dotted #7957D5;
    
    text-align: center;
}
</style>