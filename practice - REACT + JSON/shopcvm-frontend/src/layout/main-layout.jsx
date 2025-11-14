import { NavLink } from "react-router";

export default function MainLayout({className, titleColor = "white", title = "Titre", children}) {


  return <div className="w-full h-full">
            <header className="flex rounded border border-b-blue-950 justify-between items-center p-2">
                <h1 className="text-2xl" style={ {color: titleColor} }>{title ?? "Inconnu"}</h1>
                <nav>
                    <ul className={"flex flex-row m-4"}>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/game">Game</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main className={className}>
                {children}
            </main>
            <footer>

            </footer>
    
        </div>
}
