import { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { MemberType } from "@/types/MemberType";

export const AddButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit } = useForm<MemberType>();
  const [membersName, setMembersName] = useState<string[]>([]);
  const onSubmit = (data: MemberType) => {
    setMembersName([...membersName, data.name]);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <button onClick={openModal}>追加</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h1>こんにちは！</h1>
        <p>メンバー登録</p>
        <p>※2〜7人まで</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <input
              type="text"
              className="bg-gray-300"
              id="addMembers"
              {...register("name")}
            />
            <button type="submit">追加</button>
          </div>
        </form>

        <ul>
          {membersName.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

        <button onClick={closeModal}>閉じる</button>
      </Modal>
    </>
  );
};
