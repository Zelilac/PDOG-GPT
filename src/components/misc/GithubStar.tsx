import Link from "next/link";
import { BsGithub } from "react-icons/bs";

type Props = {};

export default function GithubStar({}: Props) {
  return (
    <div className="flex flex-col items-center text-primary">
        <p>
        Dont forget to join our {" "}
          <Link
            href="https://t.me/proofofdogsolana"
            className="font-medium text-primary hover:underline"
          >
            Community
          </Link>
          !
        </p>
      
    </div>
  );
}
