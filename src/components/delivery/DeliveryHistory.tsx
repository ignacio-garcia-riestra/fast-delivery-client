import DeliveryItem from './DeliveryItem'
import triangle from '../../assets/triangle.svg'

const DeliveryHistory = (): JSX.Element => {
	return (
		<div className="bg-white-fd w-5/6 self-center mt-4 p-4 text-blue-fd flex flex-col rounded-xl">
			<div className="flex flex-row justify-between">
				<div className="flex flex-col">
					<span className="font-bold">Historial de repartos</span>
					<span className="mt-1">58 paquetes entregados</span>
				</div>
				<img
					src={triangle}
					alt="triangle"
					className="w-[9px] self-start mt-2.5"
				/>
			</div>
			<DeliveryItem />
			<DeliveryItem />
			<DeliveryItem />
		</div>
	)
}

export default DeliveryHistory
