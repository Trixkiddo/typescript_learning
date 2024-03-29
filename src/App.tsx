import { useRef, useState } from "react";
import Message from "./Message";
import { MessagesInt } from "./model";

const App = () => {   // types acceptés        | null par défaut
  const inputMessage = useRef<HTMLInputElement | null>(null);
                      // Ce que le tableau s'attend à recevoir
  const [messData, setMessData] = useState<MessagesInt[]>([]);

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(inputMessage) {
      const mess:MessagesInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now()
      }
      setMessData((previousData) => [...previousData, mess]);
    }
    // Vider l'input à chaque envoi
    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  }

  return (
    <div>
      <h2>Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='Entrez un message'
        id='inputMessage' ref={inputMessage}/>
        <input type='submit' value='Envoyer' />
      </form>
      <h2>Liste des messages</h2>
      { <div>{messData?.map((mess) => (
        <Message mess={mess} messData={messData} setMessData={setMessData}
        key={mess.id} />
      ))}</div> }
    </div>
  );
};

export default App;
