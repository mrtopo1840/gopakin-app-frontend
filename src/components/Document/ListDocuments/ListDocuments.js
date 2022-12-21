import React, { useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { FaAlignJustify, FaEye } from "react-icons/fa";
import { ModalViewDocuments } from "../ModaViewDocuments";
import "./ListDocuments.css";

export function ListDocuments() {
  const [showModal, setShowModal] = useState(true);

  const onClickShow = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="list-document">
        <h3>Documents</h3>
        <Table style={{ textAlign: "center" }} striped bordered hover>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Parking</th>
              <th>Status</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heidy</td>
              <td>Super park</td>
              <td>
                <h5>
                  <Badge bg="warning" text="dark">
                    Pending
                  </Badge>
                </h5>
              </td>
              <td>
                <span className="show_doc" onClick={onClickShow}>
                  <FaEye style={{ fontSize: "25px" }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>Sebas</td>
              <td>Parking anithing</td>
              <td>
                <h5>
                  <Badge bg="danger" text="dark">
                    Rejected
                  </Badge>
                </h5>
              </td>
              <td>
                <span className="show_doc" onClick={onClickShow}>
                  <FaEye style={{ fontSize: "25px" }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>Topo</td>
              <td>The parking</td>
              <td>
                <h5>
                  <Badge bg="success" text="dark">
                    Aproved
                  </Badge>
                </h5>
              </td>
              <td>
                <span className="show_doc" onClick={onClickShow}>
                  <FaEye style={{ fontSize: "25px" }} />
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <ModalViewDocuments
        show={showModal}
        close={() => {
          setShowModal(false);
        }}
      />
    </>
  );
}