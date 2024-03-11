import React, { useState, useEffect } from 'react';
import GraphDisplay from './GraphDisplay';
import './DataDisplay.css'

const DataDisplay = ({ itemId, message, changeMessage }) => {
  const [priceData, setPriceData] = useState(null);
  const [datesData, setDatesData] = useState(null);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {

    async function getPriceData() {
      try {
        const response = await fetch(
          'https://cors-anywhere.herokuapp.com/https://na-trade.naeu.playblackdesert.com/Trademarket/GetMarketPriceInfo',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'BlackDesert',
            },
            body: JSON.stringify({
              keyType: 0,
              mainKey: itemId,
              subKey: 0,
            }),
          }
        );
  
        console.log('Full Response:', response);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    
        const responseData = await response.json();
        // console.log('API Data:', responseData);
        // const responseData = await {
        //   resultMsg: "2406193-2406193-2377250-2251924-2270486-2440222-2434948-2382458-2395700-2269902-2318579-2139603-2250135-2305027-2399200-2264670-2323842-2419488-2268611-2190857-2193684-2234529-2259215-2202821-2179470-2264221-2336811-2278430-2324790-2324822-2304908-2361769-2330905-2286784-2275556-2301740-2265405-2292034-2342798-2394617-2341356-2323017-2380194-2302007-2292848-2144483-2160937-2332902-2354835-2356399-2240391-2292105-2331590-2448578-2368088-2271076-2296521-2476299-2297616-2389743-2145616-2289008-2334490-2345618-2349312-2193448-2357677-2323867-2409562-2430909-2417125-2249793-2324910-2245436-2421102-2340843-2391762-2390543-2288153-2324957-2296558-2440658-2501166-2373277-2358364-2386242-2351832-2283260-2431742-2408752"
        // }
        console.log('API Data:', responseData);

        setPriceData(responseData.resultMsg.split('-'));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        changeMessage('Error: Could Not Fetch Data')
      }
    }

    console.log('itemId: ', itemId)
    if (itemId !== null) {
      getPriceData();
    } else {
      setPriceData(null);
      setDatesData(null);
      setGraphData(null);
    }

  }, [itemId]);

  useEffect(() => {

    function getDatesData() {
      var datesArray = [];
      const today = new Date();

      for (let i = 0; i < priceData.length; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() - i);
      
        const year = currentDate.getFullYear().toString().slice(-2);
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
      
        const formattedDate = `${year}-${month}-${day}`;
        datesArray.push(formattedDate);
      }

      setDatesData(datesArray)
    }

    console.log('priceData: ', priceData)
    if (priceData !== null) {
      getDatesData();
    }

  }, [priceData]);

  useEffect(() => {

    function getGraphData() {
      setGraphData(
        datesData.map((date, index) => ({
          date: date,
          price: priceData[index],
        })).reverse()
      )
    }

    console.log('datesData: ', datesData)
    if (priceData !== null && datesData !== null) {
      getGraphData();
    }
    
  }, [priceData, datesData]);

  useEffect(() => {
    console.log('graphData: ', graphData)
  }, [graphData])

  return (
    <div className='row' id='data-display-row'>
      <div className='col' id='data-display-col'>
        <div id='data-display-message'>
          {message.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </div>
        <GraphDisplay graphData={graphData}/>
      </div>
    </div>
  );

};

