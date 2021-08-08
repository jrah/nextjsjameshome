import React from "react";

import  Button from "./Button";

export default {
  title: "Micro/Button",
  component: Button
};

export const DefaultButton = () => <Button>Default button</Button>
export const PrimaryButton = () => <Button type="primary">Primary button</Button>

