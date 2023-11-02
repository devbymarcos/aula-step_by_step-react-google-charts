import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { getDataApi } from "../api/api";

const optionChart = {
  title: "Receitas x Despesas",
  legend: {
    position: "bottom",
  },
};

const App = () => {
  const [dataChart, setDataChart] = useState(null);

  async function getDataChart() {
    const { url, options } = getDataApi();
    const response = await fetch(url, options);
    const json = await response.json();

    let indice = Object.keys(json.chartBase);
    let values = Object.values(json.chartBase);
    let data = [];

    for (let i = 0; i < values[0].length; i++) {
      data[i] = values.map((item) => {
        return item[i];
      });
    }
    data.unshift(indice);

    setDataChart(data);
  }

  useEffect(() => {
    getDataChart();
  }, []);

  if (!dataChart) return null;
  return (
    <>
      <div>
        <Chart
          chartType="ColumnChart"
          data={dataChart}
          width="100%"
          height="400px"
          legendToggle
          options={optionChart}
        />
      </div>
    </>
  );
};

export default App;
