import { GithubIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <section
      id="footer"
      className="fixed bottom-0 left-0 z-10 w-full bg-background"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4">
        <p className="text-gray-600">TODO: REMIX.</p>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/vanirvan/todo-remix"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/van_irvan678"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
