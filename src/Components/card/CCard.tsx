import classNames from 'classnames';
import { ReactElement } from 'react';

export interface CCardProps {
	className?: string;
	children: ReactElement<any, any>;
}

export const CCard = (props: CCardProps) => {
	return (
		<div
			className={classNames(
				`ccard ${props.className ? props.className : ''}`
			)}>
			{props.children}
		</div>
	);
};
