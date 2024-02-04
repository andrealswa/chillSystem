import classNames from 'classnames';
import { CText } from '../text/CText';

export interface CButtonProps {
	id?: string;
	className?: string;
	onClick: () => any;
	label: string;
}

export const CButton = (props: CButtonProps) => {
	return (
		<div
			id={props.id}
			className={classNames(
				`cbutton ${props.className ? props.className : ''}`
			)}
			onClick={props.onClick}>
			<CText text={props.label} />
		</div>
	);
};
