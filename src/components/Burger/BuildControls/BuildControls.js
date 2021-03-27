import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

const buildControls = (props) => (
  <div className="BuildControls">
    <p>
      Current Price : <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map((crtl) => (
      <BuildControl
        key={crtl.label}
        label={crtl.label}
        added={() => props.ingredientAdded(crtl.type)}
        deducted={() => props.ingredientDeducted(crtl.type)}
        disabled={props.disabled[crtl.type]}
      />
    ))}
    <button className="OrderButton" disabled={!props.purchaseable}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
