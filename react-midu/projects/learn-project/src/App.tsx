import { TwitterCard } from "./components/TwitterCard"

export function App (){

    const addAt = (username:string) => `@${username}`
    
    return (
        <section className="flex flex-col gap-3">
            <TwitterCard formatUsername={addAt} img='midudev' name="El midu" user='midudev'></TwitterCard>
            <TwitterCard formatUsername={addAt} img='sanss' name="Sanss" user='sanss'></TwitterCard>
            <TwitterCard formatUsername={addAt} img='messi' name="Messie" user='messi'></TwitterCard>
        </section>
    )
}