import SliderComponent from "./Common/Slider";

const SliderSelect = ({data, setData}) => {

  const bankLimit = 10000;
  return (
    <>
      <SliderComponent
        defaultVal={data.homeValue}
        min={1000}
        max={bankLimit}
        label="Home Value"
        amount={data.homeValue}
        unit="$"
        step={50}
        value={data.homeValue}
        onChange={(e, value) =>
          setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
          })
        }
      />
      <SliderComponent
        defaultVal={data.downPayment}
        min={200}
        max={data.homeValue}
        label="Down Payment"
        amount={data.downPayment}
        unit="$"
        step={50}
        value={data.downPayment}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value,
          })
        }
      />
      <SliderComponent
        defaultVal={data.loanAmount}
        min={800}
        max={data.homeValue}
        label="Loan Amount"
        amount={data.loanAmount}
        unit="$"
        step={50}
        value={data.loanAmount}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value,
          })
        }
      />
      <SliderComponent
        defaultVal={data.interestRate}
        min={2}
        max={18}
        label="Interest Rate"
        amount={data.interestRate}
        unit="%"
        step={0.5}
        value={data.interestRate}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
      />
    </>
  );
};

export default SliderSelect;
