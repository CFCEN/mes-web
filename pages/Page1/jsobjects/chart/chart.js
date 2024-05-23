export default {
  generateData() {
    var data = JSON.parse(test.data)
    const yValue = [];
    const xValues = [];
		console.log(data.length)
    for (let i = 0; i < data.length; i++) {
      yValue.push(data[i].y);
      xValues.push(data[i].x);
    }
    return {
      xValues,
      yValue,
    };
  },

  view() {
    return {
      xAxis: {
        type: "category",
        data: this.generateData().xValues,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: this.generateData().yValue,
          type: "bar",
        },
      ],
    };
  },
};
