import { MessagesInt } from "./model";

// Typage du props
type Props = {
  mess: MessagesInt;
  messData: MessagesInt[];
  setMessData: React.Dispatch<React.SetStateAction<MessagesInt[]>>
}
                  // Props   // Rappel typage défini ci-dessus
const Message = ({ mess, messData, setMessData }: Props) => {

  const dateFormater = (date: number) => {
    return new Date(date).toLocaleDateString("fr-FR", {day: "numeric",
    month: "long"})
  }

  const handleDelete = () => {
    setMessData(messData.filter((element) => element.id !== mess.id))
  }

  return (
    <div className="message-container">
      <p>{mess.message}</p> {/* On récupère la valeur de l'objet mess */}
      <h5>{dateFormater(mess.date)}</h5>
      <span id="delete" onClick={() => handleDelete()}>&#x274C;</span>
    </div>
  );
};

export default Message;
