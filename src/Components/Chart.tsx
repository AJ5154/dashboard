import { Typography } from "@mui/material";
import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
  LineChart,
  Line,
} from "recharts";
import { useTheme } from "@mui/material/styles";

const createData = (time: string, amount?: number) => {
  return { time, amount };
};

const data = [
  createData("00.00", 1289),
  createData("04.00", 13489),
  createData("08.00", 14589),
  createData("12.00", 15689),
  createData("16.00", 16789),
  createData("20.00", 18989),
  createData("24.00", 19989),
  createData("24.00", undefined),
];
const Chart = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Typography variant="h5" color="primary">
        Today
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Chart;
