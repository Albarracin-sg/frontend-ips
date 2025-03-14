import TicketCard from '../../ticketCard/ticketCard'
import FormCard from '../../formCard/formCard'

const NewTurn = () => {
	return (
		<div className="flex justify-center items-center min-h-screen w-full">
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-7xl px-4 py-8">
				<div className="w-full md:w-1/2 flex justify-center">
					<FormCard modo="op" />
				</div>
				<div className="w-full md:w-1/2 flex justify-center">
					<TicketCard />
				</div>
			</div>
		</div>
	)
}

export default NewTurn
