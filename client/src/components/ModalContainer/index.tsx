import { ReactNode } from 'react';

interface ModalContainerProps {
	children: ReactNode;
}

const ModalContainer = ({ children }: ModalContainerProps) => {
	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-1 '>
			{children}
		</div>
	);
};

export default ModalContainer;
