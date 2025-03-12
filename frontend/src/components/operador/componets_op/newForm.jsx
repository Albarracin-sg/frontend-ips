import TicketCard from '../../ticketCard/ticketCard'
import FormCard from '../../formCard/formCard'

const NewTurn = () => {
	return (
		<div className="flex justify-evenly p-10">
			<div className="flex-1 flex justify-center">
				<FormCard modo="op" />
			</div>
			<div className="flex-1 flex justify-center">
				<TicketCard />
			</div>
		</div>
	)
}

export default NewTurn
