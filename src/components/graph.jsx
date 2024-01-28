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

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create gradient

    // Original data
    const data = [65, 59, 80, 81, 200, 55, 40, 500, 59, 80, 301, 56, 100, 500];

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
  }, []);

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
            <div className="category__value">$4,800</div>
          </div>
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Shoe} alt="" />
            </div>
            <div className="category__value">$2,700</div>
          </div>
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Therapy} alt="" />
            </div>
            <div className="category__value">$250</div>
          </div>
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Sleep} alt="" />
            </div>
            <div className="category__value">$150</div>
          </div>
          <div className="category">
            <div className="category__inner">
              <img className="category__img" src={Apple} alt="" />
            </div>
            <div className="category__value">$100</div>
          </div>
        </div>
      </div>

      <div className="streaks__box">
        <h3 className="streaks__box--title">STREAKS</h3>
        <div className="streaks__box--outer">
          <div className="streak">
            <div className="streak__title">DIET</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 120</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">650</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">MOVEMENT</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 120</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">650</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">SLEEP</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 120</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">650</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">HYDRATION</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 120</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">650</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">MENTAL HEALTH</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 120</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">650</div>
              <figure className="streak__points--emoji">
                <img src={FireEmoji} alt="" />
              </figure>
            </div>
          </div>
          <div className="streak">
            <div className="streak__title">SOCIAL</div>
            <div className="streak__meter--outer">
              <div className="streak__meter"></div>
              <div className="streak__meter--level">LVL 120</div>
            </div>
            <div className="streak__points">
              <div className="streak__points--value">650</div>
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
