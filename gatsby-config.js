module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "CSC496Testing",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://csc496wordpress.tldr.dev/graphql`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false
      }
    },
  ]
}