import classNames from 'classnames';

export enum CPosition {
	TOP = 'Top',
	RIGHT = 'Right',
	BOTTOM = 'Bottom',
	LEFT = 'Left',
}

export enum CBannerSizePercent {
	SMALL = '25%',
	MEDIUM = '50%',
	LARGE = '75%',
	FULL = '100%',
}

export interface CBannerProps {
	className?: string;
	position?: CPosition;
	size?: CBannerSizePercent;
}

export const CBanner = (props: CBannerProps) => {
	return (
		<div
			className={classNames(
				`cbanner ${props.className ? props.className : ''}`
			)}></div>
	);
};
