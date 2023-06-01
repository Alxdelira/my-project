import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import classNames from 'classnames';
import styles from './Dashboard.module.scss';

const SalesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Vendas',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(93, 5, 88, 0.2)',
            borderColor: '#7517d3',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

const UsersChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Usuários',
            data: [8, 12, 5, 10, 6, 9],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

const CitiesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Cidade A', 'Cidade B', 'Cidade C', 'Cidade D', 'Cidade E'],
        datasets: [
          {
            label: 'População',
            data: [500000, 300000, 450000, 600000, 400000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuClick = (option) => {
    setSelectedOption(option);
  };

  const renderChart = () => {
    switch (selectedOption) {
      case 'vendas':
        return <SalesChart />;
      case 'usuarios':
        return <UsersChart />;
      case 'cidades':
        return <CitiesChart />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const chartElements = document.querySelectorAll('canvas');
      chartElements.forEach((chartElement) => {
        const chartInstance = Chart.getChart(chartElement);
        if (chartInstance) {
          chartInstance.resize();
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <ul className={styles.menu}>
        <li
          className={classNames(styles.menuItem, { [styles.active]: selectedOption === 'vendas' })}
          onClick={() => handleMenuClick('vendas')}
        >
          Vendas
        </li>
        <li
          className={classNames(styles.menuItem, { [styles.active]: selectedOption === 'usuarios' })}
          onClick={() => handleMenuClick('usuarios')}
        >
          Usuários
        </li>
        <li
          className={classNames(styles.menuItem, { [styles.active]: selectedOption === 'cidades' })}
          onClick={() => handleMenuClick('cidades')}
        >
          Cidades
        </li>
      </ul>
      <div className={styles.chartContainer}>{renderChart()}</div>
    </div>
  );
};

export default Dashboard;
