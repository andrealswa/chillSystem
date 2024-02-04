import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { CButton } from './Components/button/CButton';
import './styles/main.scss';
import { CCard } from './Components/card/CCard';
import { CTextInput } from './Components/text-input/CTextInput';

function NewApp() {
	return (
		<div className="main">
			<header className="App-header">
				<div className="container">
					<CCard>
						<CButton
							label="Button"
							onClick={() => console.log('Clicked')}
						/>
					</CCard>
					<CCard>
						<CTextInput></CTextInput>
					</CCard>
				</div>
			</header>
		</div>
	);
}

export default NewApp;
