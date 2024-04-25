export class practicePg {
	webElements = {
		homeBtn: () => cy.get('button.btn.btn-primary'),
		practisePage: () => cy.get('div.wrapper'),
		dropdown: () => cy.get('select#dropdown-class-example'),
		imgUpload: () => cy.get('input[name="img"]'),
		uploadedImg: () => cy.get('div.image-upload-wrapper img'),
		newTabBtn: () => cy.get('button#opentab'),
		nameField: () => cy.get('input[name="enter-name"]'),
		alertBtn: () => cy.get('input#alertbtn'),
		confirmBtn: () => cy.get('input#confirmbtn'),
		hideBtn: () => cy.get('input#hide-textbox'),
		showBtn: () => cy.get('input#show-textbox'),
		inputField: () => cy.get('input#displayed-text'),
		mouseHoverBtn: () => cy.get('button.btn.btn-primary.hover-btn'),
		hoverMenu: () => cy.get('div.hover-content'),
		iFrame: () => cy.get('iframe#courses-iframe')
	};

	openPracticePage() {
		cy.visit(Cypress.env('indexUrl'));
		return this;
	}

	verifyTitle(title: string) {
		cy.log('The title is ' + title);
		cy.title().should('include', title);
		return this;
	}

	verifyHomeBtn() {
		this.webElements
			.homeBtn()
			.parent()
			.should('have.attr', 'href')
			.and('include', 'easygenerator.com');
		return this;
	}

	selectDropdown() {
		this.webElements.dropdown().find('option').should('not.have.length', 0);
		this.webElements
			.dropdown()
			.select('Option3')
			.invoke('val')
			.should('deep.equal', 'option3');
		return this;
	}

	uploadImg(path: string) {
		this.webElements.imgUpload().selectFile(path);
		return this;
	}

	verifyImgDisplayed() {
		this.webElements.uploadedImg().should('be.visible');
		return this;
	}

	verifyOpenNewTab() {
		//this.webElements.newTabBtn().invoke("removeAttr", "target").click();
		this.webElements.newTabBtn().should('have.attr', 'target', '_blank');
		return this;
	}

	invokeAlertText(text) {
		this.webElements.nameField().type(text);
		return this;
	}

	clickAlertBtn() {
		this.webElements.alertBtn().click();
		return this;
	}

	verifyAlertTxt() {
		cy.on('window:alert', (txt) => {
			// expect(txt).to.contains(
			// 	'Hello Hello from Easygenerator, share this practice page and share your knowledge'
			// );
			expect(txt).not.to.be.empty;
		});
		return this;
	}

	clickHideBtn() {
		this.webElements.hideBtn().click();
		return this;
	}
	clickShowBtn() {
		this.webElements.showBtn().click();
		return this;
	}

	verifyTextBox(a: boolean) {
		if (a == true) {
			this.webElements.inputField().should('be.visible');
		} else {
			this.webElements.inputField().should('not.be.visible');
		}
		return this;
	}

	verifyHoverBtn() {
		this.webElements.mouseHoverBtn().trigger('mouseover');
		this.webElements
			.hoverMenu()
			.children()
			.contains('Top')
			.should('be.visible');
		this.webElements
			.hoverMenu()
			.children()
			.contains('Reload')
			.should('be.visible');
		return this;
	}

	verifyHoverMenu() {
		this.webElements
			.hoverMenu()
			.children()
			.contains('Top')
			.click({ force: true });
		cy.url().should('include', '#top');
		this.webElements
			.hoverMenu()
			.children()
			.contains('Reload')
			.click({ force: true });
		cy.url().should('not.include', '#top');
		return this;
	}

	verifyIFrame() {
		this.webElements.iFrame().should('be.visible').and('not.be.empty');
		return this;
	}
}
