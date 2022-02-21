import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";

import { database, ref, remove, update } from "../services/firebase";
import { useRoom } from "../hooks/useRoom";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";

import logoImg from "../assets/images/logo.svg";
import emptyImg from "../assets/images/empty-questions.svg";
import deleteImg from "../assets/images/delete.svg";
import checkImg from "../assets/images/check.svg";
import answerImg from "../assets/images/answer.svg";

import { Container } from "../styles/room";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  async function handleEndRoom() {
    await update(ref(database, `rooms/${roomId}`), {
      closedAt: new Date(),
    });
    navigate("/");
  }

  async function handleCheckQuestionAsAnswer(questionId: string) {
    await update(ref(database, `rooms/${roomId}/questions/${questionId}`), {
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await update(ref(database, `rooms/${roomId}/questions/${questionId}`), {
      isHighlighted: true,
    });
  }

  async function handleDeleteQuestion(questionId: string) {
    if (isOpen) {
      await remove(ref(database, `rooms/${roomId}/questions/${questionId}`));
    }
    setIsOpen(false);
  }

  return (
    <Container>
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId || ""} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        {questions.length > 0 ? (
          <div className="question-list">
            {questions.map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button
                        onClick={() => handleCheckQuestionAsAnswer(question.id)}
                      >
                        <img
                          src={checkImg}
                          alt="Marcar pergunta como respondida"
                        />
                      </button>

                      <button
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Dar destaque a pergunta" />
                      </button>
                    </>
                  )}

                  <button onClick={() => handleOpenModal()}>
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>

                  <Modal
                    isOpen={isOpen}
                    onRequestClose={handleCloseModal}
                    className="react-modal-content"
                    overlayClassName="react-modal-overlay"
                  >
                    <div className="modal-delete">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 5.99988H5H21"
                          stroke="#f11621"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                          stroke="#f11621"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <h2>Tem certeza que deseja excluir esta pergunta?</h2>
                    </div>
                    <div className="modal-button">
                      <Button className="btn-close" onClick={handleCloseModal}>
                        Cancelar
                      </Button>
                      <Button
                        className="btn-confirm"
                        onClick={() => handleDeleteQuestion(question.id)}
                      >
                        Deletar
                      </Button>
                    </div>
                  </Modal>
                </Question>
              );
            })}
          </div>
        ) : (
          <div className="empty-container">
            <img src={emptyImg} alt="Empty questions" />
            <h1 className="no-question">Sem perguntas disponíveis</h1>
          </div>
        )}
      </main>
    </Container>
  );
}

{
  /* */
}
