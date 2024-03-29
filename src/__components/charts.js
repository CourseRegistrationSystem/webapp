/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420],
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

const dashboardEmailStatisticsChart = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const speedRecord = {
  data: (canvas) => {
    return {
      labels: [
        "0800",
        "0900",
        "1000",
        "1100",
        "1200",
        "1300",
        "1400",
        "1500",
        "1600",
        "1700",
      ],
      datasets: [
        {
          label: 'show',
          data: [0, 73, 55, 75, 55, 40, 55, 90, 86, 77, 50, 150],
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        // {
        //   data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        //   fill: false,
        //   borderColor: "#51CACF",
        //   backgroundColor: "transparent",
        //   pointBorderColor: "#51CACF",
        //   pointRadius: 4,
        //   pointHoverRadius: 4,
        //   pointBorderWidth: 8,
        //   tension: 0.4,
        // },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

const accelerationRecord = {
  data: (canvas) => {
    return {
      labels: [
        "0800",
        "0900",
        "1000",
        "1100",
        "1200",
        "1300",
        "1400",
        "1500",
        "1600",
        "1700",
      ],
      datasets: [
        {
          label: 'show',
          data: [0, 73, 55, 85, 45, 15, 58, 85, 100, 73, 60, 150],
          fill: false,
          borderColor: "#ef8157",
          backgroundColor: "transparent",
          pointBorderColor: "#ef8157",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        // {
        //   data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        //   fill: false,
        //   borderColor: "#51CACF",
        //   backgroundColor: "transparent",
        //   pointBorderColor: "#51CACF",
        //   pointRadius: 4,
        //   pointHoverRadius: 4,
        //   pointBorderWidth: 8,
        //   tension: 0.4,
        // },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

const analysisRecord = {
  data: (canvas) => {
    return {
      labels: [
        "0800",
        "0900",
        "1000",
        "1100",
        "1200",
        "1300",
        "1400",
        "1500",
        "1600",
        "1700",
      ],
      datasets: [
        {
          label: 'Today',
          data: [0, 73, 55, 85, 45, 15, 58, 85, 100, 73, 60, 150],
          fill: false,
          borderColor: "#ef8157",
          backgroundColor: "transparent",
          pointBorderColor: "#ef8157",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          label: '8 September 2021',
          data: [0, 0, 0, 55, 45, 40, 55, 90, 0, 0, 0, 0],
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  speedRecord,
  accelerationRecord,
  analysisRecord,
};
