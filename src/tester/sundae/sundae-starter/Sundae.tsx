import { Options } from "./pages/entry/Options";
import { SummaryForm } from "./pages/summary/SummaryForm";

export const Sundae = () => {
  return (
    <div>
      <SummaryForm />
      <Options optionType="scoops" />
    </div>
  );
};
