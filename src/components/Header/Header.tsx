import reactImg from '../../assets/react-core-concepts.png';
import { getRandomInt } from "../../../src/common/utils";
import './Header.css';
const reactDescriptions: string[] = ["Fundamental", "Crucial", "Core"];

export const Header = () => {
  const randomInt = getRandomInt(reactDescriptions.length - 1);
  const description = reactDescriptions[randomInt];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}