<template>
  <div>
    <v-container fluid style="background-color:#E9E9E9;border-bottom:1px solid #777777;">
      <v-layout row wrap>
        <span>CHOOSER</span>
        <v-spacer></v-spacer>
        <span>CHOOSER</span>
      </v-layout>
    </v-container>
    <v-container fluid align-start justify-center>
      <v-layout column >
        <v-layout row wrap>
          <v-layout xs6 align-start justify-end>
            <!-- Employee Schedule Selector -->

              <v-responsive :max-width="250">
                <v-layout column>
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

                <v-layout column py-3>
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
 
          </v-layout>
          <v-layout xs6 align-start justify-left>
            <!-- Employee Schedule Form -->
            
            <v-responsive :max-width="500" class="ml-5 pl-5">
              <v-form id="schedulingForm">
                <v-layout row>
                  <v-text-field width="100px" label="AWS" class="ma-1" outline></v-text-field>
                  <v-text-field width="100px" label="Template" class="ma-1" outline></v-text-field>
                  <v-text-field width="100px" label="Pattern" class="ma-1" outline></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field width="100px" label="Shift Start" class="ma-1" outline></v-text-field>
                  <v-text-field width="100px" label="Shift End" class="ma-1" outline></v-text-field>
                  <v-text-field width="100px" label="Shift Duration" class="ma-1" outline></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field width="100px" label="Lunch Start" class="ma-1" outline></v-text-field>
                  <v-text-field width="100px" label="Lunch End" class="ma-1" outline></v-text-field>
                  <v-text-field width="100px" label="Lunch Duration" class="ma-1" outline></v-text-field>
                </v-layout>
                <v-layout row wrap>
                  <v-btn round color="primary" dark>Apply</v-btn>
                  <v-btn round outline color="primary" dark>Reset</v-btn>
                </v-layout>
              </v-form>
            </v-responsive>
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
import ScheduleGrid from "@/components/scheduler/ScheduleGrid.vue";
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

.theme--light.v-text-field--outline>.v-input__control>.v-input__slot {
    border: 1px solid rgba(0,0,0,.54) !important;
}

.v-text-field--full-width>.v-input__control>.v-input__slot, .v-text-field--outline>.v-input__control>.v-input__slot {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    min-height:20px;
}
.v-input.v-input--selection-controls.v-input--checkbox {
  height: 24px;
}
.v-input--selection-controls {
  margin-top: 2px;
  padding-top: 2px;
}

.v-text-field .v-label--active {
    max-width: 133%;
    MARGIN-TOP: -14PX;
    PADDING-LEFT: 2PX;
    PADDING-RIGHT: 2PX;
    BACKGROUND-COLOR: #FFF;
}

.v-text-field input {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    line-height: 20px;
    padding: 2px 0px 8px;
    max-width: 100%;
    min-width: 0;
    width: 100%;
}

.v-text-field--box input, .v-text-field--full-width input, .v-text-field--outline input {
    margin-top: 12px;
}

#schedulingForm label.v-label {
    top:12px; 
    left: 0px; 
    right: auto; 
    position: absolute;
}

.v-label {
    font-size: 14px;
    line-height: 1;
    min-height: 8px;
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
    transition: .3s cubic-bezier(.25,.8,.5,1);
}

.v-text-field--box .v-label--active, .v-text-field--full-width .v-label--active, .v-text-field--outline .v-label--active {
    -webkit-transform: translateY(-6px) scale(.85);
    transform: translateY(-6px) scale(.85);
}

</style>

