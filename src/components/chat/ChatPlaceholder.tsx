import React from "react";
import AddTokenModal from "./../auth/AddTokenModal";
import Link from "next/link";
import GithubStar from "./../misc/GithubStar";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">PDOG-GPT Playground</h1>
        <p className="mt-4 text-lg">
        PDOG chatbot will engage users, answer questions about the Solana ecosystem, and share updates on the PDOG token. It will embody the characteristics of a loyal canine companion, 
        always ready to assist and inform its human friends.
        </p>
        <div className="m-4 flex items-center justify-center">
          <AddTokenModal />
        </div>
        <p className="mt-4 text-lg">
          Want more freedom? Check out the{" "}
          <Link
            href="/playground"
            className="font-medium text-primary hover:underline"
          >
            Playground
          </Link>
          !
        </p>

        <div className="p-4">
          <GithubStar />
        </div>
      </div>
    </div>
  );
}
