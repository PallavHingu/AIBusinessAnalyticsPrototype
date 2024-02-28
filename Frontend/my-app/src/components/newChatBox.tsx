import { FunctionComponent, useContext, useEffect, useRef, useState } from "react"
import "./newChatBox.css"
import userAvatar from "../static/userAvatar.png"
import aiAvatar from "../static/aiAvatar.png"
import sendMsgBtn from "../static/sendMsgBtn.png"
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { DataState } from "../helper/dataReducer"



const NewChatBox = () => {
    const bottomRef = useRef(null);
    const [userInput, setUserInput] = useState("")
    const [disableInput, setDisableInput] = useState(false)
    const [chats, setChats] = useState([]);
    const navigate = useNavigate();
    const data1 = useSelector<DataState, DataState>((state) => state)
    const dispatch = useDispatch()
    const updateData = (data:object) => {
        dispatch({type: "UPDATE_DATA", payload: data})
    }
    // const intContext = useContext(IntegrationsContext)


    const submitMessage = async (e) => {
        e.preventDefault();

        if (userInput.length == 0) {
            return
        }
        setDisableInput(true)

        setChats([
            ...chats,
            {
                user: true,
                message: userInput
            },
            {
                user: false,
                message: " . . . "
            }
        ])
        setUserInput("")


        const toSend = {conversation: [...chats, {user:true, message: userInput}], data: data1}
        console.log("this is what im sending:", toSend)
        
        // const response = await fetch('https://chat-backend-dev-3yhr4scqda-ue.a.run.app/api/chat', {
        //     mode:'cors',
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(toSend),
        // });

        const response = await fetch('http://localhost:8000/api/chat', {
            mode:'cors',
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(toSend),
        });
        const r = await response.json();
        console.log(r);
        
        updateData(r["data"]);
        console.log("data", data1);

        setChats(r["conversation"])
        setDisableInput(false)
    }

    // function timeout(delay: number) {
    //     return new Promise( res => setTimeout(res, delay) );
    // }

    useEffect(() => {
        async function delay() {
            await timeout(3000);
        }

        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});

        // redirect to dashboard if the end of chat is reached
        if (chats.length > 1) {
            if (chats[chats.length - 1].hasOwnProperty("end")) {
                if (chats[chats.length - 1]["end"] == true) {
                    console.log("end of chat reached, redirecting");
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                    
                }
            }
        }
        
      }, [chats]);

    useEffect(() => {
        const getFirstTime = async () => {
            console.log("useeffect")
            const response = await fetch('https://chat-backend-dev-3yhr4scqda-ue.a.run.app/api/chat', {
                mode:'cors',
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({conversation: [], data: {}}),
            });
            const r = await response.json();
            console.log(r);

            setChats(r["conversation"])
        }
        getFirstTime();
    }, [])


    return (
        <div className="chatBoxUI">
            {/* <div className="chatBoxHeader">Chat</div> */}
            <div className="chatBoxContentContainer">
                <div className="chatBoxContent">

                    {chats.map((chat, index) => {
                        return (
                            <div>                                
                                {chat.user 
                                ? 
                                <div className="chatBoxMessageContainer">         
                                    <img className="userIcon" src={userAvatar}/>
                                    <div className="chatBoxMessageUser">
                                        {chat.message}
                                    </div>
                                </div>
                                : 
                                <div className="chatBoxMessageContainer">         
                                    <img className="userIcon" src={aiAvatar}/>
                                    <div className="chatBoxMessageAI">
                                        {chat.message.split("<br>").map(str => <p>{str}</p>)}
                                    </div>
                                </div>
                                }
                            </div>
                        )
                    })}
                <div ref={bottomRef}></div>
                
                </div>
            </div>
            <form className="chatBoxInputBox" onSubmit={submitMessage}>
                <input disabled={disableInput} type="text" id="userIn" name="userIn" placeholder="Send a message" onChange={e => setUserInput(e.target.value)} value={userInput} autocomplete="off"/>
                <button disabled={disableInput} id="submitUserIn" name="submitUserIn"> 
                    {userInput.length == 0 ?
                    <img className="sendButtonImg bandw" src={sendMsgBtn}/>
                    :
                    <img className="sendButtonImg" src={sendMsgBtn}/>
                    }
                </button>
            </form>
        </div>
    )
}

export default NewChatBox;