import FormCardOP from '../../formCard/formCardOp'
import TicketCard from '../../ticketCard/ticketCard'

const NewTurn = () => {
	return (
		<div className="flex justify-evenly p-10">
			<div className="flex-1 flex justify-center">
				<FormCardOP />
			</div>
			<div className="flex-1 flex justify-center">
				<TicketCard />
			</div>
		</div>
	)
}

export default NewTurn
