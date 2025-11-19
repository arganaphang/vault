import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<main className="w-full min-h-screen grid place-content-center">
			<h1>Hello World</h1>
		</main>
	</StrictMode>,
);
