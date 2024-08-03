import { Basic } from "./tester/basic/Basic";
import { Person } from "./tester/props/Props";
import { Counter } from "./tester/state/State";

export const App = () => {
  return (
    <div>
      <Basic />
      <Person />
      <Counter />
    </div>
  );
};
