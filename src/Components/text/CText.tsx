import classNames from 'classnames';

export interface CTextProps {
	className?: string;
	text: string;
}

export const CText = (props: CTextProps) => {
	return (
		<div
			className={classNames(
				`ctext ${props.className ? props.className : ''}`
			)}>
			{props.text}
		</div>
	);
};
