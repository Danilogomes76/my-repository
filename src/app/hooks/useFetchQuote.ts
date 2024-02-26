import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch(
    "https://api.quotable.io/quotes/random?tags=technology"
  );
  const quoteRes = await response.json();
  return quoteRes;
};

const useFetchQuote = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["get-message"],
  });

  return query;
};

export { useFetchQuote, fetchData };
