// > hooks
import { useId, useRef } from 'react';
// > css
import S from './ChatWindow.module.css';
// > prop-types
import { exact, string, bool, func, arrayOf } from 'prop-types';
const MessageType = exact({
  id: string.isRequired,
  message: string.isRequired,
  isMe: bool.isRequired,
});
const MessageListType = arrayOf(MessageType);
ChatWindow.propTypes = {
  messages: MessageListType,
  onAddMessage: func
};

function ChatWindow({ messages, onAddMessage }) {
  const id = useId();
  const textareaRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let newMessage = formData.get('message');
    newMessage = newMessage.trim();

    if(newMessage.length <= 0){
      alert('메세지 내용을 입력해주세요.');
      textareaRef.current.select();
    }

    onAddMessage?.(newMessage)
  }

  return (
    <section className={S.component}>
      <h2 className="sr-only">채팅 화면</h2>

      <ol className={S.chats}>
        {/* <li className={S.chat}>
          오늘 저녁에 뭐 먹을까?
        </li>
        <li className={`${S.chat} ${S.me}`}>
          오늘? 저녁에? 뭐 먹지?
        </li>
        <li className={S.chat}>
          치킨 먹을까? 🐓 🍗 어때?
        </li>
        <li className={`${S.chat} ${S.me}`}>
          치킨? 뭐 매일 치킨이야? 난 싫어.
        </li>
        <li className={S.chat}>
          그럼 짜장에 탕수육 어때?
        </li>
        <li className={`${S.chat} ${S.me}`}>
          별로... 하아 좀 맛있는 거 없나? 그냥 회 먹자. 알았지?
        </li>
        <li className={S.chat}>
          음.... 그래. 알았어.
        </li>
        <li className={`${S.chat} ${S.me}`}>
          좋아! 좀 있다 사가정역 2번 출구에서 만나~ 😃 
        </li> */}
        {
          messages.map(({ id, message, isMe }) => {
            const classNames = `${S.chat} ${isMe ? S.me : ''}`.trim();
            return (
              <li key={id} className={classNames}>
                {message}
              </li>
            );
          })
        }
      </ol>

      <form className={S.form} onSubmit={handleSendMessage}>
        <div className={S.messageBox}>
          <label htmlFor={id} className="sr-only">
            메시지 입력
          </label>
          <textarea id={id} name="message" ref={textareaRef} />
        </div>
        <button type="submit">보내기</button>
      </form>
    </section>
  );
}

export default ChatWindow;
