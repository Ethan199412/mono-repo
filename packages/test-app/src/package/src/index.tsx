import * as React from "react";
import { useState } from "react";

interface IProps {
  num: number;
}
export function Test(props: IProps) {
  const [gender, setGender] = useState("male");
  return <div>{props.num}
    <div>{gender}</div>
  </div>;
}
