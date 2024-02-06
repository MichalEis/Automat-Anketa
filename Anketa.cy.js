describe('Anketa Fotbal Benesov', function () {

    it.only('Anketa fotbal', () => {
        cy.visit('https://benesovsky.denik.cz/fotbal_region/anketa-zvolte-nejoblibenejsi-fotbalovy-klub-okresu-benesov-20240203.html', { timeout: 1000000 });
        cy.get('#didomi-notice-agree-button', { timeout: 1000000 }).click();
        cy.get(':nth-child(51) > .survey__answer-btn', { timeout: 1000000 }).click({ force: true });

    })
})