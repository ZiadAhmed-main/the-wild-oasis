import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
  const urlParam = useParams();
  const bookingId = urlParam.id;

  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getBooking(bookingId),
    queryKey: ["booking", bookingId],
    retry: false,
  });

  return { booking, isLoading, error };
}

export default useBooking;
