"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
    const router = useRouter();

    const deleteTicket = async () => {
        const res = await fetch(
            `http://ticket-app-liard.vercel.app/api/Tickets/${id}`,
            {
                method: "DELETE",
            }
        );
        console.log(res, "response");
        if (res.ok) {
            router.refresh();
        }
    };

    return (
        <FontAwesomeIcon
            icon={faX}
            className="text-red-400 hover:cursor-pointer hover:text-red-200"
            onClick={deleteTicket}
        />
    );
};

export default DeleteBlock;
