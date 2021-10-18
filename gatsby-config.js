module.exports = {
    siteMetadata: {
        title: "Quarkly gatsby project",
        description: "",
        author: "@Andrey Zhuravlyov",
        siteUrl: "https://example.com"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-resolve-src",
        "gatsby-plugin-meta-redirect",
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                output: "/"
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // "gatsby-plugin-offline",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`, // Needed for dynamic images
    ],
};
