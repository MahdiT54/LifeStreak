import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import Apple from "../assets/appleimage.png";
import Shoe from "../assets/shoe.png";
import Sleep from "../assets/sleep.png";
import Therapy from "../assets/Therapy.png";
import FireEmoji from "../assets/fireemoji.png";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Graph = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [totalSaved, setTotalSaved] = useState(0);

  const [data, setData] = useState([1, 3, 3, 2, 5, 1, 2, 5, 1, 2, 3, 2, 1, 1]);

  const [diet, setDiet] = useState([]);

  const handleDietClick = () => {
    setData([...data, 3]);
    setDiet([...diet,3]);
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create gradient


    // Create a new array where each element is the sum of all previous elements
    const cumulativeData = data.map(
      (
        (sum) => (value) =>
          (sum += value)
      )(0)
    ); // start from $400
    const total = data.reduce((a, b) => a + b, 0);
    setTotalSaved(total);

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan 15",
          "Feb 20",
          "Mar 25",
          "Apr 30",
          "May 5",
          "Jun 10",
          "Jul 15",
          "Aug 20",
          "Sep 25",
          "Oct 30",
          "Nov 5",
          "Dec 10",
          "Jan 28",
          "Jan 28",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: cumulativeData,
            borderColor: "rgba(94, 80, 251, 1)", // Line color
            pointBackgroundColor: "rgba(94, 80, 251, 1)", // Point color
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(94, 80, 251, 1)",
            fill: true,
            backgroundColor: "rgba(94, 80, 251, 0.1)", // Area color;
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (context.raw !== null) {
                  label += data[context.dataIndex];
                }
                return label;
              },
            },
          },
        },
        interaction: {
          mode: "nearest",
          intersect: false,
          axis: "x",
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Cumulative Earnings",
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            beginAtZero: true,
            display: false,
          },
        },
        elements: {
          line: {
            borderWidth: 4,
          },
          point: {
            radius: 6,
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, diet]);

  return (
    <>
      <div className="saved">${totalSaved}</div>
      <div className="saved__text">Here’s how much you saved</div>
      <div className="myChart__container">
        <canvas id="myChart" ref={chartRef}></canvas>
      </div>

      <div className="categories__section">
        <div className="categories__top">
          <div className="categories__text">CATEGORIES</div>
          {/* <a href="/"> */}
          <div className="see-more">see more {">"}</div>
          {/* </a> */}
        </div>
        <div className="categories__circles">
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Apple} alt="" />
            </div>
            <div className="category__value">${diet.reduce((a, b) => a + b, 0)}</div>
          </div>
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Shoe} alt="" />
            </div>
            <div className="category__value">$10</div>
          </div>
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Therapy} alt="" />
            </div>
            <div className="category__value">$10</div>
          </div>
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Sleep} alt="" />
            </div>
            <div className="category__value">$5</div>
          </div>
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Apple} alt="" />
            </div>
            <div className="category__value">$0</div>
          </div>
        </div>
      </div>

      <div className="streaks__box">
        <h3 className="streaks__box--title">STREAKS</h3>
        <div className="streaks__box--outer">
          <div className="streak" onClick={handleDietClick}>
            <div className="streak__title">DIET</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 120</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">900</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">MOVEMENT</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 70</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">350</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">MENTAL HEALTH</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 60</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">300</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">SLEEP</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 100</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">700</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">HYDRATION</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 40</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">200</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">SOCIAL</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 40</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">200</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;

// <figure className="graph__image">
//   <img src={GraphImage} alt="graph" />
// </figure>
