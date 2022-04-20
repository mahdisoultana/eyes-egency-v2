const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["draniss.ma", "dranis.ma", "dummyimage.com", "images.pexels.com"],
  },
  ignoreDuringBuilds: true,
  env: {
    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: 2525,

    SMTP_USER: "bdf42b01c97154",
    SMTP_PASSWORD: "02ba322bdaff88",
    STMP_FROM_NAME: "MAHDI SOULTANA",
    STMP_FROM_EMAIL: "soultana.mahdi26@gmail.com",
    EMAIL_USER: "soultana.mahdi26@gmail.com",
    PASS: "Helalaboys00",
  },
});
