import MyComponent from "../../../../slices/WideImageOverlay";

export default {
  title: "slices/WideImageOverlay",
};

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "wide_image_overlay",
      items: [],
      primary: {
        title: [
          { type: "heading1", text: "Optimize robust web services", spans: [] },
        ],
        description: [
          {
            type: "paragraph",
            text:
              "Qui irure eiusmod do elit ea excepteur magna fugiat sit. Veniam cillum laboris adipisicing irure minim sit aute fugiat cillum mollit pariatur. Commodo adipisicing ipsum quis irure aute laboris id anim elit eiusmod magna.",
            spans: [],
          },
          {
            type: "paragraph",
            text:
              "Dolore proident nostrud dolor amet magna. Ullamco fugiat tempor ullamco proident eiusmod tempor officia et anim nostrud.",
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url:
            "https://jameshome.cdn.prismic.io/jameshome/71b19ee2-626b-41a3-992b-93b3a5e0f745_drawkit-daily-life-vector-illustration-02.svg?w=900&h=500&fit=crop",
        },
        backgroundcolor: "#697689",
        shade: "light",
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";
