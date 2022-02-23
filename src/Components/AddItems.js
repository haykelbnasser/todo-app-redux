import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { addItem } from "../Redux/actions/ActionTask";

const AddItems = ({ handleFilter, filter }) => {
    const [Grabbedvalue, setGrabbedvalue] = useState("");

    const handleChange = (e) => {
        setGrabbedvalue(e.target.value);
    };
    const dispatch = useDispatch();
    const addNewItem = (e) => {
        e.preventDefault();
        if (Grabbedvalue) {
            dispatch(
                addItem({
                    id: Date.now(),
                    description: Grabbedvalue,
                    isDone: false,
                })
            );
            setGrabbedvalue("");
        }
        else alert("Please Enter ur TODO")
    };


    return (
        <Card bg="primary">
            <Card.Body>
                <h1 className={"text-white"}>To-Do-App !</h1>

                <Form onSubmit={addNewItem}>
                    <Form.Group>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={Grabbedvalue}
                                onChange={handleChange}
                            />
                            
                                <Button variant="success" onClick={addNewItem}>
                                    ADD
                                </Button>
                            

                        </InputGroup>
                    </Form.Group>
                </Form>
                <Button variant="info" className="mr-3" onClick={handleFilter}>{filter ? "All" : "isDone"}</Button>
            </Card.Body>
        </Card>
    );
}



export default AddItems;