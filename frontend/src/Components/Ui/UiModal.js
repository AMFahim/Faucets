import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const UiModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Connect Your Wallet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{display: "flex"}} className="justify-content-center gap-4 flex-wrap">
                <div style={{backgroundColor: "#F5F7FD"}} className="p-5">
                    <img style={{height: "100px"}} src="https://faucets1.netlify.app/static/media/MetaMask_Fox.svg.d9c41a5680a1daaae624.png" alt='image'/>
                    <h4 style={{color: "#9B1FE9"}}>MetaMask</h4>
                </div>
                <div style={{backgroundColor: "#F5F7FD"}} className="p-5">
                    <img style={{height: "100px", marginLeft: "20px" }} src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg" alt='image'/>
                    <h4 style={{color: "#9B1FE9"}}>WalletConnect</h4>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default UiModal;