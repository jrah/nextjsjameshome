import React from "react";

import  Navigation from "./Navigation";

export default {
  title: "Macro/Navigation",
  component: Navigation
};

export const DefaultNavigation = () => <Navigation items={[{text: 'Products'}, {text: 'Company'}, {text: 'Help'}]}>Hello</Navigation>
