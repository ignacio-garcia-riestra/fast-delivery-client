import pack from '../../assets/pack.svg'
import trashcan from '../../assets/trashcan.svg'
import verticalLine from '../../assets/vertical-line.png'

export default function DeliveryItem(): JSX.Element {
	return (
		<div className="flex flex-row h-20 border-[1px] mt-2.5 border-blue-fd rounded-[10px] py-3 text-xs">
			<div className="flex flex-row w-[15%]">
				<img src={pack} alt="pack" />
				<img src={verticalLine} alt="line" />
			</div>
			<div className="flex flex-col w-[85%] mx-2.5">
				<div className="flex flex-row font-semibold justify-between">
					<span>#0A235</span>
					<div className="bg-[#F8E169] text-[10px] rounded-[20px] px-2.5 pt-0.5 text-center">
            EN CURSO
					</div>
				</div>
				<div className="flex flex-row justify-between">
					<span className="font-normal mt-1 w-1/2">Amenabar 2356, CABA</span>
					<img src={trashcan} alt="trashcan" className="w-5 mt-4" />
				</div>
			</div>
		</div>
	)
}
