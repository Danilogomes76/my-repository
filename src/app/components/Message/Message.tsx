"use client";

import { useFetchQuote } from "@/app/hooks/useFetchQuote";

const Message: React.FC = () => {
  // const [quote, setQuote] = useState<QuoteProps>({ quote: "", author: "" });
  const { data, isLoading } = useFetchQuote();

  return (
    <section className="flex justify-center flex-col text-my_white w-full">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <p className="border flex justify-center w-full p-8 text-center">
            {data[0]?.content ||
              ' "Na programação, assim como na vida, a persistência é a chave para o sucesso."'}
          </p>
          <p className="text-end border p-4 self-end w-">
            {data[0]?.author || "- Elie Tahari"}
          </p>
        </>
      )}
    </section>
  );
};

export default Message;
