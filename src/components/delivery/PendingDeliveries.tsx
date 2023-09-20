import DeliveryItem from './DeliveryItem'
import triangle from '../../assets/triangle.svg'

const PendingDeliveries = (): JSX.Element => {
	return (
		<div className="bg-white-fd w-5/6 self-center mt-4 p-4 text-blue-fd flex flex-col rounded-xl">
			<div className="flex flex-row justify-between">
				<span className="font-bold">Repartos pendientes</span>
				<img src={triangle} alt="triangle" className="w-[9px]" />
			</div>
			<DeliveryItem />
		</div>
	)
}

export default PendingDeliveries
