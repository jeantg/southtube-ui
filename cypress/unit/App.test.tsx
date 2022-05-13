import {mount} from '@cypress/react'
import App from 'pages/index'
it('app test', ()=>{
    mount(<App/>)
    cy.findByText('Home')
})