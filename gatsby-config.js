module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Yuusuf Adebayo",
        short_name: "Yuusuf Adebayo",
        start_url: "/",
        background_color: "#1b1b1d",
        theme_color: "#1b1b1d",
        display: "minimal-ui",
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en-US",
      },
    },
  ],
};
