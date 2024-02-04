import classNames from 'classnames';

export interface CTextInputProps {
	className?: string;
}

export const CTextInput = (props: CTextInputProps) => {
	return (
		<div
			className={classNames(
				`ctextinput ${props.className ? props.className : ''}`
			)}>
			<input type="text" />
		</div>
	);
};
