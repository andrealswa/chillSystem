import classNames from 'classnames';
import { CText } from '../text/CText';
import { FocusEvent, MouseEvent } from 'react';

export enum CButtonType {
	Primary = 'Primary',
	Secondary = 'Secondary',
	Tertiary = 'Tertiary',
}

export interface CButtonProps {
	id?: string;
	className?: string;
	onClick: (
		event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => void;
	onBlur?: (e: FocusEvent<HTMLButtonElement, Element>) => any;
	label: string;
	buttonType?: CButtonType;
	disabled?: boolean;
	buttonRef?: React.RefObject<any>;
	onKeyDown?:
		| React.KeyboardEventHandler<HTMLButtonElement>
		| undefined;
}

export const CButton = (props: CButtonProps) => {
	return (
		<div
			id={props.id}
			className={classNames(
				`cbutton ${props.className ? props.className : ''}`,
				{
					'cbutton--primary':
						props.buttonType === CButtonType.Primary ||
						!props.buttonType,
					'cbutton--secondary':
						props.buttonType === CButtonType.Secondary,
					'cbutton--tertiary':
						props.buttonType === CButtonType.Tertiary,
					'cbutton--disabled': props.disabled,
				}
			)}>
			<button
				ref={props.buttonRef}
				onClick={(event) => {
					!props.disabled
						? props.onClick(event)
						: event.preventDefault();
				}}
				onBlur={(event) => {
					!props.disabled ? props.onBlur?.(event) : undefined;
				}}
				onKeyDown={
					!props.disabled ? props.onKeyDown : undefined
				}></button>
			<CText text={props.label} />
		</div>
	);
};
