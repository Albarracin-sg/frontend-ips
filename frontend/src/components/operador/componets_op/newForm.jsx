import TicketCard from '../../ticketCard/ticketCard';
import FormCard from '../../formCard/formCard';

const NewTurn = () => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-gray-50">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-7xl ">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full ">
                        <FormCard modo="op" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-md">
                        <TicketCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTurn;