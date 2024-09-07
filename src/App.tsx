import { Basic } from "./tester/basic/Basic";
import { Fetch } from "./tester/fetch/Fetch";
import { Practice } from "./tester/practice/Practice";
import { Person } from "./tester/props/Props";
import { Counter } from "./tester/state/State";
import { Sundae } from "./tester/sundae/sundae-starter/Sundae";

export const App = () => {
  return (
    <div>
      {/* <Basic />
      <Person />
      <Counter />
      <Fetch />
      <Practice /> */}
      <Sundae />
    </div>
  );
};
