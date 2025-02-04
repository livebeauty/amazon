import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permission.json");


// Secure a connection to FIREBASE from the the backend
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

  // console.log(app);
  

// Establish a connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fullfillOrder = async (session) => {
    return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
       amount: session.amount_total / 100,
       images: JSON.parse(session.metadata.images),
       timestamp: admin.firestore.FieldValue.serverTimestamp(),
     }).then(() => {
        console.log(`SUCCESS Order ${session.id} had been added to the DB`);
     });
};

console.log(fullfillOrder);


export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.error(`Error with webhook: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

  
        // Fullfill the order
        await fullfillOrder(session).then(() => res.status(200))
        .catch ((err) => res.status(400).send(`Webhook error: ${err.message}`))
  }
    }}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
