import React from "react";
import { Slider, Stack, Typography } from "@mui/material";

const SliderComponent = ({
  defaultVal,
  min,
  max,
  amount,
  label,
  unit,
  step,
  value,
  onChange
}) => {
  return (
    <Stack mt={1.2} mb={1.2}>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultVal}
        step={step}
        marks
        min={min}
        max={max}
        valueLabelDisplay="auto"
              onChange={onChange}
              value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
