<template>
    <v-container grid-list-xs>
     <v-layout row wrap>
         <v-flex xs1>
            <span>Senior Employee - 55454</span>
         </v-flex>
     </v-layout>   
    </v-container>
</template>

<script>
export default {
    props:{
        employee:{
            firstName: "Senior",
            lastName: "Employees",
            number: "45445" 
        }
    },
    data () {
    return {
      //
    }
  }
}
</script>

