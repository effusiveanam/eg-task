import { practicePg } from './pages/practicePg';

const practice = new practicePg();
const txtFilePath: string = './cypress/fixtures/pic.jpeg';
const pageTitle: string = 'Practice Page';

describe('Practice Page Test', () => {
	beforeEach(() => {
		practice.openPracticePage();
	});

	it('Verify the header text after page is opened', () => {
		practice.verifyPracticePageText(pageTitle);
	});

	it('Verify Home button with the link', () => {
		practice.verifyHomeBtn();
	});

	it('Verify dropdown', () => {
		practice.selectDropdown();
	});

	it('Verify image uploader', () => {
		practice.uploadImg(txtFilePath);
		practice.verifyImgDisplayed();
	});

	it('Verify and handle Open New Tab button', () => {
		practice.verifyOpenNewTab();
	});

	it('Verify alert', () => {
		cy.task('readTxtFile', './cypress/fixtures/alert-text.txt').then((text) => {
			practice.invokeAlertText(text);
			practice.clickAlertBtn();
			practice.verifyAlertTxt();
		});
	});

	it('Verify text box', () => {
		practice.verifyTextBox(true);
		practice.clickHideBtn();
		practice.verifyTextBox(false);
		practice.clickShowBtn();
		practice.verifyTextBox(true);
	});

	it('Verify hover menu', () => {
		practice.verifyHoverBtn();
		practice.verifyHoverMenu();
	});

	it('Verify iframe visibility', () => {
		practice.verifyIFrame();
	});
});
