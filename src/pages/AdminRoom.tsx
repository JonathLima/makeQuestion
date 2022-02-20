import { useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import { useRoom } from "../hooks/useRoom";

import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";

import logoImg from "../assets/images/logo.svg";
import emptyImg from "../assets/images/empty-questions.svg";
import deleteImg from "../assets/images/delete.svg";

import "../styles/room.scss";
import { database, ref, remove } from "../services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const [isOpen, setIsOpen] = useState(false);
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  async function handleDeleteQuestion(questionId: string) {
    await remove(ref(database, `rooms/${roomId}/questions/${questionId}`));
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId || ""} />
            <Button isOutlined>Encerrar Sala</Button>
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
                >
                  <button onClick={() => handleOpenModal()}>
                    <img src={deleteImg} alt="Remove question" />
                  </button>

                  <Modal
                    isOpen={isOpen}
                    onRequestClose={handleCloseModal}
                    className="react-modal-content"
                    overlayClassName="react-modal-overlay"
                  >
                    <h2>Tem certeza que deseja excluir esta pergunta?</h2>
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
            <h1 className="no-question">Ainda não tem perguntas</h1>
          </div>
        )}
      </main>
    </div>
  );
}

{
  /* */
}
