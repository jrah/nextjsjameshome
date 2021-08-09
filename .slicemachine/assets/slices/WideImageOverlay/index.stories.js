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
      items: [
        {
          linkurl: { link_type: "Web", url: "http://google.com" },
          linktext: "transform leading-edge architectures",
        },
        {
          linkurl: { link_type: "Web", url: "http://twitter.com" },
          linktext: "benchmark virtual systems",
        }
      ],
      primary: {
        title: [
          {
            type: "heading1",
            text: "Evolve collaborative interfaces",
            spans: [],
          },
        ],
        description: [
          {
            type: "paragraph",
            text:
              "Laboris veniam fugiat irure ex dolore sint. Tempor eiusmod do culpa consectetur et aliqua velit magna aute sunt dolor.",
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
        backgroundcolor: "#e6e8df",
        shade: "dark",
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";
