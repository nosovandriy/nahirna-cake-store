const siteUrl = "https://nahirna-cake.com.ua/";

module.exports = {
  siteUrl: process.env.SITE_URL || siteUrl,
  generateRobotsTxt: true,
  outDir: "./out",
}