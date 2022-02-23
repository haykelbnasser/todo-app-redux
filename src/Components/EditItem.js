import React, { useState } from "react";
import { Button, Modal, FormControl, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useDispatch } from "react-redux";
import { editItem } from "../Redux/actions/ActionTask";

const EditItem = ({ item }) => {
    const [show, setShow] = useState(false);
    const [Myinput, setMyinput] = useState(item.description);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => setMyinput(e.target.value);

    const edit = () => {
        dispatch(editItem({ id: item.id, description: Myinput }));
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Tile>EditItem</Modal.Tile>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        value={Myinput}
                        onchange={handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                            setMyinput(item.description);
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleClose();
                            edit();
                        }}>
                        Save Changes
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )

}
export default EditItem;