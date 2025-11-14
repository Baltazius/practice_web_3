import { useState } from "react";
import Token from "../components/token";
import MainLayout from "../layout/main-layout";

export default function Game() {
    const [tokens, setTokens] = useState({
        0:["T1", "T2", "T3"],
        1:[],
        2:[]
    });

    return  <MainLayout className="h-screen w-sreen flex" title="Game" titleColor="green">
                <div className="pos-0 bg-amber-400 w-1/3 h-full flex flex-col justify-center items-center">
                    {
                        tokens[0].map((token) => {
                            return <Token text={token}/>
                        })
                    }
                </div>
                <div className="pos-1 bg-rose-100 w-1/3 h-full">
                    {
                        tokens[1].map((token) => {
                            return <Token text={token}/>
                        })
                    }
                </div>
                <div className="pos-2 bg-blue-300 w-1/3 h-full">
                    {
                        tokens[2].map((token) => {
                            return <Token text={token}/>
                        })
                    }
                </div>
            </MainLayout>
}