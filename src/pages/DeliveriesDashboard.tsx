import DeliveryHistory from "../components/delivery/DeliveryHistory";
import PendingDeliveries from "../components/delivery/PendingDeliveries";
import Layout from "../components/layout/Layout";

const DeliveriesDashboard = (): JSX.Element => {

  return (
    <Layout>
      <PendingDeliveries />
      <DeliveryHistory />
    </Layout>
  )
}

export default DeliveriesDashboard;