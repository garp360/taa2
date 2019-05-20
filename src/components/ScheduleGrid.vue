<template>
  <div class="home">
    <svg width="833" height="481" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#bbbbbb" stroke-width="0.5"></path>
        </pattern>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <rect width="32" height="32" fill="url(#smallGrid)"></rect>
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#bbbbbb" stroke-width="0.5"></path>
        </pattern>
      </defs>

      <path d="M32 0 V32 481 H481 288 V481 0 Z" fill="#ECFFF1" stroke="none"></path>
      <path d="M288 0 V288 481 H481 544 V481 0 Z" fill="#FEEAF9" stroke="none"></path>
      <path d="M544 0 V544 481 H481 801 V481 0 Z" fill="#ECF4FF" stroke="none"></path>

      <rect width="100%" height="100%" fill="url(#grid)"></rect>
      
      <template v-for="model in schedule.data">
        <text :y="y(model.day)" x="0">Day {{ model.day }}</text>
        <text :y="y(model.day)" x="780">Day {{ model.day }}</text>
        <path :d="shift(model)" :fill="SHIFT_COLOR" :fill-opacity="SHIFT_OPACITY" :stroke="SHIFT_STROKE" stroke-width="0.5"></path>
        <path @click="describe(model)" :d="lunch(model)" :fill="LUNCH_COLOR" :fill-opacity="LUNCH_OPACITY" :stroke="LUNCH_STROKE" stroke-width="0.5"></path>
      </template>
      <!-- <path d="M544 0 V544 481 H481 801 V481 0 Z" fill="#ECF4FF" stroke="none" />
      <path d="M544 0 V544 481 H481 801 V481 0 Z" fill="#ECF4FF" stroke="none" />-->

      <!-- <circle v-for="(d, i) in data" :cy="y" :cx="x(i)" :r="d"></circle>
      <text v-for="(d, i) in data" :y="y" :x="x(i)">{{ d }}</text>-->
    </svg>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      SHIFT_COLOR: "#b335f8",
      SHIFT_OPACITY: "0.56",
      SHIFT_STROKE: "#431760",
      LUNCH_COLOR: "#ff8b00",
      LUNCH_OPACITY: "0.76",
      LUNCH_STROKE: "#54421a",
      display: false,

      agency: {
        shifts: [
          {
            shift: [700, 1500, "#ECFFF1"],
             core: [700, 1500, "#ECFFF1"]
          },
          {
            shift: [1500, 2300, "#FEEAF9"],
             core: [1500, 2300, "#FEEAF9"],
          },
          {
            shift: [2300, 700, "ECF4FF"],
             core: [2300, 700, "ECF4FF"]
          }
        ]
      },
      schedule: {
        data: [
          {
            day: 1
          },
          {
            day: 2,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 3,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 4,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 5,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 6,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 7
          },
          {
            day: 8
          },
          {
            day: 9,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 10,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 11,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 12,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 13,
            shift: [700, 1650, "#b335f8"],
            lunch: [1100, 1150, "blue"]
          },
          {
            day: 14
          }
        ]
      },
      period: 32,
      barHeight: 16,
      barHeight2: 20,
      barHeight3: 24
    };
  },
  methods: {
    y(day) {
      let yaxis = day * 32 + 5 
      console.log("yaxis = " + yaxis)
      return yaxis * 1.0
    },
    color(model) {
      if (model.shift) {
        return model.shift[2]
      }
    },
    shift(model) {
      if (model.shift) {
        console.log("model :" + model.shift[0])

        let shiftStart = model.shift[0] / 100;
        let shiftDuration = model.shift[1] / 100 - shiftStart;

        let x = shiftStart * this.period;
        let y = model.day * 32 - this.barHeight / 2;
        let down = y + this.barHeight;
        let right = x + shiftDuration * this.period;

        return "M" + x + " " + y + " V" + down + " H" + right + " V" + y + " Z";

        console.log("model :" + path);
      } else {
        return "";
      }
    },
    lunch(model) {
      if (model.shift) {
        console.log("model :" + model.lunch[0]);

        let start = model.lunch[0] / 100;
        let duration = model.lunch[1] / 100 - start;

        let x = start * this.period;
        let y = model.day * 32 - (this.barHeight + 4) / 2;
        let down = y + (this.barHeight + 4);
        let right = x + duration * this.period;

        return "M" + x + " " + y + " V" + down + " H" + right + " V" + y + " Z";

        console.log("model :" + path);
      } else {
        return "";
      }
    },
    describe( model ) {
        
    }
  }
};
</script>

<style>
.home {
  width: 100%;
  height: 480px;
  overflow: hidden;
}
</style>
