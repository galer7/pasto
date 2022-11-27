import useModal from "../hooks/useModal";
import Modal from "./Modal";

export default function AddEventModal() {
  const { isOpen, toggle } = useModal();

  <Modal isOpen={isOpen} toggle={toggle}></Modal>;
}
