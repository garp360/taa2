<template>
  <div>
    <v-container fluid style="background-color:#E9E9E9;border-bottom:1px solid #777777;">
      <v-layout row wrap>
        <span>CHOOSER</span>
        <v-spacer></v-spacer>
        <span>CHOOSER</span>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout column align-start justify-start>
        <v-layout row wrap>
          <v-layout xs6 align-start justify-end>
            <!-- Employee Schedule Selector -->
            <v-card flat light color="transparent" class="pl-4">
                <v-responsive :max-width="300" >
                <v-layout column >
                  <v-flex>
                    <v-checkbox label="Select Days" class="blue--text text--darken-3"></v-checkbox>
                  </v-flex>
                  <v-layout row wrap>
                    <v-flex class="pl-4">
                      <v-checkbox label="Monday"></v-checkbox>
                      <v-checkbox label="Tuesday"></v-checkbox>
                      <v-checkbox label="Wednesday"></v-checkbox>
                      <v-checkbox label="Thursday"></v-checkbox>
                      <v-checkbox label="Friday"></v-checkbox>
                    </v-flex>
                    <v-flex class="pl-4">
                      <v-checkbox label="Sunday"></v-checkbox>
                      <v-checkbox label="Saturday"></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-layout>

                <v-layout column mt-3> 
                  <v-flex>
                    <v-checkbox label="Select Weeks"></v-checkbox>
                  </v-flex>
                  <v-layout row wrap>
                    <v-flex class="pl-4">
                      <v-checkbox label="First Week of Pay Period"></v-checkbox>
                      <v-checkbox label="Second Week of Pay Period"></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-layout>
                </v-responsive>
            </v-card>
          </v-layout>
          <v-layout xs6 align-start justify-left>
            <!-- Employee Schedule Form -->
            <v-card flat light color="transparent" class="pl-5">
              <v-responsive :max-width="500">
                <v-layout row>
                  <v-text-field width="100px" label="AWS" class="ma-2" outline></v-text-field>
                  <v-text-field width="100px" label="Template" class="ma-2" outline></v-text-field>
                  <v-text-field width="100px" label="Pattern" class="ma-2" outline></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field width="100px" label="Shift Start" class="ma-2" outline></v-text-field>
                  <v-text-field width="100px" label="Shift End" class="ma-2" outline></v-text-field>
                  <v-text-field width="100px" label="Shift Duration" class="ma-2" outline></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field width="100px" label="Lunch Start" class="ma-2" outline></v-text-field>
                  <v-text-field width="100px" label="Lunch End" class="ma-2" outline></v-text-field>
                  <v-text-field width="100px" label="Lunch Duration" class="ma-2" outline></v-text-field>
                </v-layout>
                <v-layout row wrap>
                  <v-btn round color="primary" dark>Apply</v-btn>
                  <v-btn round outline color="primary" dark>Reset</v-btn>
                </v-layout>
              </v-responsive>
            </v-card>
          </v-layout>
        </v-layout>

        <v-layout align-start justify-center row fill-height>
         
            <v-card light color="white darken-5" class="pa-2 mt-4">
                <ScheduleGrid/>
            </v-card>
      
        </v-layout>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import ScheduleGrid from "@/components/ScheduleGrid.vue";
export default {
  components: {
    ScheduleGrid
  },
  data() {
    return {};
  }
};
</script>

<style>
.v-input.v-input--selection-controls.v-input--checkbox {
  height: 24px;
}
.v-input--selection-controls {
  margin-top: 2px;
  padding-top: 2px;
}
</style>

