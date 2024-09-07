import { useEffect, useState } from "react";
import { ScoopOption } from "./ScoopOption";
import axios from "axios";
import Row from "react-bootstrap/Row";

export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3030/${optionType}`);
      setItems(response.data);
    };

    fetchData();
  }, [optionType]);

  console.log(items);
  const ItemComponent = optionType === "scoops" ? ScoopOption : ScoopOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};
