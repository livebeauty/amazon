

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { items, email } = req.body;

    // console.log(items);
    

    const transformedItems = items.map((item) => ({
      quantity: 1,
      price_data: {
        currency: 'USD',
        unit_amount: item.price * 100, 
        product_data: {
          name: item.title,
          description: item.description,
          images: item.image ? [item.image] : [],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: transformedItems,
      mode: 'payment',
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      customer_email: email,
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    });

    // console.log(session);
    

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: error.message });
  }
}
