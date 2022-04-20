// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { SendEmail, ReqSendMail } = require("../../utils/gmailSend");
import nc from "next-connect";
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
}).post(async (req, res) => {
  try {
    switch (req.body.type) {
      case "subscribe": {
        await ReqSendMail(
          { ...req.body, subject: "New Subscriber" },
          true,
          true,
        ).then(() =>
          res.json({ success: "vous êtes Subscriber avec Dr.Draniss" }),
        );
        break;
      }
      case "contact": {
        await ReqSendMail(req.body)
          .then(() =>
            ReqSendMail(
              { ...req.body, subject: "Nouveau Client" },
              true,
              false,
            ),
          )
          .then(() => res.json({ success: "Email Envoyez Check Your Box" }));
        break;
      }
      default:
        throw new Error("case not handel from contact api");
    }
  } catch (e) {
    res.json({ error: e.message });
  }
});

export default handler;
