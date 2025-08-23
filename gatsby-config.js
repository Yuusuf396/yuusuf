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
        icon: "src/images/icon.png"
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
