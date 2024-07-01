import React from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import '@picocss/pico';

const ConfirmDeleteDialog = ({ onDelete }) => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className="confirm-dialog" style={{ padding: '2rem', borderRadius: '8px', backgroundColor: '#333', color: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ fontSize: '2rem' }}>WAIT</h1>
                    <p>Are you sure you want to delete this creator?</p>
                    <div className="button-group" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <button
                            onClick={() => {
                                onDelete();
                                onClose();
                            }}
                            className="secondary outline"
                        >
                            Yes
                        </button>
                        <button
                            onClick={onClose}
                            className="secondary"
                        >
                            No
                        </button>
                    </div>
                </div>
            );
        },
    });
};

export default ConfirmDeleteDialog;
