import type { NextPage } from "next";
import Modal from "../components/Modal";
import Timeline from "../components/Timeline";
import useModal from "../hooks/useModal";

const Home: NextPage = () => {
  const { isOpen, toggle } = useModal();

  return (
    <div>
      <button onClick={toggle}>Open Modal </button>
      <Timeline />
      <Modal isOpen={isOpen} toggle={toggle}></Modal>
    </div>
  );
};

export default Home;