export default DataDisplay;








  // const [data, setData] = useState([]);
  // const [dates, setDates] = useState([]);
  // const [chartData, setChartData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fetchedData = {resultMsg: "100-200"};
  //       console.log('API Data:', fetchedData);
  //       setData(fetchedData.resultMsg.split('-'));
  //     } catch (error) {
  //       console.error('Error fetching data:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   function generateDates() {
  //     const datesArray = [];
  //     const today = new Date();

  //     for (let i = 0; i < 2; i++) {
  //       const currentDate = new Date(today);
  //       currentDate.setDate(today.getDate() - i);
      
  //       const year = currentDate.getFullYear();
  //       const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  //       const day = String(currentDate.getDate()).padStart(2, '0');
      
  //       const formattedDate = `${year}-${month}-${day}`;
  //       datesArray.push(formattedDate);
  //     }

  //     console.log('Generated Dates:', datesArray)
  //     setDates(datesArray)
  //   };

  //   generateDates();
  // }, [data]);

  // useEffect(() => {
  //   function generateChartData() {
  //     const chartData = {
  //       labels: dates,
  //       datasets: [
  //         {
  //           label: 'Your Chart Label',
  //           data: data.map(item => parseInt(item)),
  //           fill: false,
  //           borderColor: 'rgb(75, 192, 192)',
  //           tension: 0.1,
  //         },
  //       ],
  //     };

  //     console.log(chartData)
  //     setChartData(chartData)
  //   };

  //   generateChartData();
  // }, [dates, data]);


  // var fetchedData = {resultMsg: "100-200"};
  // fetchedData = fetchedData.resultMsg.split('-');

  // const datesArray = [];
  // const today = new Date();

  // for (let i = 0; i < 2; i++) {
  //   const currentDate = new Date(today);
  //   currentDate.setDate(today.getDate() - i);
  
  //   const year = currentDate.getFullYear();
  //   const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  //   const day = String(currentDate.getDate()).padStart(2, '0');
  
  //   const formattedDate = `${year}-${month}-${day}`;
  //   datesArray.push(formattedDate);
  // }

  // const chartData = {
  //   labels: datesArray,
  //   datasets: [
  //     {
  //       label: 'Your Chart Label',
  //       data: fetchedData.map(item => parseInt(item)),
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1,
  //     },
  //   ],
  // };

  // return (
  //   <div>
  //     <h2>Data Display</h2>
  //       <Line data={chartData} />
  //   </div>
  // );

  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     pv: 4800,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     pv: 3800,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //     pv: 4300,
  //   },
  // ];

  // useEffect(() => {
  //   console.log("itemId:", itemId)
  //   if (data !== null) {
  //     console.log("data")
  //     setData(null)
  //   }
  //   if (dates !== null) {
  //     console.log("dates")
  //     setDates(null)
  //   }
  //   if (chartData !== null) {
  //     console.log("chartData")
  //     setChartData(null)
  //   }
  // }, [itemId])

  // useEffect(() => {
  //   console.log("data", data)
  //   console.log("dates", dates)
  //   console.log("chartData", chartData)
  //   if (data === null && dates === null && chartData === null) {
  //     fetchData()
  //   }
  // }, [data, dates, chartData])

  // useEffect(() => {
  //   if (data !== null && dates !== null) {
  //     generateChartData()
  //   }
  // }, [data, dates])

  // async function fetchData() {
  //   try {
  //     // const response = await fetch(
  //     //   'https://cors-anywhere.herokuapp.com/https://na-trade.naeu.playblackdesert.com/Trademarket/GetMarketPriceInfo',
  //     //   {
  //     //     method: 'POST',
  //     //     headers: {
  //     //       'Content-Type': 'application/json',
  //     //       'User-Agent': 'BlackDesert',
  //     //     },
  //     //     body: JSON.stringify({
  //     //       keyType: 0,
  //     //       mainKey: itemId,
  //     //       subKey: 0,
  //     //     }),
  //     //   }
  //     // );
  
  //     // console.log('Full Response:', response);
  
  //     // if (!response.ok) {
  //     //   throw new Error(`Failed to fetch data. Status: ${response.status}`);
  //     // }
  
  //     // const fetchedData = await response.json();
  //     // console.log('API Data:', fetchedData);
  //     // parseFetchedData(fetchedData)

  //     const fetchedData = {
  //       resultMsg: "bruh-how"
  //     }
  //     console.log('API Data:', fetchedData);
  //     parseFetchedData(fetchedData)

  //   } catch (error) {
  //     console.error('Error fetching data:', error.message);
  //   }
  // };

  // function parseFetchedData(fetchedData) {
  //   var dataArray = fetchedData.resultMsg.split('-');
  //   var datesArray = [];

  //   const today = new Date();
  //   for (let i = 0; i < 2; i++) {
  //     const currentDate = new Date(today);
  //     currentDate.setDate(today.getDate() - i);
    
  //     const year = currentDate.getFullYear();
  //     const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  //     const day = String(currentDate.getDate()).padStart(2, '0');
    
  //     const formattedDate = `${year}-${month}-${day}`;
  //     datesArray.push(formattedDate);
  //   }
  //   console.log(dataArray)
  //   console.log(datesArray)

  //   setData(dataArray)
  //   setDates(datesArray)
  // }

  // function titleCap(inputString) {
  //   if (inputString && inputString.length > 0) {
  //     return inputString
  //       .split(' ')
  //       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //       .join(' ');
  //   } else {
  //     return inputString;
  //   }
  // }

  // function generateChartData() {
  //   const newChartData = {
  //     labels: dates.reverse(),
  //     datasets: [
  //       {
  //         label: 'Price History',
  //         fill: false,
  //         lineTension: 0.1,
  //         backgroundColor: 'rgba(75,192,192,0.4)',
  //         borderColor: 'rgba(75,192,192,1)',
  //         borderCapStyle: 'butt',
  //         borderDash: [],
  //         borderDashOffset: 0.0,
  //         borderJoinStyle: 'miter',
  //         pointBorderColor: 'rgba(75,192,192,1)',
  //         pointBackgroundColor: '#fff',
  //         pointBorderWidth: 1,
  //         pointHoverRadius: 5,
  //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //         pointHoverBorderColor: 'rgba(220,220,220,1)',
  //         pointHoverBorderWidth: 2,
  //         pointRadius: 1,
  //         pointHitRadius: 10,
  //         data: data.reverse(),
  //       },
  //     ],
  //   };
  //   setChartData(newChartData)
  //   console.log(chartData)
  // };

  // return (
  //   <div className='row' id='data-display-row'>
  //     <div className='col' id='data-display-col'>

  //     </div>
  //   </div>
  // ); 