import { DocumentData } from "firebase/firestore"

type Props = {
    message: DocumentData
}

const Message = ({message}: Props) => {
    const isMyGpt = message?.user?.name === "myGpt"
  return (
    <div className={`py-5 text-gray-800 ${isMyGpt && 'bg-gray-200'}`}>
        <div className="flex space-x-5 px-10 max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
            <img src={message?.user?.avatar} alt="user pic" className="h-8 w-8 bg-gray-600 rounded-lg"/>
            <p className="PT-1 text-sm">{message?.text}</p>
        </div>
    </div>
  )
}

export default Message