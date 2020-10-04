import React from 'react';
import './assets/style.css'

export default function Modal({isOpen, onClose, title, isLarge, children, className}) {

	let closeModal = () => {
		onClose();
	}

	return (
		<div>
			<div className={`modal-wrapper ${isOpen ? 'modal-is-open': ''} ${!className ? '' : className}`}>
				<div onClick={closeModal} className="overlay close-modal" />
				<div className={`modal modal-centered ${isLarge ? 'modal-lg' : ''}`}>
					<div className={`modal-content`}>
						<div className="modal-content-header">
							<div>
								{!title ? <span></span> : title}
								<span
									onClick={closeModal}
									className="close-modal"
								>
									<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
								</span>
							</div>
						</div>

						{/* <!-- Modal content --> */}
                  {children}
						{/* <!-- Modal content --> */}
					</div>
				</div>
			</div>
		</div>
	);
}
