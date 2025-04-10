import "./Quote.css";
import { quotes } from "./quotes";

const Quote = () => {
  const randIdx = Math.round(Math.random() * (quotes.length - 1));
  const quote = quotes[randIdx];
  return <p className="quote">"{quote}"</p>;
};

export default Quote;
