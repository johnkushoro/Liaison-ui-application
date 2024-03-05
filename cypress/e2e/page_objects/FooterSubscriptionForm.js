

export default class FooterSubscriptionForm {

    static LABEL_SELECTOR = 'label';
    static INPUT_SELECTOR = (inputId) => `input[id="${inputId}"]`;
    static SUBMIT_BUTTON_SELECTOR = 'button.frm_button_submit.frm_final_submit';
    static SUBSCRIPTION_DISPLAY_MSG = '.frm_message p';


    formsDetailsInputField(labelText, inputText) {
        cy.contains(FooterSubscriptionForm.LABEL_SELECTOR, labelText).invoke('attr', 'for').then((inputId) => {
            const selector = FooterSubscriptionForm.INPUT_SELECTOR(inputId);
            cy.get(selector).should('exist').should('be.visible').type(inputText);
        });
    }

    clickFormSubmitButton() {
        cy.get(FooterSubscriptionForm.SUBMIT_BUTTON_SELECTOR).click({force: true});
    }

    successfulSubscriptionDisplayMsg(expectedMessage) {
        cy.get(FooterSubscriptionForm.SUBSCRIPTION_DISPLAY_MSG).then(($p) => {
            const actualText = $p.text().trim();
            expect(actualText).to.eq(expectedMessage);
        });
    }
}