import React from "react";

import Button from "./Button";

export default {
  title: "Micro/Button",
  component: Button,
};

export const DefaultButton = () => (
  <Button
    data={{
      linkurl: {
        link_type: "Web",
        url: "http://google.com",
      },
    }}
  >
    Default button
  </Button>
);
export const PrimaryButton = () => (
  <Button
    type="primary"
    data={{
      linkurl: {
        link_type: "Web",
        url: "http://google.com",
      },
    }}
  >
    Primary button
  </Button>
);
export const AlternateButton = () => (
  <Button
    type="alternate"
    data={{
      linkurl: {
        link_type: "Web",
        url: "http://google.com",
      },
    }}
    outline
  >
    Primary button{" "}
    <svg
      class="w-6 h-6 ml-2 -mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      ></path>
    </svg>
  </Button>
);
