import DeliveryHistory from '../components/delivery/DeliveryHistory'
import PendingDeliveries from '../components/delivery/PendingDeliveries'
import Layout from '../components/layout/Layout'

const DeliveriesDashboard = (): JSX.Element => {
	return (
		<Layout>
			<PendingDeliveries />
			<DeliveryHistory />
			<div className="bg-green-fd w-9/12 h-[30px] pt-0.5 place-self-center mt-4 text-center text-blue-fd rounded-2xl">
        Obtener paquetes
			</div>
		</Layout>
	)
}

export default DeliveriesDashboard
