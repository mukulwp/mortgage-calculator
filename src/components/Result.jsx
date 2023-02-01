import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Stack, Typography } from "@mui/material";
import { round } from "lodash";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data, setData }) => {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;

  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 / (1 + monthlyInterestRate), numberOfPayments));

  const totalInterestedGenerated =
    monthlyPayment * numberOfPayments - loanAmount;

  const pieChartdata = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestedGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Stack>
        <Typography
          align="center"
          variant="h5"
          component="h3"
          sx={{ marginBottom: "1rem" }}
        >
          Monthly Payment: $ {round(monthlyPayment, 2)}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartdata} />
        </div>
      </Stack>
    </>
  );
};

export default Result;
