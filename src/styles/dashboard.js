import styled from 'styled-components'

console.log('Height', window.innerHeight)
console.log('Width', window.innerWidth)

const deviceWidth = window.innerWidth
const deviceHeight = window.innerHeight
const dashboardPadding = 20;
const BottomNavigationHeight = 70;

console.log('dashboard container height', deviceHeight-(dashboardPadding*3)-BottomNavigationHeight)

const BottomNavigation = styled.div`
    background-color: #49ABDF;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${BottomNavigationHeight}px;
`
const DashboardContainer = styled.div`
    padding: ${dashboardPadding}px;
    margin-bottom: ${BottomNavigationHeight}px;
    background-color: ${props => props.$inputColor};
`

const WeatherContainer = styled.div`
    border: solid 1px #6C6565aa;
    border-radius: 4px;
    width: ${(deviceWidth)-(dashboardPadding*2)-4}px;
    height: ${(deviceHeight/3)-dashboardPadding-(BottomNavigationHeight/2)}px;
    margin-bottom: ${dashboardPadding}px;
    position: relative;

    & .test {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        width: 100%;
        top: 15%;
    }
`
const TempHumContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    width: ${(deviceWidth)-(dashboardPadding*2)}px;
`
const Temperature = styled.div`
    border: solid 1px #6C6565aa;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    width: 50%;
    height: ${(deviceHeight/3)-dashboardPadding-(BottomNavigationHeight/2)}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Humidity = styled.div`
    border-right: solid 1px #6C6565aa;
    border-top: solid 1px #6C6565aa;
    border-bottom: solid 1px #6C6565aa;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 50%;
    height: ${(deviceHeight/3)-dashboardPadding-(BottomNavigationHeight/2)}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const LightCO2Container = styled.div`
    display: flex;
`
const LightIntensity = styled.div`
    border: solid 1px #6C6565aa;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    width: ${(deviceWidth/2)-(dashboardPadding)-2}px;
    height: ${(deviceHeight/3)-dashboardPadding-(BottomNavigationHeight/2)}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const CO2 = styled.div`
    border-right: solid 1px #6C6565aa;
    border-top: solid 1px #6C6565aa;
    border-bottom: solid 1px #6C6565aa;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: ${(deviceWidth/2)-(dashboardPadding)-2}px;
    height: ${(deviceHeight/3)-dashboardPadding-(BottomNavigationHeight/2)}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export {
    BottomNavigation,
    DashboardContainer,
    WeatherContainer,
    LightCO2Container,
    LightIntensity,
    CO2,
    TempHumContainer,
    Temperature,
    Humidity
}