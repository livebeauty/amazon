import { Header } from "../components/header";
import { getSession, useSession } from "next-auth/react";
import moment from "moment";
import { db } from "../../firebase";
import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import Order from "../components/Order";







const OrdersPage = ({ orders }) => {
    const { data: session } = useSession();
    console.log(orders);
    

    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b font-bold mb-2 border-yellow-400">
                    Your Orders
                </h1>

                {session ? (
                    orders.length > 0 ? (
                        <h2>{orders.length} Orders</h2>
                    ) : (
                        <h2>No orders found</h2>
                    )
                ) : (
                    <h2>Please login to view your orders</h2>
                )}

                <div className="mt-5 space-y-4">
                    {orders.map(({ id, amount, items, timestamp, images }) => (
                        <Order
                            key={id}
                            id={id}
                            amount={amount}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default OrdersPage;

export async function getServerSideProps(context) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }

    try {
        // Reference to orders collection
        const userOrdersRef = collection(doc(collection(db, "users"), session.user.email), "orders");

        // Fetch orders in descending order by timestamp
        const q = query(userOrdersRef, orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);

        const orders = await Promise.all(
            querySnapshot.docs.map(async (order) => {
                const lineItems = await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                });

                return {
                    id: order.id,
                    amount: order.data().amount,
                    images: order.data().images,
                    timestamp: moment(order.data().timestamp.toDate()).unix(),
                    items: lineItems.data,
                };
            })
        );

        return {
            props: { orders },
        };
    } catch (error) {
        console.error("Error fetching orders:", error);
        return {
            props: { orders: [] },
        };
    }
}


