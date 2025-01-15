import { 
  BottomNavigation,
  DashboardContainer,
  WeatherContainer,
  LightCO2Container,
  LightIntensity,
  CO2,
  TempHumContainer,
  Temperature,
  Humidity
} from "../styles/dashboard"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {

  const options = {
    responsive: false,
    elements: {
      point:{
        radius: 0
      }
    },
    scales:{
      y: {
        display: false
      },
      x: {
        display: false
      }
    },
    plugins: {
      // legend: {
      //   position: 'top',
      // },
      legend: {
        display: false
      },
      tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const tempData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3, 10,5,4,12,3,8],
        borderColor: '#49ABDF',
        lineTension: 0.4
      }
    ],
  };

  const humidityData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10,7,21,10,2,2,14,8,4,7,10,4,5],
        borderColor: '#49ABDF',
        lineTension: 0.4
      }
    ],
  };

  return (
    <>
    
      <DashboardContainer $inputColor="#fff">
        <WeatherContainer>
            <div className="test">
              <div style={{display: 'flex', justifyContent: 'center', position: 'relative'}}>
                <p style={{ fontSize: '42px', margin: 0, fontWeight: '500'}}>10:30</p>
                <p style={{ fontSize: '16px', margin: 0, position: 'absolute', left: '64%', top: 5}}>am</p>
              </div>
              <p style={{ margin: 0, fontSize: '15px', position: 'relative', top: -8}}>January 13, 2025</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', position: 'absolute', width: '100%', bottom: '18%'}}>
              <div>
                <div style={{display: 'flex', justifyContent: 'center', position: 'relative'}}>
                  <p style={{ fontSize: '42px', margin: 0, fontWeight: '500'}}>29.3</p>
                  <p style={{ fontSize: '16px', margin: 0, position: 'absolute', right: -15, top: 8}}>°C</p>
                </div>
                <p style={{margin: 0, fontSize: '16px' }}>Sunny</p>
              </div>
              <div>
                <div style={{display: 'flex', justifyContent: 'center', position: 'relative'}}>
                  <p style={{ fontSize: '42px', margin: 0, fontWeight: '500'}}>77</p>
                  <p style={{ fontSize: '16px', margin: 0, position: 'absolute', right: -5, top: 8}}>°C</p>
                </div>
                <p style={{margin: 0, fontSize: '16px' }}>Humidity %</p>
              </div>
              <div>
                <div style={{display: 'flex', justifyContent: 'center', position: 'relative'}}>
                  <p style={{ fontSize: '42px', margin: 0, fontWeight: '500'}}>32</p>
                  <p style={{ fontSize: '16px', margin: 0, position: 'absolute', right: 0, top: 8}}>°C</p>
                </div>
                <p style={{margin: 0, fontSize: '16px' }}>Precipitation</p>
              </div>
            </div>
        </WeatherContainer>
        <TempHumContainer>
          <Temperature>
            <div style={{display: 'flex', justifyContent: 'center', position: 'absolute', top: '20%',}}>
              <p style={{ fontSize: '46px', margin: 0, fontWeight: '500'}}>29.3</p>
              <p style={{ fontSize: '16px', margin: 0, position: 'absolute', right: '-30%', top: '18%'}}>°C</p>
            </div>
            <p style={{position: 'absolute', margin: 0}}>Temperature</p>
            <div style={{position: 'absolute', bottom:'23%' }}>
              <Line width={"110%"} height={"45%"} options={options} data={tempData} />
            </div>
          </Temperature>
          <Humidity>
            <div style={{display: 'flex', justifyContent: 'center', position: 'absolute', top: '20%',}}>
              <p style={{ fontSize: '46px', margin: 0, fontWeight: '500'}}>88</p>
              <p style={{ fontSize: '16px', margin: 0, position: 'absolute', right: '-34%', top: '18%'}}>%</p>
            </div>
            <p style={{position: 'absolute', margin: 0}}>Humidity</p>
            <div style={{position: 'absolute', bottom:'23%' }}>
              <Line width={"110%"} height={"45%"} options={options} data={humidityData} />
            </div>
          </Humidity>
        </TempHumContainer>
        <LightCO2Container>
          <LightIntensity>
            <div style={{display: 'flex', justifyContent: 'center', position: 'absolute', top: '23%',}}>
              <p style={{ fontSize: '42px', margin: 0, fontWeight: '500'}}>245</p>
              <p style={{ fontSize: '16px', margin: 0, position: 'absolute', right: '-30%', top: '14%'}}>cd</p>
            </div>
            <p style={{position: 'absolute', margin: 0}}>Light Intensity</p>
            <div style={{position: 'absolute', bottom:'23%' }}>
              <Line width={"110%"} height={"45%"} options={options} data={tempData} />
            </div>
          </LightIntensity>
          <CO2>
            <div style={{display: 'flex', justifyContent: 'center', position: 'absolute', top: '26%',}}>
              <p style={{ fontSize: '34px', margin: 0, fontWeight: '500'}}>1242</p>
              <p style={{ fontSize: '13px', margin: 0, position: 'absolute', right: '-44%', top: '8%'}}>ppm</p>
            </div>
            <p style={{position: 'absolute', margin: 0}}>CO₂ Level</p>
            <div style={{position: 'absolute', bottom:'23%' }}>
              <Line width={"110%"} height={"45%"} options={options} data={tempData} />
            </div>
          </CO2>
        </LightCO2Container>
      </DashboardContainer>
      <BottomNavigation></BottomNavigation>
    </>
  )
}

export default Dashboard